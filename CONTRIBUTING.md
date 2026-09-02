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

# 3. Crie a pasta do seu módulo em submissions/ (veja a estrutura mínima
#    logo abaixo) — NÃO em modules/, que é gerenciada só pela automação
mkdir -p submissions/meu_modulo/backend submissions/meu_modulo/frontend
mkdir -p submissions/meu_modulo/docs/examples
# ... crie manifest.yaml, backend/main.py, frontend/index.js,
#     docs/overview.md, docs/examples/basic.md (veja o checklist abaixo)

# 4. Valide localmente ANTES de commitar (evita ida e volta no CI)
pip install -e ../Tech.Forge/cli
techforge validate-module submissions/meu_modulo/

# 5. Commit e push da branch (não da main)
git add submissions/meu_modulo
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

## Por que `submissions/` e não `modules/`?

`submissions/<id>/` é onde você trabalha — transitório, existe só entre a
PR e o merge. `modules/<id>/` é onde a automação guarda o resultado final
(`.mod` + `index.json`) depois do merge, permanente, com uma pasta por
módulo acumulando **toda versão já publicada**. Os dois ficam separados de
propósito: se fossem a mesma pasta, um contribuidor que decidisse "recriar
a pasta do zero" localmente antes de editar poderia, sem saber, apagar no
PR os `.mod` de produção que já estavam lá. `submissions/` nunca tem nada
de produção — só o que está em trânsito nesta PR.

**Você nunca precisa tocar em `modules/` nem gerar um `.mod` manualmente.**
Isso é 100% automático (ver "Depois de mesclada" abaixo).

## Validação automática

Toda pull request que adiciona ou altera algo em `submissions/**` é
validada **automaticamente** pelo GitHub Actions
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
techforge validate-module submissions/<seu-modulo>/
```

O relatório mostra cada checagem individualmente — estrutura do
manifesto, arquivos obrigatórios, contrato público (se for um Service
Module), documentação mínima (Documentation First Principle).
**Avisos** (⚠) não bloqueiam a PR; **erros** (✗) bloqueiam.

## Checklist mínimo de um módulo novo

```text
submissions/<id-do-modulo>/
├── manifest.yaml              # id, name, version, category, vendor,
│                               # author, description, entry_backend,
│                               # entry_frontend, icon, order
├── backend/main.py             # exporta `router` (FastAPI) e `module`
│                               # (instância de ModuleContract)
├── frontend/index.js           # ESM compilado (não .tsx cru — o Core só
│                               # serve .js/.mjs); default export com
│                               # render(container: HTMLElement)
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
- O nome da pasta em `submissions/` deve ser o mesmo `id` (é o mesmo nome
  que a automação usa pra criar `modules/<id>/`, o endereço permanente e
  estável do módulo no catálogo).

## Depois de mesclada: da sua PR até o módulo virar `.mod` no catálogo

Sua PR só tem a pasta-fonte solta em `submissions/<id>/` (`manifest.yaml` +
`backend/` + `frontend/` + `docs/`) — você nunca precisa gerar um `.mod`
nem tocar em `index.json` manualmente. Todo o resto acontece sozinho, em
duas etapas:

```
1. Você abre a PR com submissions/<id>/         (pasta-fonte, transitória)
        │
        ▼
2. validate-modules.yml roda (checagem "validate", obrigatória p/ merge)
        │  usa o mesmo `techforge validate-module` que o Core aplica
        │  na instalação — falha aqui bloqueia o merge
        ▼
3. Você (ou o dono do repo) aprova e mergeia sua PR em main
        │
        ▼
4. update-modules-readme.yml dispara (push em main tocando submissions/**)
        │  - roda `techforge catalog build-index submissions --output modules`
        │    → gera modules/<id>/<id>-<versão>.mod + modules/index.json
        │    (toda versão já publicada de um módulo fica empilhada na
        │    mesma pasta, pra sempre — index.json aponta só pra atual)
        │  - regenera README.md a partir do modules/index.json atualizado
        │  - remove submissions/<id>/ (já empacotada, pode sumir com
        │    segurança — é isolada de modules/, nunca tem .mod de produção)
        ▼
5. Essa job abre uma 2ª PR automática com o resultado (README + .mod +
   index.json), espera o check "validate" dessa PR passar (main é
   protegida, ninguém — nem o bot — dá push direto), e mergeia sozinha
        │
        ▼
6. main agora tem modules/index.json (na raiz de modules/) +
   modules/<id>/<id>-<versão>.mod — nenhuma pasta de submissions/ solta
   mais. O Marketplace do TechForge lê os dois via
   raw.githubusercontent.com/julianscunha/Tech.Forge.Modules/main/modules,
   com 1 único fetch de index.json pra descobrir o catálogo inteiro.
```

**Atualizando um módulo já publicado:** reenvie a pasta-fonte completa
(com a `version` nova no `manifest.yaml`) em `submissions/<id>/`, numa PR
nova — o merge empacota a nova versão em `modules/<id>/<id>-<versão-nova>.mod`
**ao lado** da(s) versão(ões) anterior(es) (nada é substituído ou perdido) e
`index.json` passa a apontar só pra versão mais recente.

Workflows envolvidos:
[`validate-modules.yml`](.github/workflows/validate-modules.yml) (passo 2) e
[`update-modules-readme.yml`](.github/workflows/update-modules-readme.yml)
(passos 4–5).

## Código de conduta e segurança

Este projeto segue o [Código de Conduta](CODE_OF_CONDUCT.md). Encontrou
uma vulnerabilidade em um módulo publicado (não um bug comum)? Veja
[`SECURITY.md`](SECURITY.md) em vez de abrir uma issue pública.
