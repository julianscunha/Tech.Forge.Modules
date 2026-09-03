"""Agregação do dashboard — hardware + métricas ao vivo + serviços/drivers/
update do Windows, tudo lido do System Information Service via contrato
público (Fase 8.1 — nunca import direto do outro módulo).

`invoke` é injetável (assinatura de `sdk.services.invoke`) pra testar a
agregação sem depender do Core rodando (mirror do padrão em `windows.py`)."""
from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Callable

DEPENDENCY_ID = "system_information_service"

Invoke = Callable[..., Any]


def build_dashboard(invoke: Invoke) -> dict:
    hardware = invoke(DEPENDENCY_ID, "get_hardware_info")
    metrics = invoke(DEPENDENCY_ID, "get_live_metrics")
    services = invoke(DEPENDENCY_ID, "get_windows_services")
    drivers = invoke(DEPENDENCY_ID, "get_windows_drivers")
    updates = invoke(DEPENDENCY_ID, "get_windows_update_status")
    return {
        "hardware": hardware,
        "metrics": metrics,
        "services": services,
        "drivers": drivers,
        "updates": updates,
        "checked_at": datetime.now(timezone.utc).isoformat(),
    }
