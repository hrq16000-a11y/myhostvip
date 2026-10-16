# MyHostVIP — Plano de migração SSR e retorno seguro

**Status: NÃO AUTORIZADO PARA CUTOVER** até os portões abaixo serem verificados. Este documento organiza a troca, sem executá-la automaticamente.

## Inventário de ambientes (16/10/2026)

- Código de referência: `hrq16000-a11y/myhostvip`, branch `main`.
- Vercel SPA comercial: equipe `msolus`, projeto `myhostvip`, ID `prj_NvO0jpWLnmZZIzGcuQ0HMWLvMbh2`, raiz do repositório, URL `https://myhostvip.vercel.app`.
- Vercel SSR de ensaio: projeto `myhostvip-tanstack-ssr-preview`, ID `prj_40SwM1etnRthYWaeq6FKjCr7hIO3`, raiz `experiments/tanstack-start`, Node 22, URL `https://myhostvip-tanstack-ssr-preview.vercel.app`.
- Domínio comercial `myhostvip.com`: **não mover automaticamente**. Verificar separadamente domínio e DNS, incluindo `www` e renovação de SSL.
- Acompanhar `main` do GitHub, commit implantado, status de builds, checks GitHub, funções e redirecionamentos antes de mudar tráfego.

## Portões de prontidão (todos obrigatórios)

1. Concluir afirmações comerciais verificáveis e documentação dos planos, preços, contratos, política de privacidade e identificação empresarial com fontes fornecidas pelo responsável. Não inventar CNPJ, SLA, clientes, infra ou funcionalidades.
2. Garantir páginas legais reais (não confundir solicitação via WhatsApp com documento de política publicado). Confirmar quem recebe os dados de contato e seus fluxos de consentimento.
3. Validar atendimento e conversão: WhatsApp original, formulário que abre mensagem preenchida, navegabilidade dos CTAs, sem conversão falsa. Links de afiliados e blog só podem prometer recursos implementados.
4. Definir páginas **elegíveis para index** individualmente; manter páginas editoriais sem conteúdo completo em noindex ou sem sitemap até publicação. Implementar `robots.txt`, `sitemap.xml` seletivo e canonicals autorreferentes somente no domínio oficial.
5. Validar visuais e conteúdo em desktop/mobile e capturar Web Vitals, hidratação, imagens, acessibilidade, 404 e 5xx sob build real Vercel; nenhum relaxamento de limiar sem evidência.
6. Separar ambiente de teste com `noindex,nofollow` do release: no release, aplicar `index,follow` somente nas rotas aprovadas, sem indexação em massa.
7. Guardar deployment SPA `READY` conhecido e confirmar que pode ser restaurado. Congelar alterações de domínio durante a janela de troca; registrar IDs e horários.

## Sequência de migração sem indisponibilidade

1. Validar que o projeto SSR independente devolve HTTP 200 por rota, HTML distinto e 404 verdadeiro (inclusive em Vercel), com os dados corrigidos.
2. Confirmar o deployment SPA atual `READY` e anotar ID e alias; salvar capturas/relatório de CI e versionar commit de release.
3. Criar um deployment SSR de produção **sem vincular imediatamente** o domínio comercial; testar a URL de stage e rotas críticas.
4. Migrar apenas quando houver evidências comerciais e qualidade suficientes. Preferir promoção/alias Vercel sem mudança manual de DNS quando os projetos estiverem no mesmo provedor; confirmar titularidade de domínio e configuração SSL primeiro.
5. Testar após a promoção: home, planos, hospedagem, contato, WhatsApp, navegabilidade e robots/sitemap/canonicals; confirmar logs HTTP e erros. Continuar com monitoramento de indexação no GSC/Bing.
6. Não apagar SPA nem desligar sua conexão GitHub antes do período de estabilização.

## Retorno / rollback

Se houver falha de 5xx, navegação, captação de leads, WhatsApp ou SEO:

1. **Suspender novas promoções e alterações de DNS**; identificar primeiro se o problema está no projeto SSR ou na configuração do domínio.
2. Na Vercel, localizar e promover novamente o deployment SPA `READY` validado ou devolver a associação do domínio ao projeto SPA (conforme o método realmente usado no cutover). Verificar todos os aliases e certificados; jamais assumir que a troca anterior preservou SSL.
3. Revalidar 200 em `/`, `/planos`, `/hospedagem`, `/contato`, funil WhatsApp e assets; inspecionar `robots.txt`, `sitemap.xml`, canonical e logs 4xx/5xx.
4. Corrigir SSR em branch separada, novos testes CI/Chromium, e só então reavaliar cutover.

**Não usar `vercel rollback` cegamente**: ele altera a atribuição automática de produção; escolher um deployment específico e verificar o estado de auto-assign/promotion depois.

## Trabalho ainda aberto

- O texto legado de `/planos`, `/hospedagem`, `/recursos`, `/afiliados` e outras seções inclui alegações de tecnologia, segurança, SLA, garantia, preço e funcionalidades que não foram verificadas. Estas páginas continuam `noindex,nofollow` no SSR experimental.
- As pautas de `/blog` não são artigos publicados. Não adicionar links `#` como destinos de conteúdo ou sitemap de artigos.
- Em `/contato`, o formulário SSR envia os dados **somente para um link WhatsApp**, para revisão e envio pelo usuário. Não existe backend de e-mail ou armazenamento de leads; garantir transparência.
- A identidade empresarial, termos e política de privacidade precisam de dados verificados antes do release indexável.
