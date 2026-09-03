"""report.py — função pura sobre uma lista de snapshots (dict fixo, mesmo
shape de snapshots.list_snapshots())."""
from _shc_loader import load_backend_main

main = load_backend_main()
report = main.report


def _snapshot(recommendation_id, applied_at, before_ram, after_ram, before_cpu=50.0, after_cpu=50.0):
    return {
        "id": 1,
        "recommendation_id": recommendation_id,
        "applied_at": applied_at,
        "before": {"metrics": {"ram_percent": before_ram, "cpu_percent": before_cpu}},
        "after": {"metrics": {"ram_percent": after_ram, "cpu_percent": after_cpu}},
    }


def test_no_data_when_no_snapshots():
    result = report.build_report([])
    assert result == {
        "status": "no_data",
        "applied_count": 0,
        "message": "Nenhuma recomendação foi aplicada ainda.",
    }


def test_single_snapshot_computes_improvement():
    snap = _snapshot("stop-service-Fax", "2026-01-01T00:00:00+00:00", before_ram=90.0, after_ram=70.0)
    result = report.build_report([snap])
    assert result["status"] == "ok"
    assert result["applied_count"] == 1
    assert result["ram_percent_before"] == 90.0
    assert result["ram_percent_after"] == 70.0
    assert result["ram_percent_improvement"] == 20.0
    assert result["services_stopped"] == ["stop-service-Fax"]


def test_compares_first_before_with_last_after():
    first = _snapshot("stop-service-Fax", "t1", before_ram=90.0, after_ram=80.0)
    second = _snapshot("stop-service-MapsBroker", "t2", before_ram=80.0, after_ram=60.0)
    result = report.build_report([first, second])
    assert result["ram_percent_before"] == 90.0
    assert result["ram_percent_after"] == 60.0
    assert result["ram_percent_improvement"] == 30.0
    assert result["applied_count"] == 2
    assert result["services_stopped"] == ["stop-service-Fax", "stop-service-MapsBroker"]


def test_negative_improvement_when_metric_got_worse():
    snap = _snapshot("stop-service-Fax", "t1", before_ram=40.0, after_ram=60.0)
    result = report.build_report([snap])
    assert result["ram_percent_improvement"] == -20.0


def test_missing_metric_data_does_not_crash():
    snap = {
        "recommendation_id": "stop-service-Fax",
        "applied_at": "t1",
        "before": {"metrics": {}},
        "after": {"metrics": {}},
    }
    result = report.build_report([snap])
    assert result["ram_percent_improvement"] is None
