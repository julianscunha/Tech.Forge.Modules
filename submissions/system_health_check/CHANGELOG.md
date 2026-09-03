# Changelog

## [1.1.0] - 2026-09-03

Reconstrução completa do módulo — de uma checagem simples de saúde para
um dashboard com recomendações inteligentes e relatório de antes/depois.

### Adicionado

- `GET /dashboard` — agrega hardware, métricas ao vivo, serviços, drivers e
  status de update num único payload.
- `GET /recommendations` — motor de regras puras (`recommendations.py`,
  sem I/O) sobre o dashboard atual: RAM/CPU/disco alto, serviço opcional
  rodando, Windows Update parado.
- `POST /recommendations/{id}/apply` — aplica uma recomendação acionável
  (hoje só `apply_service_action`) e grava snapshot antes/depois via
  `sdk.database`. Recalcula a condição no momento do apply — nunca confia
  num id de uma listagem antiga.
- `GET /report` — compara a primeira leitura "antes" com a mais recente
  "depois" de todos os snapshots aplicados, com % de melhora por métrica.
- Frontend reconstruído em React/TypeScript (Vite, build próprio, mesmo
  padrão do `lead_tracker`) — três abas (Dashboard/Recomendações/
  Relatório), gauges SVG feitos à mão (sem dependência de gráfico),
  confirmação explícita antes de qualquer apply.

### Limitação conhecida

`apply_service_action` requer TechForge rodando como Administrator para
efetivamente alterar o estado de um serviço Windows — confirmado em
verificação manual contra máquina real. Sem elevação, a API retorna um
erro claro (`502`, mensagem descritiva), sem corromper dado nem travar.

## [1.0.1] - 2026-08-30

Health check simples consumindo `system_information_service` via contrato
público (`sdk.services.invoke`).
