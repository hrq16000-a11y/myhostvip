---
name: shared-reference-intelligence
description: Métodos consultivos e opcionais de motion, QA mobile, acessibilidade e auditoria para novas tarefas; nunca instala código externo automaticamente.
---

# Inteligência compartilhada de referências — 2026-11-20

## Precedência
Ler primeiro `AGENTS.md`, README, contratos locais e os gates do repositório. Este documento **complementa** as referências TasteSkill, Transitions.dev, React Bits e RiseClub já adotadas; não as repete nem altera arquitetura, banco, identidade ou deploy. Selecionar somente competências relevantes, não todos os efeitos ou dependências.

## Novas capacidades aproveitáveis
- **Reanimate** (https://github.com/NiazMorshed2007/reanimate, MIT): usar somente **o método** de analisar motion autorizado: observar estados inicial/intermediário/final, registrar gatilho/duração/easing, implementar com recursos existentes, comparar evidências visuais e ajustar. Não instalar Bun, ffmpeg, Chromium ou scripts do projeto por esta referência.
- **Playwright mobile / sobreposição** (https://gist.github.com/tobiashochguertel/bf7bc60f8946c7ecbe0d14782b4a8c99): usar como lista de hipóteses de oclusão, sticky, overflow e elementos encobertos. Proibido executar instaladores remotos.
- **Plano visual 390/1440** (https://gist.github.com/michael-matias-2026/d80389dfa08f4db9c5cc6020adf911ce): adaptar como roteiro para QA; não presumir que um Gist é suíte homologada.
- **Acessibilidade** (https://gist.github.com/arjunattam/e7a5d6bf25ffab2a1b972bbc3bf1db9f): ideias de locators semânticos, foco, teclado, contraste e `prefers-reduced-motion`.
- **Dados/RLS quando aplicável**: metadados somente leitura, privilégios mínimos e revisão da documentação oficial de PostgreSQL; não copiar SQL de Gists nem acessar banco oficial sem escopo/autorização. RLS ativada sem política permissiva é default deny.

## Aplicação específica
Site institucional MyHostVIP: futuras melhorias de comparação de planos, Home e contato; preservar clareza factual, identidade e roteamento SPA.
React/Vite, framer-motion e Playwright existentes; reutilizar primitives locais, sem exigência de SSR em um site SPA.
Validar quando houver alterações de UI: 390/1440 px, foco/teclado, reduced-motion, rotas SPA, planos/CTA e smoke Playwright existente.

## Contrato de adoção
1. Classificar a tarefa e selecionar referências como `ADAPT`, `REFERENCE_ONLY`, `REJECT` ou `NOT_APPLICABLE`, indicando benefício mensurável.
2. Examinar licença **do código específico**, origem, SHA quando for usar executáveis, dependências, dados, segurança, custo e impacto na performance. Gists públicos não autorizam cópia automaticamente.
3. Preferir código e testes locais; sem `curl|bash`, CLIs externas, instalações, uso de tokens, custos pagos ou Lovable Max sem autorização. GitHub/Codex primeiro.
4. Garantir fallback sem animação/JS, reduzir efeitos no mobile e não trocar negócio/conversão por enfeite. Qualquer implementação funcional exige PR e gates próprios.
5. Registrar provas, testes executados e não executados; nunca confundir documentação, CI, preview e produção.

**Estado:** repertório consultivo apenas; nenhuma integração de código de terceiros, dependência, pipeline, banco ou site em produção.
