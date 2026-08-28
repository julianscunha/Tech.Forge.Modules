# Como contribuir com um módulo

## Passo a passo (do zero até a PR aberta)

Abrir uma PR direto pelo site do GitHub sem antes ter uma branch com
mudanças dá o erro *"Choose different branches or forks..."* — o GitHub
não tem o que comparar. O fluxo local resolve isso:

```bash
# 1. Clone os dois repositórios lado a lado (só precisa fazer uma vez)
git clone https://github.com/julianscunha/Tech.Forge.Modules.git
git clone https://github.com/julianscunha/Tech.Forge.git

cd Tech.Forge.Modules

# 2. Crie uma branch nova a partir da main atualizada
git checkout main
git pull
git checkout -b add-meu-modulo

# 3. Crie a pasta do seu módulo (veja a estrutura mínima logo abaixo)
mkdir -p modules/meu_modulo/backend modules/meu_modulo/frontend
mkdir -p modules/meu_modulo/docs/examples
# ... crie manifest.yaml, backend/main.py, frontend/index.tsx,
#     docs/overview.md, docs/examples/basic.md (veja o checklist abaixo)

# 4. Valide localmente ANTES de commitar (evita ida e volta no CI)
pip install -e ../Tech.Forge/cli
techforge validate-module modules/meu_modulo/

# 5. Commit e push da branch (não da main)
git add modules/meu_modulo
git commit -m "feat: adiciona modulo meu_modulo"
git push -u origin add-meu-modulo

# 6. Abra a PR — o git já devolve um link pronto depois do push, ou:
gh pr create --title "feat: adiciona modulo meu_modulo" --body "O que o modulo faz."
```

Sem o `gh` CLI, é só ir em
[github.com/julianscunha/Tech.Forge.Modules](https://github.com/julianscunha/Tech.Forge.Modules) —
depois do `git push`, o GitHub costuma mostrar um banner amarelo
*"add-meu-modulo had recent pushes"* com um botão **"Compare & pull
request"** já pronto.

## Validação automática

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
