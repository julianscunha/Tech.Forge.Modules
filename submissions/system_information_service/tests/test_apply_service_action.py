"""apply_service_action — whitelist, captura de start-type anterior (revert),
runner injetado (sem tocar serviço real neste teste)."""
from subprocess import CompletedProcess

import pytest
from _si_loader import load_backend_main

main = load_backend_main()
windows = main.windows


def _ok(stdout=""):
    def runner(args):
        return CompletedProcess(args, 0, stdout=stdout, stderr="")
    return runner


def test_rejects_service_outside_whitelist(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    with pytest.raises(windows.ServiceActionError, match="whitelist"):
        windows.apply_service_action("Spooler", "stop", runner=_ok())


def test_rejects_unknown_action(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    with pytest.raises(windows.ServiceActionError, match="unknown action"):
        windows.apply_service_action("Fax", "restart", runner=_ok())


def test_stop_returns_previous_start_type(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    calls = []

    def runner(args):
        calls.append(args)
        command = args[-1]
        if command.startswith("Get-Service"):
            return CompletedProcess(args, 0, stdout='{"StartType":"Automatic"}', stderr="")
        return CompletedProcess(args, 0, stdout="", stderr="")

    result = windows.apply_service_action("Fax", "stop", runner=runner)
    assert result == {"name": "Fax", "action": "stop", "previous_start_type": "Automatic"}
    assert "Stop-Service" in calls[-1][-1]
    assert "-Force" in calls[-1][-1]


def test_start_action_does_not_use_force(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)
    calls = []

    def runner(args):
        calls.append(args)
        command = args[-1]
        if command.startswith("Get-Service"):
            return CompletedProcess(args, 0, stdout='{"StartType":"Manual"}', stderr="")
        return CompletedProcess(args, 0, stdout="", stderr="")

    windows.apply_service_action("Fax", "start", runner=runner)
    assert "Start-Service" in calls[-1][-1]
    assert "-Force" not in calls[-1][-1]


def test_powershell_failure_raises(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: True)

    def runner(args):
        command = args[-1]
        if command.startswith("Get-Service"):
            return CompletedProcess(args, 0, stdout='{"StartType":"Automatic"}', stderr="")
        return CompletedProcess(args, 1, stdout="", stderr="access denied")

    with pytest.raises(windows.ServiceActionError, match="access denied"):
        windows.apply_service_action("Fax", "stop", runner=runner)


def test_rejects_off_windows(monkeypatch):
    monkeypatch.setattr(windows, "is_windows", lambda: False)
    with pytest.raises(windows.ServiceActionError, match="Windows"):
        windows.apply_service_action("Fax", "stop", runner=_ok())
