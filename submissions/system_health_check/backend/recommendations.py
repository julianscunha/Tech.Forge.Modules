"""Motor de recomendações — funções puras sobre o payload do dashboard, sem
I/O e sem chamada ao SDK aqui dentro (Fase System Health, tasks/plan.md
§Architecture Decisions) — testável sem TestClient nem mocks de rede.

Cada regra recebe o dict de `dashboard.build_dashboard()` e devolve 0+
recomendações. `generate_recommendations` só concatena o resultado de cada
regra — adicionar uma categoria nova é escrever mais uma função `_rule_*` e
listar em `_RULES`.
"""
from __future__ import annotations

from datetime import datetime, timedelta, timezone

# Serviços universalmente opcionais que o módulo sabe recomendar desligar
# quando estão rodando — mesma lista que windows.SAFE_TO_MANAGE, mantida
# aqui como constante própria porque recommendations.py não importa windows
# (regra de arquitetura: zero I/O, zero dependência do outro módulo aqui).
SAFE_TO_MANAGE = frozenset({"Fax", "WMPNetworkSvc", "MapsBroker", "RemoteRegistry", "TabletInputService"})

RAM_WARNING_PERCENT = 85.0
CPU_WARNING_PERCENT = 90.0
DISK_WARNING_PERCENT = 90.0
UPDATE_STALE_DAYS = 90
DRIVER_STALE_DAYS = 365 * 5


def _rule_high_ram(dashboard: dict) -> list[dict]:
    percent = dashboard.get("metrics", {}).get("ram_percent")
    if percent is None or percent < RAM_WARNING_PERCENT:
        return []
    return [{
        "id": "high-ram-usage",
        "category": "performance",
        "severity": "warning",
        "title": "Uso de memória alto",
        "description": f"RAM em {percent:.0f}% de uso. Feche aplicativos não utilizados.",
        "actionable": False,
        "action": None,
    }]


def _rule_high_cpu(dashboard: dict) -> list[dict]:
    percent = dashboard.get("metrics", {}).get("cpu_percent")
    if percent is None or percent < CPU_WARNING_PERCENT:
        return []
    return [{
        "id": "high-cpu-usage",
        "category": "performance",
        "severity": "warning",
        "title": "Uso de CPU alto",
        "description": f"CPU em {percent:.0f}% de uso no momento da leitura.",
        "actionable": False,
        "action": None,
    }]


def _rule_low_disk_space(dashboard: dict) -> list[dict]:
    recs = []
    for disk in dashboard.get("metrics", {}).get("disks", []):
        percent = disk.get("used_percent")
        if percent is None or percent < DISK_WARNING_PERCENT:
            continue
        mountpoint = disk.get("mountpoint", "?")
        slug = mountpoint.strip("\\/:").lower() or "unknown"
        recs.append({
            "id": f"low-disk-space-{slug}",
            "category": "performance",
            "severity": "warning",
            "title": f"Pouco espaço livre em {mountpoint}",
            "description": f"{mountpoint} está com {percent:.0f}% de uso.",
            "actionable": False,
            "action": None,
        })
    return recs


def _rule_unused_services(dashboard: dict) -> list[dict]:
    recs = []
    for service in dashboard.get("services", []):
        name = service.get("name")
        if name not in SAFE_TO_MANAGE:
            continue
        if service.get("status") != "Running":
            continue
        recs.append({
            "id": f"stop-service-{name}",
            "category": "service",
            "severity": "info",
            "title": f"Serviço opcional em execução: {service.get('display_name') or name}",
            "description": f"'{name}' está rodando e normalmente não é necessário. "
                            "Pode ser desligado com segurança.",
            "actionable": True,
            "action": {"type": "apply_service_action", "params": {"name": name, "action": "stop"}},
        })
    return recs


def _rule_stale_updates(dashboard: dict) -> list[dict]:
    last_hotfix = dashboard.get("updates", {}).get("last_hotfix_date")
    if not last_hotfix:
        return []
    try:
        # Get-HotFix InstalledOn via .ToString('o') — formato ISO 8601.
        installed_on = datetime.fromisoformat(last_hotfix)
    except ValueError:
        return []
    if installed_on.tzinfo is None:
        installed_on = installed_on.replace(tzinfo=timezone.utc)
    age = datetime.now(timezone.utc) - installed_on
    if age < timedelta(days=UPDATE_STALE_DAYS):
        return []
    return [{
        "id": "stale-windows-update",
        "category": "update",
        "severity": "warning",
        "title": "Atualizações do Windows desatualizadas",
        "description": f"Último hotfix instalado há {age.days} dias. Verifique o Windows Update.",
        "actionable": False,
        "action": None,
    }]


def _rule_stale_drivers(dashboard: dict) -> list[dict]:
    """Um driver com data própria muito antiga é sinal (não prova) de que o
    fabricante nunca revisou — não temos como saber a versão "atual" real
    sem acesso à internet, então o sinal é só a idade auto-declarada."""
    now = datetime.now(timezone.utc)
    stale_names = []
    for driver in dashboard.get("drivers", []):
        date_str = driver.get("driver_date")
        if not date_str:
            continue
        try:
            driver_date = datetime.fromisoformat(date_str)
        except ValueError:
            continue
        if driver_date.tzinfo is None:
            driver_date = driver_date.replace(tzinfo=timezone.utc)
        if (now - driver_date) >= timedelta(days=DRIVER_STALE_DAYS):
            stale_names.append(driver.get("device_name", "?"))

    if not stale_names:
        return []
    return [{
        "id": "stale-drivers",
        "category": "driver",
        "severity": "info",
        "title": f"{len(stale_names)} driver(s) com data antiga",
        "description": "Driver(s) com mais de 5 anos desde a data declarada pelo fabricante — "
                        f"vale checar atualização: {', '.join(stale_names[:3])}"
                        + (f" e mais {len(stale_names) - 3}" if len(stale_names) > 3 else "") + ".",
        "actionable": False,
        "action": None,
    }]


_RULES = (
    _rule_high_ram, _rule_high_cpu, _rule_low_disk_space,
    _rule_unused_services, _rule_stale_updates, _rule_stale_drivers,
)


def generate_recommendations(dashboard: dict) -> list[dict]:
    recs: list[dict] = []
    for rule in _RULES:
        recs.extend(rule(dashboard))
    return recs
