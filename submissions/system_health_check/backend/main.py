"""
system_health_check — Backend Entry Point
=====================================================
Module    : system_health_check
Name      : System Health Check
Category  : System
Vendor    : TechForge
Icon      : activity
Order     : 11

Application Module de referência — demonstra uma dependência real e
declarada (Fase 8.1) entre módulos: consome o System Information Service
exclusivamente pelo contrato público (`sdk.services.invoke`), nunca
importando o código do outro módulo diretamente.
"""
import asyncio
import sys
from datetime import datetime, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent.parent.parent.parent / "sdk" / "python"))
sys.path.insert(0, str(Path(__file__).parent))

import dashboard
import recommendations
import report
import snapshots
from fastapi import APIRouter, HTTPException

from techforge_sdk import create_sdk
from techforge_sdk.contracts import HealthResult, ModuleContract, ModuleMetadata
from techforge_sdk.services import ServiceInvokeError

sdk = create_sdk("system_health_check")

router = APIRouter(prefix="/modules/system_health_check", tags=["system_health_check"])

DEPENDENCY_ID = "system_information_service"


@router.get("/ping")
async def ping():
    sdk.logger.info("system_health_check ping called")
    return {"module": "system_health_check", "status": "ok", "version": "1.1.0"}


def _unavailable(reason: str) -> dict:
    return {
        "status": "unavailable",
        "checks": [],
        "message": reason,
        "checked_at": datetime.now(timezone.utc).isoformat(),
    }


@router.get("/health")
def run_health_check() -> dict:
    """Executa a checagem (§4/§6 do exemplo): busca dados reais do System
    Information Service e aplica regras simples — nunca fabrica dado que
    o contrato público do serviço não oferece (ex: sem % de memória, o
    serviço não expõe isso).

    `def` (não `async def`) de propósito: sdk.services.invoke() faz uma
    chamada HTTP síncrona de volta pro próprio Core (mesmo processo).
    Num handler `async def`, isso trava o único event loop do uvicorn
    tentando aceitar a própria requisição de loopback — deadlock. Como
    endpoint sync, o Starlette roda numa threadpool, fora do loop."""
    try:
        system_info = sdk.services.invoke(DEPENDENCY_ID, "get_system_info")
        cpu_info = sdk.services.invoke(DEPENDENCY_ID, "get_cpu_info")
        runtime_info = sdk.services.invoke(DEPENDENCY_ID, "get_runtime_info")
    except ServiceInvokeError as exc:
        if exc.code in ("SERVICE_NOT_FOUND", "SERVICE_UNREACHABLE"):
            return _unavailable(
                f"{DEPENDENCY_ID} is required. Install the dependency to run the check."
            )
        if exc.code in ("SERVICE_DISABLED", "SERVICE_UNAVAILABLE"):
            return _unavailable(f"{DEPENDENCY_ID} is installed but not active.")
        return _unavailable(f"{DEPENDENCY_ID} call failed: {exc}")

    checks = [
        {
            "name": "system",
            "ok": bool(system_info.get("operating_system")),
            "message": f"{system_info.get('operating_system', 'unknown')} detected",
        },
        {
            "name": "cpu",
            "ok": (cpu_info.get("logical_cores") or 0) > 0,
            "message": f"{cpu_info.get('logical_cores', 0)} logical core(s) available",
        },
        {
            "name": "runtime",
            "ok": bool(runtime_info.get("python_version")),
            "message": f"Python {runtime_info.get('python_version', '?')} "
                       f"({runtime_info.get('python_implementation', '?')})",
        },
        {"name": "service", "ok": True, "message": f"{DEPENDENCY_ID} responded"},
    ]
    status = "healthy" if all(c["ok"] for c in checks) else "degraded"
    return {
        "status": status,
        "checks": checks,
        "message": None,
        "checked_at": datetime.now(timezone.utc).isoformat(),
    }


@router.get("/dashboard")
def get_dashboard() -> dict:
    """Agrega hardware + métricas ao vivo + serviços/drivers/update do
    Windows num único payload pro frontend. `def` sync pelo mesmo motivo
    de `/health`: `sdk.services.invoke` bloqueia em HTTP síncrono."""
    try:
        # Get-CimInstance Win32_PnPSignedDriver (get_windows_drivers) leva
        # ~2-2.3s no host de referência — acima do http_timeout padrão do
        # SDK (2.0s), o que degradava o dashboard inteiro por timeout.
        sdk.services.http_timeout = 10.0
        return dashboard.build_dashboard(sdk.services.invoke)
    except ServiceInvokeError as exc:
        if exc.code in ("SERVICE_NOT_FOUND", "SERVICE_UNREACHABLE"):
            return _unavailable(
                f"{DEPENDENCY_ID} is required. Install the dependency to run the check."
            )
        if exc.code in ("SERVICE_DISABLED", "SERVICE_UNAVAILABLE"):
            return _unavailable(f"{DEPENDENCY_ID} is installed but not active.")
        return _unavailable(f"{DEPENDENCY_ID} call failed: {exc}")


