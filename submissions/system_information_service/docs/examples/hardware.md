---
title: System Information Service — Hardware e Métricas
order: 3
tags: [system, hardware, metrics, windows, example]
---

## Objetivo

Ler inventário de hardware e uma amostra de uso ao vivo — base do
[dashboard do System Health Check](../../system_health_check/docs/overview.md).

## Chamada

```python
hardware = await get_hardware_info()
metrics = await get_live_metrics()
services = await get_windows_services()  # [] fora do Windows
```

## Saída

```json
{
  "hardware": {
    "cpu_model": "Intel64 Family 6 Model 158 Stepping 9, GenuineIntel",
    "physical_cores": 4,
    "logical_cores": 4,
    "ram_total_bytes": 8467652608,
    "disks": [{"mountpoint": "C:\\", "filesystem": "NTFS", "total_bytes": 499400589312}]
  },
  "metrics": {
    "cpu_percent": 24.0,
    "ram_percent": 91.0,
    "disks": [{"mountpoint": "C:\\", "used_percent": 14.0}]
  }
}
```

`get_live_metrics()` nunca é cacheado — cada chamada é uma amostra nova.
`get_windows_services()`/`get_windows_drivers()`/`get_windows_update_status()`
retornam lista/valores vazios fora do Windows, nunca lançam erro.
