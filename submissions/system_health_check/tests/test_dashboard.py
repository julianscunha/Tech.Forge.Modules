"""build_dashboard() — invoke injetado (fake), sem depender do Core rodando."""
from _shc_loader import load_backend_main

main = load_backend_main()
dashboard = main.dashboard


def test_build_dashboard_aggregates_all_five_exports():
    calls = []

    def fake_invoke(service_id, export_name, **kwargs):
        calls.append((service_id, export_name))
        return {
            "get_hardware_info": {"logical_cores": 8},
            "get_live_metrics": {"cpu_percent": 12.5},
            "get_windows_services": [{"name": "Fax"}],
            "get_windows_drivers": [{"device_name": "NIC"}],
            "get_windows_update_status": {"hotfix_count": 3},
        }[export_name]

    result = dashboard.build_dashboard(fake_invoke)

    assert result["hardware"] == {"logical_cores": 8}
    assert result["metrics"] == {"cpu_percent": 12.5}
    assert result["services"] == [{"name": "Fax"}]
    assert result["drivers"] == [{"device_name": "NIC"}]
    assert result["updates"] == {"hotfix_count": 3}
    assert "checked_at" in result
    assert all(c[0] == "system_information_service" for c in calls)
    assert len(calls) == 5


def test_get_dashboard_route_degrades_when_dependency_unavailable(monkeypatch):
    def raising_invoke(*args, **kwargs):
        raise main.ServiceInvokeError("SERVICE_NOT_FOUND", "boom")

    monkeypatch.setattr(main.sdk.services, "invoke", raising_invoke)
    result = main.get_dashboard()
    assert result["status"] == "unavailable"
    assert "system_information_service" in result["message"]
