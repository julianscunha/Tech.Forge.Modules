<div align="center">

# 📦 Tech.Forge.Modules

**Catálogo de módulos para a plataforma [TechForge](https://github.com/julianscunha/Tech.Forge).**

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
│       ├── frontend/index.tsx
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

**1 módulo(s)** em **1 categoria(s)**. Clique numa categoria pra ver os módulos dentro dela.

<details>
<summary><strong>System</strong> — 1 módulo(s)</summary>

| Módulo | O que faz |
|---|---|
| [`system_information_service`](modules/system_information_service) | Fornece informações do sistema operacional e do runtime onde o TechForge está rodando. |

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

## Licença

MIT — mesma licença do repositório principal `Tech.Forge`.
