---
title: System Information Service — Overview
order: 1
tags: [system, info, cpu, runtime, example]
---

# System Information Service

**Category:** Examples
**Vendor:** TechForge
**Version:** 1.0.0
**Icon:** cpu
**Order:** 10

## Descrição

Módulo de referência do catálogo externo **Tech.Forge.Modules**. Fornece
informações básicas do sistema operacional e do runtime onde o TechForge
está executando (SO, arquitetura, hostname, núcleos de CPU, versão do
Python) — pensado pra outros módulos consumirem via Service Registry, sem
precisar reimplementar essa consulta.

Usa somente a biblioteca padrão do Python (`platform`, `os`, `socket`) —
nenhuma dependência nova.

## Status

Implementação de referência mínima, publicada como exemplo de como
distribuir um módulo pelo catálogo `Tech.Forge.Modules` — não é uma
ferramenta de monitoramento de produção.

## Limitação conhecida

`get_memory_info()` descrito na spec original do exemplo não foi
implementado — obter memória total/disponível de forma confiável e
multiplataforma exigiria uma dependência nova (ex: `psutil`), fora do
escopo deste exemplo mínimo.
