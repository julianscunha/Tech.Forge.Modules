# System Information Service

Módulo funcional para o [TechForge](https://github.com/julianscunha/Tech.Forge).
Fornece informações reais do sistema operacional, hardware, métricas ao
vivo e (no Windows) serviços/drivers/atualizações do runtime onde o
TechForge está executando.

- **Categoria:** System
- **Tipo:** Service Module (sem UI obrigatória)
- **Dependências externas:** `psutil` (hardware/métricas, cross-platform); leituras Windows-específicas usam PowerShell via subprocess
- **Documentação completa:** [`docs/overview.md`](docs/overview.md)
- **Contrato público:** [`docs/contracts/api.yaml`](docs/contracts/api.yaml)

Veja o [README do catálogo](../../README.md) pra entender como este
módulo se encaixa no TechForge.
