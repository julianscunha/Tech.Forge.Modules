---
title: System Information Service — Exemplo Básico
order: 1
tags: [system, basic, example]
---

## Objetivo

Consultar informações básicas do sistema operacional.

## Chamada

```python
result = await get_system_info()
```

## Saída

```json
{
  "operating_system": "Windows",
  "os_version": "10.0.19045",
  "os_release": "10",
  "hostname": "MEU-PC",
  "architecture": "AMD64"
}
```
