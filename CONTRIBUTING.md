# Como contribuir com um módulo

Toda pull request que adiciona ou altera algo em `modules/**` é validada
**automaticamente** pelo GitHub Actions
([`validate-modules.yml`](.github/workflows/validate-modules.yml)) usando
o **mesmo validador oficial** do TechForge (`techforge validate-module`)
— não é uma verificação inventada só pra este repositório, é a regra real
que o Core aplica quando você tenta instalar um módulo.

Se a validação falhar, a PR fica bloqueada até corrigir. Isso existe pra
pegar erro **antes** do módulo chegar em quem for instalá-lo, não depois.

## Antes de abrir a PR — valide localmente

Você não precisa esperar o CI rodar pra descobrir se o módulo está
válido. Com o [TechForge](https://github.com/julianscunha/Tech.Forge)
clonado ao lado deste repositório:

```bash
pip install -e ../Tech.Forge/cli
techforge validate-module modules/<seu-modulo>/
```

O relatório mostra cada checagem individualmente — estrutura do
manifesto, arquivos obrigatórios, contrato público (se for um Service
Module), documentação mínima (Documentation First Principle).
**Avisos** (⚠) não bloqueiam a PR; **erros** (✗) bloqueiam.

## Checklist mínimo de um módulo novo

```text
modules/<id-do-modulo>/
├── manifest.yaml              # id, name, version, category, vendor,
│                               # author, description, entry_backend,
│                               # entry_frontend, icon, order
├── backend/main.py             # exporta `router` (FastAPI) e `module`
│                               # (instância de ModuleContract)
├── frontend/index.tsx          # exporta `moduleConfig` + componente default
└── docs/
    ├── overview.md              # obrigatório — o que o módulo faz
    └── examples/
        └── basic.md              # obrigatório — pelo menos um exemplo
```

Se o módulo for `module_type: service` (fornece uma capability pra
outros módulos, sem UI obrigatória), também é obrigatório:

```text
docs/contracts/api.yaml         # contrato público — todo export com
│                                # name, description, parameters
│                                # tipados, returns, examples
docs/examples/advanced.md
docs/examples/integration.md
```

## `id` do módulo

- `snake_case`, minúsculo, começando com letra (ex: `system_information_service`).
- O `id` no `manifest.yaml` deve ser único no catálogo — dois módulos
  com o mesmo `id` quebram a instalação.
- O nome da pasta em `modules/` deve ser o mesmo `id` (mantém o endereço
  do módulo previsível e estável).

## Depois de mesclada

Assim que sua PR for mesclada em `main`, outro workflow
([`update-modules-readme.yml`](.github/workflows/update-modules-readme.yml))
atualiza automaticamente a lista de módulos no [README](README.md) — não
precisa editar o README manualmente.
