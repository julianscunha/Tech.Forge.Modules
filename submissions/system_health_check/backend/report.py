"""Relatório antes/depois — função pura sobre a lista de snapshots gravados
(sem I/O aqui dentro, mesma regra de recommendations.py). Compara a
`métrica` do primeiro snapshot (linha de base, antes de qualquer apply) com
a do último (estado atual) — é o "estava assim, ficou assim" que o usuário
pediu, não uma média de todas as aplicações."""
from __future__ import annotations


def _percent_delta(before: float | None, after: float | None) -> float | None:
    """Positivo = melhora (uso caiu). None se algum lado não tem dado."""
    if before is None or after is None:
        return None
    return round(before - after, 1)


def build_report(snapshots: list[dict]) -> dict:
    if not snapshots:
        return {
            "status": "no_data",
            "applied_count": 0,
            "message": "Nenhuma recomendação foi aplicada ainda.",
        }

    baseline_metrics = snapshots[0]["before"].get("metrics", {})
    current_metrics = snapshots[-1]["after"].get("metrics", {})

    services_stopped = [
        s["recommendation_id"] for s in snapshots
        if s["recommendation_id"].startswith("stop-service-")
    ]

    return {
        "status": "ok",
        "applied_count": len(snapshots),
        "first_applied_at": snapshots[0]["applied_at"],
        "last_applied_at": snapshots[-1]["applied_at"],
        "ram_percent_before": baseline_metrics.get("ram_percent"),
        "ram_percent_after": current_metrics.get("ram_percent"),
        "ram_percent_improvement": _percent_delta(
            baseline_metrics.get("ram_percent"), current_metrics.get("ram_percent")
        ),
        "cpu_percent_before": baseline_metrics.get("cpu_percent"),
        "cpu_percent_after": current_metrics.get("cpu_percent"),
        "cpu_percent_improvement": _percent_delta(
            baseline_metrics.get("cpu_percent"), current_metrics.get("cpu_percent")
        ),
        "services_stopped": services_stopped,
        "applied_recommendations": [
            {"recommendation_id": s["recommendation_id"], "applied_at": s["applied_at"]}
            for s in snapshots
        ],
    }
