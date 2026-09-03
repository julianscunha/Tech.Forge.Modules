<div align="center">

<img src="docs/assets/banner.svg" alt="TechForge Modules — catálogo de módulos" width="100%" />

**Catálogo de módulos para a plataforma [TechForge](https://github.com/julianscunha/Tech.Forge).**

[![TechForge Core](https://img.shields.io/badge/TechForge-Core-f97316?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMiAyTDIgN2wxMCA1IDEwLTV6TTIgMTdsMTAgNSAxMC01TTIgMTJsMTAgNSAxMC01Ii8+PC9zdmc+&logoColor=white)](https://github.com/julianscunha/Tech.Forge)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ff69b4)](CONTRIBUTING.md)
[![Format](https://img.shields.io/badge/format-.mod%20package-009688)](https://github.com/julianscunha/Tech.Forge/blob/main/docs/developer-center/core/module-catalog.md)

</div>

---

## O que é este repositório?

O **TechForge** é uma plataforma que funciona como uma "base" onde você
instala **módulos** — pequenos programas independentes que adicionam uma
funcionalidade específica (ex: calcular o dimensionamento de um backup,
consultar informações do sistema, etc).

Este repositório (`Tech.Forge.Modules`) é o **catálogo desses módulos** —
o lugar onde eles são criados, organizados e disponibilizados. Ele **não
é a plataforma em si**: pra rodar o TechForge, você precisa do repositório
principal, [`Tech.Forge`](https://github.com/julianscunha/Tech.Forge).

```text
┌─────────────────────┐         instala módulos de         ┌──────────────────────┐
│   Tech.Forge         │ ───────────────────────────────▶ │  Tech.Forge.Modules   │
│   (a plataforma)     │                                   │  (o catálogo)         │
│   você roda isso     │ ◀─────────────────────────────── │  você não roda isso   │
└─────────────────────┘         módulos vêm daqui           └──────────────────────┘
```

Em resumo:
- **Quer usar o TechForge?** Vá pro repositório
  [`Tech.Forge`](https://github.com/julianscunha/Tech.Forge) e siga as
  instruções de instalação lá.
- **Quer ver quais módulos existem, ou criar um novo?** Você está no
  lugar certo.

## Estrutura deste repositório

```text
Tech.Forge.Modules/
├── submissions/              # transitório — onde você contribui (ver CONTRIBUTING.md)
│   └── <id-do-modulo>/
│       ├── manifest.yaml
│       ├── backend/main.py
│       ├── frontend/index.js   # ESM compilado — o Core só serve .js/.mjs
│       └── docs/
└── modules/                  # permanente — só a automação escreve aqui
    ├── index.json             # catálogo: 1 entrada por módulo, sempre a versão atual
    └── <id-do-modulo>/
        ├── <id>-1.0.0.mod     # toda versão já publicada fica aqui, empilhada
        └── <id>-1.0.1.mod
```

Você contribui em `submissions/<id>/` — a automação lê dali, empacota em
`.mod` e guarda o resultado em `modules/<id>/`, pra sempre (ver
[CONTRIBUTING.md](CONTRIBUTING.md) pro fluxo completo). As duas pastas são
separadas de propósito: assim, editar sua contribuição nunca arrisca
apagar sem querer um `.mod` de produção que já estava publicado.

O endereço de um módulo (`modules/<id>/`) é estável pra sempre — a
categoria (que vive dentro do `manifest.yaml` e pode mudar) nunca faz
parte do caminho da pasta, exatamente pra isso.

## Módulos disponíveis

Agrupados por categoria (a mesma que aparece na navegação do TechForge)
e sempre **retraídos** — clique numa categoria pra expandir. Isso é
proposital: com centenas ou milhares de módulos, uma tabela única
tornaria este README impossível de navegar.

Esta seção é **gerada automaticamente** por
[`scripts/generate_modules_readme.py`](scripts/generate_modules_readme.py)
a partir de `modules/index.json`, rodado pelo GitHub Actions
([`.github/workflows/update-modules-readme.yml`](.github/workflows/update-modules-readme.yml))
toda vez que uma submissão é mesclada em `main`. **Não edite manualmente
entre os marcadores abaixo** — a próxima execução do workflow sobrescreve.

<!-- MODULES:START -->

**3 módulo(s)** em **2 categoria(s)**. Clique numa categoria pra ver os módulos dentro dela.

<details>
<summary><strong>Sales</strong> — 1 módulo(s)</summary>

| Módulo | O que faz |
|---|---|
| [`lead_tracker`](modules/lead_tracker) | Módulo de Opportunity Intelligence: transforma dados de clientes, prospects, portfólio tecnológico, produtos e serviços em oportunidades comerciais priorizadas (cross-sell, up-sell, modernização, otimização de custos). |

</details>

<details>
<summary><strong>System</strong> — 2 módulo(s)</summary>

| Módulo | O que faz |
|---|---|
| [`system_health_check`](modules/system_health_check) | Dashboard de hardware e métricas, recomendações inteligentes de desempenho (com aplicação segura e reversível) e relatório de antes/depois, consumindo o System Information Service. |
| [`system_information_service`](modules/system_information_service) | Fornece informações de sistema operacional, hardware, métricas ao vivo e (no Windows) serviços/drivers/atualizações do runtime onde o TechForge está rodando. |

</details>

<!-- MODULES:END -->

## Como um módulo daqui chega até o TechForge?

O Core lê este repositório automaticamente como catálogo oficial — na aba
**Catálogo** do Marketplace, todo módulo publicado aqui aparece pronto pra
instalar com um clique (`.mod` baixado e instalado direto de
`modules/<id>/`, sem precisar baixar nada manualmente). Detalhes técnicos
em [`Tech.Forge` → Developer Center → Module Catalog](https://github.com/julianscunha/Tech.Forge/blob/main/docs/developer-center/core/module-catalog.md).

## Quero criar um módulo novo

Consulte o guia de desenvolvimento de módulos no repositório principal:
[`Tech.Forge` → Developer Center → Guia de Desenvolvimento](https://github.com/julianscunha/Tech.Forge/blob/main/docs/developer-center/guides/development-guide.md).
Depois de pronto, envie seu módulo como uma pasta nova em `submissions/`
— veja o passo a passo completo em [CONTRIBUTING.md](CONTRIBUTING.md).

## Segurança e conduta

Encontrou uma vulnerabilidade em um módulo publicado? Veja
[`SECURITY.md`](SECURITY.md) em vez de abrir uma issue pública. Este
projeto segue o [Código de Conduta](CODE_OF_CONDUCT.md).

## Licença

MIT — mesma licença do repositório principal `Tech.Forge`.
