"""get_hardware_info() / get_live_metrics() — dado real, sem mock (psutil é
cross-platform, roda igual em qualquer SO que executa o teste)."""
import asyncio

from _si_loader import load_backend_main

main = load_backend_main()


def test_hardware_info_reports_real_cpu_and_ram():
    info = asyncio.run(main.module.get_hardware_info())
    assert info["logical_cores"] >= 1
    assert info["ram_total_bytes"] > 0
    assert isinstance(info["disks"], list)
    assert info["disks"], "expected at least one disk partition on the test host"


def test_live_metrics_returns_fresh_sample_each_call():
    first = asyncio.run(main.module.get_live_metrics())
    second = asyncio.run(main.module.get_live_metrics())
    assert 0.0 <= first["cpu_percent"] <= 100.0
    assert 0.0 <= second["ram_percent"] <= 100.0
    assert isinstance(first["disks"], list) and first["disks"]
