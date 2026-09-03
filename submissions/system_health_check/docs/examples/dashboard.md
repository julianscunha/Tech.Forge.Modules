# Exemplo — dashboard, recomendações e relatório

## Dashboard

```bash
curl http://127.0.0.1:8000/api/v1/modules/system_health_check/dashboard
```

```json
{
  "hardware": {"cpu_model": "...", "physical_cores": 4, "logical_cores": 4, "ram_total_bytes": 8467652608, "disks": [...]},
  "metrics": {"cpu_percent": 24.0, "ram_percent": 91.0, "disks": [...]},
  "services": [...],
  "drivers": [...],
  "updates": {"last_hotfix_date": "2025-11-18T00:00:00.0000000", "hotfix_count": 13},
  "checked_at": "2026-09-03T00:15:24.000000+00:00"
}
```

## Recomendações e aplicação

```bash
curl http://127.0.0.1:8000/api/v1/modules/system_health_check/recommendations
```

```json
{
  "recommendations": [
    {
      "id": "stop-service-TabletInputService",
      "category": "service",
      "severity": "info",
      "title": "Serviço opcional em execução: ...",
      "description": "'TabletInputService' está rodando e normalmente não é necessário.",
      "actionable": true,
      "action": {"type": "apply_service_action", "params": {"name": "TabletInputService", "action": "stop"}}
    }
  ]
}
```

Aplicar (requer TechForge elevado — ver limitação conhecida no overview):

```bash
curl -X POST http://127.0.0.1:8000/api/v1/modules/system_health_check/recommendations/stop-service-TabletInputService/apply
```

## Relatório

```bash
curl http://127.0.0.1:8000/api/v1/modules/system_health_check/report
```

Sem nenhum `apply` bem-sucedido:

```json
{"status": "no_data", "applied_count": 0, "message": "Nenhuma recomendação foi aplicada ainda."}
```

Depois de aplicar pelo menos uma:

```json
{
  "status": "ok",
  "applied_count": 1,
  "ram_percent_before": 90.0,
  "ram_percent_after": 65.0,
  "ram_percent_improvement": 25.0,
  "services_stopped": ["stop-service-Fax"]
}
```