@router.get("/recommendations")
def get_recommendations() -> dict:
    """Recomendações derivadas do dashboard atual. `def` sync pelo mesmo
    motivo de `/dashboard` (invoke bloqueia em HTTP síncrono)."""
    try:
        sdk.services.http_timeout = 10.0
        current = dashboard.build_dashboard(sdk.services.invoke)
    except ServiceInvokeError as exc:
        if exc.code in ("SERVICE_NOT_FOUND", "SERVICE_UNREACHABLE"):
            return _unavailable(
                f"{DEPENDENCY_ID} is required. Install the dependency to run the check."
            )
        if exc.code in ("SERVICE_DISABLED", "SERVICE_UNAVAILABLE"):
            return _unavailable(f"{DEPENDENCY_ID} is installed but not active.")
        return _unavailable(f"{DEPENDENCY_ID} call failed: {exc}")
    return {"recommendations": recommendations.generate_recommendations(current)}


@router.post("/recommendations/{recommendation_id}/apply")
def apply_recommendation(recommendation_id: str) -> dict:
    """Aplica uma recomendação acionável e grava o par antes/depois via
    `sdk.database` (consumido depois por `/report`, Fase System Health §7).
    Recalcula as recomendações no momento do apply (não confia num id vindo
    de uma listagem antiga) — se a condição já não existe mais, 404."""
    try:
        sdk.services.http_timeout = 10.0
        before = dashboard.build_dashboard(sdk.services.invoke)
    except ServiceInvokeError as exc:
        if exc.code in ("SERVICE_NOT_FOUND", "SERVICE_UNREACHABLE"):
            return _unavailable(
                f"{DEPENDENCY_ID} is required. Install the dependency to run the check."
            )
        if exc.code in ("SERVICE_DISABLED", "SERVICE_UNAVAILABLE"):
            return _unavailable(f"{DEPENDENCY_ID} is installed but not active.")
        return _unavailable(f"{DEPENDENCY_ID} call failed: {exc}")

    match = next(
        (r for r in recommendations.generate_recommendations(before) if r["id"] == recommendation_id),
        None,
    )
    if match is None:
        raise HTTPException(status_code=404, detail=f"recommendation '{recommendation_id}' not found")
    if not match["actionable"]:
        raise HTTPException(
            status_code=400, detail=f"recommendation '{recommendation_id}' is informational only"
        )

    action = match["action"]
    try:
        if action["type"] == "apply_service_action":
            sdk.services.invoke(DEPENDENCY_ID, "apply_service_action", **action["params"])
        else:
            raise HTTPException(status_code=400, detail=f"unknown action type '{action['type']}'")
    except ServiceInvokeError as exc:
        raise HTTPException(status_code=502, detail=f"failed to apply action: {exc}") from exc

    after = dashboard.build_dashboard(sdk.services.invoke)
    snapshot_id = asyncio.run(snapshots.record(sdk.database, recommendation_id, before, after))
    return {"recommendation_id": recommendation_id, "snapshot_id": snapshot_id, "before": before, "after": after}


@router.get("/report")
def get_report() -> dict:
    """Agrega os snapshots gravados por `/recommendations/{id}/apply` num
    relatório antes/depois. Não chama o System Information Service — só lê
    o histórico já persistido em `sdk.database`."""
    rows = asyncio.run(snapshots.list_snapshots(sdk.database))
    return report.build_report(rows)


class SystemHealthCheckModule(ModuleContract):

    @property
    def metadata(self) -> ModuleMetadata:
        return ModuleMetadata(
            id="system_health_check",
            name="System Health Check",
            version="1.1.0",
            category="System",
            vendor="TechForge",
            author="TechForge Team",
            description="Dashboard, recomendações e relatório de antes/depois de desempenho do sistema.",
            platform_min_version="1.0.0",
            platform_max_version="2.0.0",
        )

    async def install(self) -> None:
        sdk.logger.info("system_health_check install()")

    async def enable(self) -> None:
        sdk.logger.info("system_health_check enable()")

    async def disable(self) -> None:
        sdk.logger.info("system_health_check disable()")

    async def upgrade(self, from_version: str) -> None:
        sdk.logger.info("system_health_check upgrade() from %s", from_version)

    async def health_check(self) -> HealthResult:
        return HealthResult.ok("system_health_check is healthy.")

    async def uninstall(self) -> None:
        sdk.logger.info("system_health_check uninstall()")
        sdk.settings.reset()


module = SystemHealthCheckModule()
