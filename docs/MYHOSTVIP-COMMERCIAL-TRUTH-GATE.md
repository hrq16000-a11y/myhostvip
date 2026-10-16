# MyHostVIP — Matriz de evidências comerciais e liberação SEO

Atualizado em 2026-10-16. Fonte técnica: `hrq16000-a11y/myhostvip` e piloto `experiments/tanstack-start`. **Esta matriz não confirma prestações comerciais**: sem contrato, documento oficial ou medições, as alegações permanecem não verificadas. Não confundir textos herdados do repositório com provas externas.

| Área | Alegação herdada | Correção do piloto nesta rodada | Evidência necessária para publicar como fato |
| --- | --- | --- | --- |
| Home/planos | Starter R$4,99, Profissional R$29,99, Business R$69,99 por mês | Valores apresentados como referências antigas e sujeitos a confirmação; CTA solicita condições via WhatsApp, não simula compra | Tabela vigente de preços, prazo/renovação, impostos/taxas, limites, regras de cancelamento |
| Home | 99,9% uptime garantido, resposta <200ms, 10K+ clientes | Métricas inventariadas e retiradas da afirmação comercial | Monitoramento real datado, SLA contratado, contagem auditável de clientes |
| Home/performance/hospedagem | 12x Apache, 3.500 MB/s, barras comparativas com 95/35/15% | Benchmarks substituídos por roteiro objetivo de verificação | Teste replicável (ambiente, página, cache, região, datas) e medições publicáveis |
| Planos | Landing pages/WordPress/tráfego/SSL/email sem limite | Quadro de recursos e limites expressamente condicionado à consulta | Termos por plano, cotas implementadas, limitações de uso aceitável |
| Hospedagem/recursos | cPanel, LiteSpeed Enterprise, Softaculous, backup/WAF/anti-DDoS, PHP, MySQL, MariaDB | Recursos/versões tratados como itens a confirmar no plano e na infraestrutura | Inventário das máquinas contratadas, licenças, suporte por plano e procedimento operacional |
| Planos | Garantia de reembolso 30 dias, migração gratuita, ausência de taxas | Promessas incondicionais retiradas, condições devem ser solicitadas | Contrato/termos de contratação, política de cancelamento e migração |
| Criador de sites/templates | WordPress pronto em segundos, centenas de modelos e catálogo de 185 templates | Conteúdo convertido em orientação e formatos ilustrativos; CTA para consulta | Link para biblioteca pública real ou lista de modelos com licença e requisitos |
| Afiliados | Comissões recorrentes, bônus, painel e cadastro disponíveis | Página passa a ser consulta de possibilidade de parceria; botão funcional no WhatsApp | Regras e contrato, formulário de adesão e painel efetivamente operacionais |
| Base de conhecimento | Tutoriais completos com links para WhatsApp | Temas não publicados sinalizados, busca por texto funciona, sem fingir artigos | Artigos de suporte completos, revisados, com URL individual |
| Blog | Seis artigos com datas e sem URL de destino | Pautas em preparação e filtro funcional; sem falsas datas de publicação | Conteúdo original completo, autor, data real e link estável |
| Contato | Suporte 24/7, localização, envio silencioso | Formulário cria mensagem e abre WhatsApp somente com ação do usuário | Comprovação de horários, sede/localização e rotina de resposta |
| Rodapé | CNPJ fictício e links para termos inexistentes | CNPJ fictício retirado; pedido de documento deixa claro que é consulta | Razão social/CNPJ verificado, termos e privacidade publicados e validados |

## Condições de publicação no domínio comercial

- **Situação agora:** `NO_GO`. Não alterar `myhostvip.com`, não desativar o SPA Vercel `myhostvip` e **não remover** `noindex,nofollow` do preview SSR.
- A produção SPA atual permanece deliberadamente intocada; o piloto corrige confiança apenas no projeto SSR.
- Nunca usar o conteúdo da tabela acima para gerar avaliação fictícia, depoimento, schema `AggregateRating`, `FAQ` simulado ou `Offer` com preço não verificado.
- Antes do cutover, decidir individualmente indexação de cada URL com conteúdo original, informações verdadeiras, canonical, sitemap, headers 200/404 e testes de bot.
- Contratos, privacidade e dados empresariais oficiais são dependências reais do titular; nenhum processo automático pode inventá-los.
- Verificar política LGPD e dados pessoais, especialmente contato que abre WhatsApp de terceiro, antes de publicar informações legais.
- Gate funcional: GitHub `validate`, `ssr`, `chromium`, `compare` todos verdes; evidências do lado comercial aprovadas.
- Plano de rollback: `docs/MYHOSTVIP-SSR-CUTOVER-ROLLBACK.md`.

## Próximas decisões exigidas, sem questionários repetitivos

1. Confirmar valores e recursos dos três planos por tabela ou documento oficial.
2. Fornecer identidade empresarial e textos legais reais, ou manter a migração sem liberação de indexação.
3. Confirmar se parcerias remuneradas, modelos e suporte possuem operação efetiva; somente então reintroduzir alegações no conteúdo publicado.

**Política do repositório**: conteúdo comercial que não puder ser comprovado deve ser tratado como pergunta/possibilidade ou não exibido como benefício contratado. SEO agressivo não significa criar afirmações falsas.
