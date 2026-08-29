<!--
Preencha isto antes de pedir revisão. A validação automática (CI) vai
rodar de qualquer forma, mas isso aqui é pra quem revisar humanamente
entender o módulo rápido — não substitui nada, complementa.
-->

## O que este módulo faz?

<!-- Descreva em 1-3 frases. Isso NÃO substitui o campo `description`
     do manifest.yaml (esse é o que efetivamente aparece no README
     gerado) — mas ajuda quem revisar a entender o contexto. -->

## Checklist

- [ ] Rodei `techforge validate-module submissions/<meu-modulo>/` localmente e não há erros (avisos tudo bem)
- [ ] O `id` no `manifest.yaml` é `snake_case` e é único no catálogo (não existe outra pasta com o mesmo nome)
- [ ] `description` no `manifest.yaml` explica o que o módulo faz de verdade (não é um placeholder tipo "TODO")
- [ ] `docs/overview.md` e `docs/examples/basic.md` existem e têm conteúdo real
- [ ] Se for `module_type: service`: `docs/contracts/api.yaml`, `docs/examples/advanced.md` e `docs/examples/integration.md` também existem

## Categoria

<!-- Qual `category` esse módulo usa no manifest.yaml? Se já existir
     uma categoria parecida no catálogo, prefira reusar em vez de criar
     uma nova (menos fragmentação no README). -->
