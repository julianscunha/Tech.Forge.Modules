---
title: System Information Service — Overview
order: 1
tags: [system, info, cpu, hardware, metrics, windows, example]
---

# System Information Service

**Category:** System
**Vendor:** TechForge
**Version:** 1.1.0
**Icon:** cpu
**Order:** 10

## Descrição

Módulo de referência do catálogo externo **Tech.Forge.Modules**. Fornece
informações do sistema operacional, hardware, métricas de uso ao vivo e —
no Windows — serviços, drivers e status de atualização, pensado pra outros
módulos consumirem via Service Registry sem reimplementar essas consultas.
Consumido pelo [System Health Check](../system_health_check/) como
dependência declarada (Fase 8.1).

Depende de `psutil` (cross-platform, já presente no ambiente do Core) para
hardware/métricas; leituras Windows-específicas (`get_windows_*`) usam
PowerShell via subprocess e retornam lista vazia fora do Windows.

## Exports

| Export | Descrição |
|---|---|
| `get_system_info` | SO, versão, arquitetura, hostname |
| `get_cpu_info` | Contagem de núcleos lógicos |
| `get_runtime_info` | Versão/implementação do Python |
| `get_hardware_info` | CPU, RAM total, discos (cross-platform, psutil) |
| `get_live_metrics` | Amostra pontual de uso — CPU%, RAM%, disco% (nunca cacheada) |
| `get_windows_services` | Lista de serviços Windows (nome, status, tipo de início) |
| `get_windows_drivers` | Drivers assinados instalados |
| `get_windows_update_status` | Data do último hotfix e contagem total |
| `apply_service_action` | Para/inicia um serviço Windows whitelisted — único export mutável |

## Limitação conhecida

`apply_service_action` requer que o processo do TechForge rode elevado
(Administrator) para efetivamente parar/iniciar um serviço — sem elevação,
o Windows nega a operação e o export retorna um erro claro (não trava, não
falha silenciosamente). `techforge dev`/`start` não rodam elevados por
padrão hoje.
