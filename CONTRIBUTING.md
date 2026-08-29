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

## Depois de mesclada: da sua PR até o módulo virar `.mod` no catálogo

Sua PR só tem a pasta-fonte solta (`manifest.yaml` + `backend/` +
`frontend/` + `docs/`) — você nunca precisa gerar um `.mod` nem tocar em
`index.json` manualmente. Todo o resto acontece sozinho, em duas etapas:

```
1. Você abre a PR com modules/<id>/           (pasta-fonte solta)
        │
        ▼
2. validate-modules.yml roda (checagem "validate", obrigatória p/ merge)
        │  usa o mesmo `techforge validate-module` que o Core aplica
        │  na instalação — falha aqui bloqueia o merge
        ▼
3. Você (ou o dono do repo) aprova e mergeia sua PR em main
        │
        ▼
4. update-modules-readme.yml dispara (push em main tocando modules/**)
        │  - regenera README.md com a lista de módulos
        │  - roda `techforge catalog build-index modules --output modules`
        │    → gera <id>-<version>.mod + .mod.sha256 + modules/index.json
        │  - remove a pasta-fonte modules/<id>/ já empacotada
        ▼
5. Essa job abre uma 2ª PR automática com o resultado (README + .mod +
   index.json), espera o check "validate" dessa PR passar (main é
   protegida, ninguém — nem o bot — dá push direto), e mergeia sozinha
        │
        ▼
6. main agora tem modules/index.json + modules/<id>-<version>.mod —
   nenhuma pasta-fonte solta mais. O Marketplace do TechForge lê os dois
   via raw.githubusercontent.com/julianscunha/Tech.Forge.Modules/main/modules,
   com 1 único fetch de index.json pra descobrir o catálogo inteiro.
```

**Por que a pasta-fonte some depois de empacotada:** manter a pasta-fonte
*e* o `.mod` pra sempre não escala — com centenas/milhares de módulos,
`main` acumularia os dois formatos indefinidamente, e clonar o repo (ou o
Marketplace listar `modules/` via API) ficaria cada vez mais pesado sem
necessidade, já que só o `.mod` importa pra instalação. Pra **atualizar**
um módulo já publicado, reenvie a pasta-fonte completa numa PR nova — o
merge reempacota (nova versão) e poda de novo, do mesmo jeito.

Workflows envolvidos:
[`validate-modules.yml`](.github/workflows/validate-modules.yml) (passo 2) e
[`update-modules-readme.yml`](.github/workflows/update-modules-readme.yml)
(passos 4–5).
