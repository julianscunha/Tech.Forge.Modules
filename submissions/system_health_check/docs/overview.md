# System Health Check

Application Module de referência do catálogo TechForge. Dashboard de
hardware e métricas ao vivo, motor de recomendações de desempenho e
relatório de antes/depois — consumindo o
[System Information Service](../system_information_service/) através do
seu contrato público, nunca importando o código do outro módulo
diretamente (Dependency Governance, Fase 8.1).

## O que ele faz

| Aba | O que mostra |
|---|---|
| Dashboard | CPU/RAM/disco (gauges), inventário de hardware, serviços/drivers/updates do Windows |
| Recomendações | Regras sobre o dashboard atual (RAM/CPU/disco alto, serviço opcional rodando, Windows Update parado) — acionáveis pedem confirmação antes de aplicar |
| Relatório | Compara a primeira leitura "antes" com a mais recente "depois" de todas as recomendações aplicadas — "estava assim, ficou assim, melhorou X%" |

## Recomendações e aplicação

Cada recomendação tem `actionable: true/false`. As acionáveis hoje só
cobrem `apply_service_action` (parar um serviço Windows de uma whitelist
curta de serviços opcionais — Fax, WMPNetworkSvc, MapsBroker,
RemoteRegistry, TabletInputService). Aplicar sempre passa por confirmação
explícita na UI antes da chamada à API — nunca automático.

**Limitação conhecida:** `apply_service_action` requer que o TechForge rode
como Administrator para de fato alterar o estado de um serviço Windows.
Sem elevação, o Windows nega a operação e a API retorna um erro claro —
nenhum dado é corrompido, nenhum estado fica inconsistente.

## Dependência

Declarada no `manifest.yaml` (Dependency Governance, Fase 8.1):

```yaml
dependencies:
  - target:
      type: module
      id: system_information_service
    version_range: ">=1.0.0,<2.0.0"
    required: true
```

Sem o System Information Service instalado (ou desativado), os endpoints
retornam `{status: "unavailable", message: ...}` em vez de quebrar.

## API

```
GET  /api/v1/modules/system_health_check/dashboard
GET  /api/v1/modules/system_health_check/recommendations
POST /api/v1/modules/system_health_check/recommendations/{id}/apply
GET  /api/v1/modules/system_health_check/report
```

`/report` lê snapshots gravados por `/apply` via `sdk.database` (SQLite
isolado do módulo) — sem nenhum `apply` bem-sucedido, retorna
`{status: "no_data"}`.
