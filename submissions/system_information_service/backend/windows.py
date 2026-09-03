"""Wrappers Windows-specific — serviços, drivers, Windows Update.

Cada leitura passa por PowerShell (`-Command "... | ConvertTo-Json"`), nunca
parse de texto solto (Fase System Health §2 — formato varia entre versões do
Windows, JSON estruturado não). `runner` é injetável para testes: por padrão
`subprocess.run`, nos testes uma função que devolve stdout capturado, sem
depender de rodar num Windows real.
"""
from __future__ import annotations

import json
import platform
import re
import subprocess
from datetime import datetime, timedelta, timezone
from typing import Callable

_CIM_DATE_RE = re.compile(r"^/Date\((-?\d+)\)/$")

Runner = Callable[[list[str]], subprocess.CompletedProcess]


def _oem_encoding() -> str:
    # PowerShell 5.1 escreve stdout redirecionado na codepage OEM do console
    # (não UTF-8, e $OutputEncoding/[Console]::OutputEncoding não mudam isso
    # de dentro do próprio -Command) — decodificar com a codepage OEM real
    # em vez de assumir utf-8 evita mojibake em texto acentuado (achado ao
    # vivo: "Serviço" virando "Servi\x87o", que é 0x87 em cp850).
    try:
        import ctypes
        return f"cp{ctypes.windll.kernel32.GetOEMCP()}"
    except (AttributeError, OSError):
        return "utf-8"


def _default_runner(args: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run(args, capture_output=True, text=True, encoding=_oem_encoding(), timeout=30)


def _run_powershell_json(command: str, runner: Runner) -> list | dict | None:
    args = ["powershell", "-NoProfile", "-Command", f"{command} | ConvertTo-Json -Compress"]
    result = runner(args)
    if result.returncode != 0 or not result.stdout.strip():
        return None
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return None


def _as_list(data: list | dict | None) -> list:
    # ConvertTo-Json devolve um objeto solto (não lista) quando só há 1 resultado.
    if data is None:
        return []
    return data if isinstance(data, list) else [data]


def _parse_cim_date(value: str | None) -> str | None:
    """`Win32_PnPSignedDriver.DriverDate` (CIM, não um cmdlet nativo) vem do
    ConvertTo-Json como `/Date(1150848000000)/` (JSON.NET, ms desde epoch) —
    não ISO. Achado em verificação manual contra dado real, igual ao bug de
    enum em Status/StartType."""
    if not value:
        return None
    match = _CIM_DATE_RE.match(value)
    if not match:
        return value
    ms = int(match.group(1))
    # timedelta em vez de fromtimestamp: alguns drivers trazem data anterior
    # a 1970 (placeholder do fabricante) — fromtimestamp quebra com
    # OSError no runtime C do Windows para timestamp negativo.
    return (datetime(1970, 1, 1, tzinfo=timezone.utc) + timedelta(milliseconds=ms)).isoformat()


def is_windows() -> bool:
    return platform.system() == "Windows"


# Serviços universalmente opcionais em uso doméstico/desktop — nunca serviços
# de rede, segurança ou que outro software possa depender silenciosamente.
# Qualquer adição aqui é "Ask first" (ver tasks/plan.md).
SAFE_TO_MANAGE = frozenset({"Fax", "WMPNetworkSvc", "MapsBroker", "RemoteRegistry", "TabletInputService"})


class ServiceActionError(Exception):
    """Ação recusada — serviço fora da whitelist ou comando PowerShell falhou."""


def apply_service_action(name: str, action: str, runner: Runner = _default_runner) -> dict:
    """Para ou inicia um serviço whitelisted, retornando o start-type anterior
    (revert = restaurar esse valor, nunca só religar o serviço)."""
    if name not in SAFE_TO_MANAGE:
        raise ServiceActionError(f"service '{name}' is not in SAFE_TO_MANAGE whitelist")
    if action not in ("stop", "start"):
        raise ServiceActionError(f"unknown action '{action}', expected 'stop' or 'start'")
    if not is_windows():
        raise ServiceActionError("apply_service_action requires Windows")

    before = _run_powershell_json(
        f"Get-Service -Name '{name}' | Select-Object @{{N='StartType';E={{$_.StartType.ToString()}}}}",
        runner,
    )
    before_items = _as_list(before)
    previous_start_type = before_items[0].get("StartType") if before_items else None

    # Start-Service não tem -Force (só Stop-Service aceita, pra derrubar dependentes).
    command = f"Stop-Service -Name '{name}' -Force" if action == "stop" else f"Start-Service -Name '{name}'"
    result = runner(["powershell", "-NoProfile", "-Command", command])
    if result.returncode != 0:
        raise ServiceActionError(f"{action} service '{name}' failed: {result.stderr.strip()}")

    return {"name": name, "action": action, "previous_start_type": previous_start_type}


def list_services(runner: Runner = _default_runner) -> list[dict]:
    """Lista serviços do Windows (nome, status, tipo de início)."""
    if not is_windows():
        return []
    data = _run_powershell_json(
        # Status e StartType são enums (ServiceControllerStatus/ServiceStartMode)
        # — ConvertTo-Json serializa enum como int (1, 4, ...) sem cast explícito.
        # Mesma classe de bug do DateTime em update_status().
        "Get-Service | Select-Object Name, DisplayName, "
        "@{N='Status';E={$_.Status.ToString()}}, "
        "@{N='StartType';E={$_.StartType.ToString()}}",
        runner,
    )
    return [
        {
            "name": item.get("Name"),
            "display_name": item.get("DisplayName"),
            "status": item.get("Status"),
            "start_type": item.get("StartType"),
        }
        for item in _as_list(data)
    ]


def list_drivers(runner: Runner = _default_runner) -> list[dict]:
    """Lista drivers assinados instalados (nome, fabricante, versão, data)."""
    if not is_windows():
        return []
    data = _run_powershell_json(
        "Get-CimInstance Win32_PnPSignedDriver | "
        "Select-Object DeviceName, Manufacturer, DriverVersion, DriverDate",
        runner,
    )
    return [
        {
            "device_name": item.get("DeviceName"),
            "manufacturer": item.get("Manufacturer"),
            "driver_version": item.get("DriverVersion"),
            "driver_date": _parse_cim_date(item.get("DriverDate")),
        }
        for item in _as_list(data)
        if item.get("DeviceName")
    ]


def update_status(runner: Runner = _default_runner) -> dict:
    """Data do último hotfix instalado — proxy simples de 'atualizações em dia'
    sem depender do módulo COM Windows Update Agent (fora do escopo, ver spec)."""
    if not is_windows():
        return {"last_hotfix_date": None, "hotfix_count": 0}
    data = _run_powershell_json(
        # ConvertTo-Json serializa [DateTime] como objeto (Ticks, Kind, ...) por
        # padrão — só vira string comparável com um cast explícito no PowerShell.
        "Get-HotFix | Select-Object HotFixID, "
        "@{N='InstalledOn';E={$_.InstalledOn.ToString('o')}}",
        runner,
    )
    items = [i for i in _as_list(data) if i.get("InstalledOn")]
    if not items:
        return {"last_hotfix_date": None, "hotfix_count": 0}
    latest = max(items, key=lambda i: i["InstalledOn"])
    return {
        "last_hotfix_date": latest.get("InstalledOn"),
        "hotfix_count": len(items),
    }
