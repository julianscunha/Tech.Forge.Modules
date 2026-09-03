"""recommendations.py — funções puras, entrada é um dict fixo (mesmo shape
de build_dashboard()), sem SDK nem rede."""
from datetime import datetime, timedelta, timezone

from _shc_loader import load_backend_main

main = load_backend_main()
recommendations = main.recommendations


def _base_dashboard(**overrides) -> dict:
    base = {
        "hardware": {"logical_cores": 4},
        "metrics": {"cpu_percent": 10.0, "ram_percent": 40.0, "disks": [{"mountpoint": "C:\\", "used_percent": 50.0}]},
        "services": [],
        "drivers": [],
        "updates": {"last_hotfix_date": None, "hotfix_count": 0},
        "checked_at": "2026-01-01T00:00:00+00:00",
    }
    base.update(overrides)
    return base


def test_no_recommendations_on_healthy_system():
    assert recommendations.generate_recommendations(_base_dashboard()) == []


def test_high_ram_triggers_warning():
    dash = _base_dashboard(metrics={"cpu_percent": 10.0, "ram_percent": 90.0, "disks": []})
    recs = recommendations.generate_recommendations(dash)
    assert any(r["id"] == "high-ram-usage" for r in recs)
    assert recs[0]["actionable"] is False


def test_high_cpu_triggers_warning():
    dash = _base_dashboard(metrics={"cpu_percent": 95.0, "ram_percent": 10.0, "disks": []})
    recs = recommendations.generate_recommendations(dash)
    assert any(r["id"] == "high-cpu-usage" for r in recs)


def test_low_disk_space_triggers_per_disk():
    dash = _base_dashboard(metrics={
        "cpu_percent": 1.0, "ram_percent": 1.0,
        "disks": [{"mountpoint": "C:\\", "used_percent": 95.0}, {"mountpoint": "D:\\", "used_percent": 20.0}],
    })
    recs = recommendations.generate_recommendations(dash)
    ids = [r["id"] for r in recs]
    assert ids == ["low-disk-space-c"]


def test_unused_service_running_is_actionable():
    dash = _base_dashboard(services=[
        {"name": "Fax", "display_name": "Fax", "status": "Running", "start_type": "Automatic"},
        {"name": "Spooler", "display_name": "Print Spooler", "status": "Running", "start_type": "Automatic"},
    ])
    recs = recommendations.generate_recommendations(dash)
    assert len(recs) == 1
    rec = recs[0]
    assert rec["id"] == "stop-service-Fax"
    assert rec["actionable"] is True
    assert rec["action"] == {"type": "apply_service_action", "params": {"name": "Fax", "action": "stop"}}


def test_unused_service_already_stopped_is_not_flagged():
    dash = _base_dashboard(services=[{"name": "Fax", "display_name": "Fax", "status": "Stopped", "start_type": "Manual"}])
    assert recommendations.generate_recommendations(dash) == []


def test_stale_windows_update_triggers_warning():
    old_date = (datetime.now(timezone.utc) - timedelta(days=200)).isoformat()
    dash = _base_dashboard(updates={"last_hotfix_date": old_date, "hotfix_count": 1})
    recs = recommendations.generate_recommendations(dash)
    assert any(r["id"] == "stale-windows-update" for r in recs)


def test_recent_windows_update_does_not_trigger():
    recent_date = (datetime.now(timezone.utc) - timedelta(days=5)).isoformat()
    dash = _base_dashboard(updates={"last_hotfix_date": recent_date, "hotfix_count": 1})
    assert recommendations.generate_recommendations(dash) == []


def test_missing_update_date_does_not_crash():
    dash = _base_dashboard(updates={"last_hotfix_date": None, "hotfix_count": 0})
    assert recommendations.generate_recommendations(dash) == []


def test_stale_driver_triggers_info():
    old_date = (datetime.now(timezone.utc) - timedelta(days=365 * 6)).isoformat()
    dash = _base_dashboard(drivers=[{"device_name": "Old NIC", "driver_date": old_date}])
    recs = recommendations.generate_recommendations(dash)
    assert any(r["id"] == "stale-drivers" for r in recs)
    rec = next(r for r in recs if r["id"] == "stale-drivers")
    assert rec["category"] == "driver"
    assert "Old NIC" in rec["description"]


def test_recent_driver_does_not_trigger():
    recent_date = (datetime.now(timezone.utc) - timedelta(days=30)).isoformat()
    dash = _base_dashboard(drivers=[{"device_name": "New NIC", "driver_date": recent_date}])
    assert recommendations.generate_recommendations(dash) == []


def test_driver_with_no_date_does_not_crash():
    dash = _base_dashboard(drivers=[{"device_name": "Mystery", "driver_date": None}])
    assert recommendations.generate_recommendations(dash) == []


def test_many_stale_drivers_truncates_description():
    old_date = (datetime.now(timezone.utc) - timedelta(days=365 * 6)).isoformat()
    drivers = [{"device_name": f"Driver {i}", "driver_date": old_date} for i in range(5)]
    dash = _base_dashboard(drivers=drivers)
    rec = next(r for r in recommendations.generate_recommendations(dash) if r["id"] == "stale-drivers")
    assert "e mais 2" in rec["description"]
    assert rec["title"] == "5 driver(s) com data antiga"
