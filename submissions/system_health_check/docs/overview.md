# System Health Check

Application Module de referência do catálogo TechForge. Executa uma
verificação simples de saúde do sistema onde o TechForge está rodando,
consumindo o [System Information Service](../system_information_service/)
através do seu contrato público — nunca importando o código do outro
módulo diretamente.

## O que ele verifica

Ao clicar em **Run Health Check**, o módulo chama três exports do System
Information Service (`get_system_info`, `get_cpu_info`, `get_runtime_info`)
e aplica regras simples sobre os dados retornados:

| Checagem | Regra |
|---|---|
| System | sistema operacional detectado |
| CPU | pelo menos 1 núcleo lógico disponível |
| Runtime | versão do Python detectada |
| Service | a chamada ao serviço respondeu com sucesso |

Não tenta virar um monitor corporativo — só o suficiente para provar que
uma dependência real entre módulos funciona de ponta a ponta.

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

Sem o System Information Service instalado (ou desativado), o
`Run Health Check` retorna uma mensagem clara pedindo a instalação da
dependência, em vez de quebrar.

## API

```
GET /api/v1/modules/system_health_check/health
```

Retorna `{status, checks[], message, checked_at}` — `status` é
`"healthy"`, `"degraded"` (alguma checagem falhou) ou `"unavailable"`
(dependência ausente/indisponível).
