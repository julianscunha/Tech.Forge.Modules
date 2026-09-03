---
title: System Information Service — Exemplo Avançado
order: 2
tags: [system, advanced, example]
---

## Objetivo

Combinar CPU e runtime numa única consulta de diagnóstico.

## Chamada

```python
cpu = await get_cpu_info()
runtime = await get_runtime_info()
```

## Saída

```json
{
  "cpu": {"logical_cores": 8},
  "runtime": {"python_version": "3.11.9", "python_implementation": "CPython"}
}
```
