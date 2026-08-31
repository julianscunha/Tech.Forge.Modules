# Política de Segurança

## Reportando uma vulnerabilidade

Se você encontrou uma vulnerabilidade de segurança em algo publicado
neste catálogo, **não abra uma issue pública**. Use o **GitHub Private
Vulnerability Reporting**:

1. Vá na aba **Security** deste repositório.
2. Clique em **Report a vulnerability**.
3. Descreva o problema com o máximo de detalhe possível (qual módulo,
   passos para reproduzir, impacto, versão afetada).

Isso cria um relatório privado, visível só para os mantenedores, até que
o problema seja triado e corrigido.

## Escopo

**Em escopo**: os módulos publicados em `modules/` deste catálogo — o
código-fonte deles (visível em cada release, dentro do `.mod`), o
processo de validação (`validate-modules.yml`) e a automação de
publicação (`update-modules-readme.yml`).

**Fora de escopo**: vulnerabilidades na plataforma Core em si (FastAPI,
verificação de integridade/assinatura, Package Manager). Reporte essas
no repositório principal —
[`Tech.Forge` → `SECURITY.md`](https://github.com/julianscunha/Tech.Forge/blob/main/SECURITY.md).

## O que a validação automática já cobre (e o que não cobre)

Todo módulo aqui passa por `techforge validate-module` antes do merge —
isso confirma estrutura do manifesto, contrato público declarado e
documentação mínima. **Isso não é uma auditoria de segurança do código
de negócio do módulo.** O Core verifica integridade (hash por arquivo) e
assinatura (Ed25519) do pacote publicado, não audita o que a lógica
dentro dele faz. Um módulo tecnicamente válido não é automaticamente
seguro — se você encontrar algo que um módulo faz e não deveria (acesso
indevido a dados, execução de código não sandboxada de forma perigosa,
etc.), isso está em escopo para reportar aqui.

## Tempo de resposta

Este é um projeto mantido por uma pessoa — não há SLA formal. Espere uma
resposta inicial em poucos dias. Vulnerabilidades confirmadas recebem
prioridade sobre qualquer outro trabalho em andamento, incluindo remoção
imediata do módulo afetado do catálogo se necessário.
