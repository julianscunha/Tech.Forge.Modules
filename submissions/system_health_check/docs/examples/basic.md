# Exemplo básico

Com o System Information Service instalado e ativo, abra o módulo
**System Health Check** dentro do TechForge e clique em
**Run Health Check**.

## Chamando a API diretamente

```bash
curl http://127.0.0.1:8000/api/v1/modules/system_health_check/health
```

Resposta esperada:

```json
{
  "status": "healthy",
  "checks": [
    {"name": "system", "ok": true, "message": "Windows detected"},
    {"name": "cpu", "ok": true, "message": "8 logical core(s) available"},
    {"name": "runtime", "ok": true, "message": "Python 3.11.9 (CPython)"},
    {"name": "service", "ok": true, "message": "system_information_service responded"}
  ],
  "message": null,
  "checked_at": "2026-08-30T22:10:00.123456+00:00"
}
```

## Sem a dependência instalada

```json
{
  "status": "unavailable",
  "checks": [],
  "message": "system_information_service is required. Install the dependency to run the check.",
  "checked_at": "2026-08-30T22:10:00.123456+00:00"
}
```
