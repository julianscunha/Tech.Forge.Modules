"""windows.py — runner injetado com stdout capturado (fixture), sem depender
de PowerShell real nem do host ser Windows (mirror do isolamento TD-010)."""
import json
from subprocess import CompletedProcess

from _si_loader import load_backend_main

main = load_backend_main()
windows = main.windows


def _fake_runner(stdout_obj):
    def runner(args):
        return CompletedProcess(args, 0, stdout=json.dumps(stdout_obj), stderr="")
    return runner


def _failing_runner(args):
    return CompletedProcess(args, 1, stdout="", stderr="access denied")


def test_list_services_parses_json_array(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    runner = _fake_runner([
        {"Name": "Spooler", "DisplayName": "Print Spooler", "Status": "Running", "StartType": "Automatic"},
        {"Name": "Fax", "DisplayName": "Fax", "Status": "Stopped", "StartType": "Manual"},
    ])
    services = windows.list_services(runner=runner)
    assert len(services) == 2
    assert services[0]["name"] == "Spooler"
    assert services[1]["status"] == "Stopped"


def test_list_services_handles_single_object_result(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    runner = _fake_runner({"Name": "Spooler", "DisplayName": "Print Spooler", "Status": "Running", "StartType": "Automatic"})
    services = windows.list_services(runner=runner)
    assert len(services) == 1


def test_list_services_returns_empty_off_windows():
    assert windows.list_services(runner=_failing_runner) == []


def test_list_drivers_parses_json(monkeypatch):
    # DriverDate vem do CIM como "/Date(ms)/" (JSON.NET), não ISO —
    # 1704067200000 ms = 2024-01-01T00:00:00Z.
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    runner = _fake_runner([
        {"DeviceName": "NIC", "Manufacturer": "Intel", "DriverVersion": "1.2.3", "DriverDate": "/Date(1704067200000)/"},
    ])
    drivers = windows.list_drivers(runner=runner)
    assert drivers == [{
        "device_name": "NIC", "manufacturer": "Intel",
        "driver_version": "1.2.3", "driver_date": "2024-01-01T00:00:00+00:00",
    }]


def test_list_drivers_handles_pre_1970_cim_date(monkeypatch):
    # Achado em dado real: chipset drivers com data placeholder anterior a
    # 1970 — datetime.fromtimestamp() quebra com OSError no Windows para
    # timestamp negativo; a implementação usa aritmética de timedelta.
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    runner = _fake_runner([
        {"DeviceName": "Old Chipset", "Manufacturer": "Intel", "DriverVersion": "1.0", "DriverDate": "/Date(-45964800000)/"},
    ])
    drivers = windows.list_drivers(runner=runner)
    assert drivers[0]["driver_date"] == "1968-07-18T00:00:00+00:00"


def test_list_drivers_passes_through_unparseable_date(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    runner = _fake_runner([
        {"DeviceName": "Weird", "Manufacturer": "?", "DriverVersion": "1.0", "DriverDate": "not-a-date"},
    ])
    drivers = windows.list_drivers(runner=runner)
    assert drivers[0]["driver_date"] == "not-a-date"


def test_update_status_picks_latest_hotfix(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    runner = _fake_runner([
        {"HotFixID": "KB1", "InstalledOn": "2024-01-01"},
        {"HotFixID": "KB2", "InstalledOn": "2024-06-01"},
    ])
    status = windows.update_status(runner=runner)
    assert status == {"last_hotfix_date": "2024-06-01", "hotfix_count": 2}


def test_update_status_no_hotfixes(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    runner = _fake_runner([])
    assert windows.update_status(runner=runner) == {"last_hotfix_date": None, "hotfix_count": 0}


def test_powershell_failure_returns_empty_not_raise(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    assert windows.list_services(runner=_failing_runner) == []
    assert windows.list_drivers(runner=_failing_runner) == []
    assert windows.update_status(runner=_failing_runner) == {"last_hotfix_date": None, "hotfix_count": 0}
