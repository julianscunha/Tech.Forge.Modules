---
title: System Information Service — Exemplo de Integração
order: 3
tags: [system, integration, example]
---

## Objetivo

Demonstrar como outro módulo consome esta capability via Service Registry,
sem conhecer a implementação interna do `system_information_service`.

## Chamada (de dentro de outro módulo)

```python
from techforge_sdk import create_sdk

sdk = create_sdk("meu_modulo")

providers = sdk.services.find_capability("system.info.read")
# providers[0]["module_id"] == "system_information_service"
```

A invocação real acontece pelo mecanismo interno do Service Registry do
Core (mesmo processo Python) — o módulo consumidor nunca precisa importar
`system_information_service` diretamente.
