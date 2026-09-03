"""apply_recommendation() — invoke monkeypatched (sem HTTP real), database
apontando pra tmp_path (aiosqlite real, sem mock)."""
import pytest
from _shc_loader import load_backend_main
from fastapi import HTTPException

main = load_backend_main()  # insere sdk/python no sys.path como efeito colateral

from techforge_sdk.database import DatabaseSDK  # noqa: E402


def _stub_invoke(responses):
    def invoke(service_id, export_name, **kwargs):
        return responses[export_name]

    return invoke


def _dashboard_responses(services):
    return {
        "get_hardware_info": {"logical_cores": 4},
        "get_live_metrics": {"cpu_percent": 1.0, "ram_percent": 1.0, "disks": []},
        "get_windows_services": services,
        "get_windows_drivers": [],
        "get_windows_update_status": {"last_hotfix_date": None, "hotfix_count": 0},
    }


@pytest.fixture(autouse=True)
def _isolated_db(tmp_path, monkeypatch):
    monkeypatch.setattr(main.sdk, "database", DatabaseSDK(module_id="t", data_dir=tmp_path))


def test_apply_stops_service_and_records_snapshot(monkeypatch):
    running = [{"name": "Fax", "display_name": "Fax", "status": "Running", "start_type": "Automatic"}]
    stopped = [{"name": "Fax", "display_name": "Fax", "status": "Stopped", "start_type": "Automatic"}]
    calls = []

    def invoke(service_id, export_name, **kwargs):
        calls.append((export_name, kwargs))
        if export_name == "apply_service_action":
            return {"name": "Fax", "action": "stop", "previous_start_type": "Automatic"}
        if export_name == "get_windows_services":
            return stopped if any(c[0] == "apply_service_action" for c in calls) else running
        return _dashboard_responses(running)[export_name]

    monkeypatch.setattr(main.sdk.services, "invoke", invoke)

    result = main.apply_recommendation("stop-service-Fax")

    assert result["recommendation_id"] == "stop-service-Fax"
    assert result["before"]["services"] == running
    assert result["after"]["services"] == stopped
    assert isinstance(result["snapshot_id"], int)
    assert ("apply_service_action", {"name": "Fax", "action": "stop"}) in calls


def test_apply_unknown_recommendation_404(monkeypatch):
    monkeypatch.setattr(main.sdk.services, "invoke", _stub_invoke(_dashboard_responses([])))
    with pytest.raises(HTTPException) as exc_info:
        main.apply_recommendation("does-not-exist")
    assert exc_info.value.status_code == 404


def test_apply_non_actionable_recommendation_400(monkeypatch):
    responses = _dashboard_responses([])
    responses["get_live_metrics"] = {"cpu_percent": 1.0, "ram_percent": 95.0, "disks": []}
    monkeypatch.setattr(main.sdk.services, "invoke", _stub_invoke(responses))
    with pytest.raises(HTTPException) as exc_info:
        main.apply_recommendation("high-ram-usage")
    assert exc_info.value.status_code == 400


def test_report_reflects_applied_snapshot(monkeypatch):
    running = [{"name": "Fax", "display_name": "Fax", "status": "Running", "start_type": "Automatic"}]
    stopped = [{"name": "Fax", "display_name": "Fax", "status": "Stopped", "start_type": "Automatic"}]
    calls = []

    def invoke(service_id, export_name, **kwargs):
        calls.append((export_name, kwargs))
        if export_name == "apply_service_action":
            return {"name": "Fax", "action": "stop", "previous_start_type": "Automatic"}
        if export_name == "get_windows_services":
            return stopped if any(c[0] == "apply_service_action" for c in calls) else running
        return _dashboard_responses(running)[export_name]

    monkeypatch.setattr(main.sdk.services, "invoke", invoke)

    assert main.get_report()["status"] == "no_data"
    main.apply_recommendation("stop-service-Fax")
    report = main.get_report()

    assert report["status"] == "ok"
    assert report["applied_count"] == 1
    assert report["services_stopped"] == ["stop-service-Fax"]
