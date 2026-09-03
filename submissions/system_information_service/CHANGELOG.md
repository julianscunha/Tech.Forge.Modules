# Changelog

## [1.1.0] - 2026-09-03

### Adicionado

- `get_hardware_info` / `get_live_metrics` — inventário e uso de CPU/RAM/
  disco, cross-platform via `psutil`.
- `get_windows_services` / `get_windows_drivers` / `get_windows_update_status`
  — leituras Windows-específicas via PowerShell (`ConvertTo-Json`), lista/
  valores vazios fora do Windows.
- `apply_service_action` — para/inicia um serviço Windows de uma whitelist
  curta de serviços opcionais, retorna o start-type anterior pra permitir
  revert. Único export mutável do módulo.

### Corrigido

- `Get-Service`/`Get-HotFix` no PowerShell serializam `Status`/`StartType`/
  `InstalledOn` como enum/`DateTime` (int/objeto), não string — sem cast
  explícito (`.ToString()`) no comando, todo consumidor recebia dado não
  comparável. Só apareceu em verificação manual contra dado real; os testes
  sintéticos (fixtures com string já pronta) não pegavam.

## [1.0.0] - 2026-08-30

Primeira release — `get_system_info`, `get_cpu_info`, `get_runtime_info`.
