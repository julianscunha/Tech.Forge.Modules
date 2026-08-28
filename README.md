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
└── modules/
    └── <id-do-modulo>/
        ├── manifest.yaml          # identidade e metadados do módulo
        ├── backend/main.py        # lógica do módulo (Python)
        ├── frontend/index.tsx     # interface do módulo (se houver)
        └── docs/                  # documentação obrigatória do módulo
```

Cada pasta dentro de `modules/` é um módulo completo e independente —
pode ser instalado no TechForge sem afetar nenhum outro.

A pasta **não** é organizada por categoria (`modules/<categoria>/<id>/`)
de propósito: a categoria de um módulo já vive dentro do seu
`manifest.yaml` e pode mudar ao longo do tempo — se ela também definisse
o caminho da pasta, qualquer link de importação já distribuído quebraria
quando isso acontecesse. O endereço de um módulo (`modules/<id>/`) é
estável pra sempre; a categoria é só um metadado de exibição.

## Módulos disponíveis

Agrupados por categoria (a mesma que aparece na navegação do TechForge)
— isso é só organização deste README, não da estrutura de pastas.

### System

| Módulo | O que faz |
|---|---|
| [`system_information_service`](modules/system_information_service) | Fornece informações do sistema operacional e do runtime (SO, CPU, versão do Python) |

## Como um módulo daqui chega até o TechForge?

Hoje, a forma de usar um módulo daqui é baixar a pasta correspondente e
instalá-la manualmente (`techforge modules` / interface do Marketplace no
Core). **Uma forma de importar um módulo diretamente por um link** (sem
precisar baixar manualmente) está planejada — quando estiver pronta, será
documentada aqui e no repositório principal.

## Quero criar um módulo novo

Consulte o guia de desenvolvimento de módulos no repositório principal:
[`Tech.Forge` → Developer Center → Guia de Desenvolvimento](https://github.com/julianscunha/Tech.Forge/blob/main/docs/developer-center/guides/development-guide.md).
Depois de pronto, seu módulo pode ser adicionado aqui como uma pasta nova
dentro de `modules/`.

## Licença

MIT — mesma licença do repositório principal `Tech.Forge`.
