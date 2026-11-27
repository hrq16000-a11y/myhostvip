# MyHostVIP — R7/10 experiência premium (27/11/2026)

## Base, escopo e arte
- Código principal Vite SPA: base `42181ae05019855321d3f02df42bbd353c2e65c4`. Alias público `myhostvip.vercel.app` estava READY no SHA anterior `2bedb07c2d60ed50092ea2bcf16bb3a0edf43353`, deployment `dpl_6pgLT3nU19Kw2ZZBF75sJY5oUDjo`. Último deployment de main anterior cancelado. Piloto TanStack separado, não alterado nem promovido.
- Home, planos, contato e componentes compartilhados de navegação/rodapé. Navegação e identidade mantidas, comparador com estado local/contexto de plano, CTAs reais, contraste e ritmo técnico editorial; feedback CSS 120–150ms, sem loop ou revelação que esconda conteúdo. Sem dependência nova.
- Antes: no browser desktop, hero 936 px e 27 headings de seções abaixo inicialmente ocultos; no Chromium local, overflow a 390px. CTA de contato era botão sem ação. Benchmark e métricas comerciais sem fonte verificável conforme matriz `MYHOSTVIP-COMMERCIAL-TRUTH-GATE.md`: substituídos por roteiro de consulta, não promessas ou depoimentos inferidos.
- Recursos e valores históricos R$4,99/29,99/69,99 preservados como referências não confirmadas. Remoção de CNPJ placeholder e rotulagem dos links legais como solicitação de documentos. CTA do plano dirige ao mesmo WhatsApp informado, com nome do plano. Formulário abre a mensagem para revisão, sem transmissão automática/lead persistido.
- Outros caminhos da SPA mantidos; ainda possuem afirmações herdadas que requerem validação comercial independente. O gate comercial de domínio/cutover SSR permanece NO_GO. Não alterar DNS, índice, backend, cobrança, contratos ou piloto SSR.

## QA local do candidato
- Node runtime compatível; TypeScript com tipos node explícitos (`tsc --noEmit -p tsconfig.app.json --types vite/client,node`): PASS. Sem override, teste SEO preexistente não resolve node:fs/node:path porque tsconfig.app lista apenas vite/client. Não alterado.
- Vitest: 5/5; Playwright: 3/3 (inclui dois testes novos nos 390/1440 px); Vite production build: PASS; `git diff --check`: PASS.
- Chromium dist (externos bloqueados): home, planos e contato em 320/390/768/1440 px; sem overflow, erro JS, heading oculto, CTA home acima da dobra 900 px; menu teclado/ESC mobile, seleção Business, URL preservada e detalhes expansíveis; formulário inválido não navega, dados sintéticos válidos interceptados no URL WhatsApp, nenhum envio real.
- Alturas anteriores (390/768/1440): 10458/6888/5842 px; candidato 8232/6288/4598 px. Fontes externas bloqueadas no teste; não é métrica Core Web Vitals real.
- Capturas revisadas localmente em 390/1440. A produção depende de CI no head e verificação do deployment/alias efetivo. Sem mudança no projeto SSR, no domínio comercial ou nos dados.
