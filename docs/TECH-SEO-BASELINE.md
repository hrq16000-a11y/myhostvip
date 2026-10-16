# Critérios técnicos, SEO e descoberta por IAs — MyHostVIP

## Princípio para evolução de projetos

Antes de migrar qualquer projeto, verificar compatibilidade entre Node.js, Vite, React, framework, build e hospedagem. Evitar dependência operacional do Lovable. Não aplicar upgrades em massa; alterar em rodadas isoladas, com CI, preview e rollback.

## Estado verificado — 16/10/2026

- Vite 8 já utilizado pelo MyHostVIP.
- Node.js: mínimo definido de 22.12; CI usando Node 22, Vercel configurada com Node 24.
- React 18, React Router 6 e Vite SPA; TanStack Start ainda **não instalado**.
- TanStack Start estável, com Vite, pede Vite 8. Recursos RSC exigem React 19+; uma migração SSR sem RSC deve ser avaliada separadamente.
- A aplicação gera HTML inicial vazio para o conteúdo das rotas. É necessário planejar SSR ou pré-renderização real por URL, sem quebrar navegação, formulário e WhatsApp.
- No HTML SPA atual, páginas internas compartilham o canonical da raiz. Por isso, o sitemap inicial publica somente a URL raiz, até a implantação de canonicals e HTML individuais por página.
- Removido SearchAction para uma rota /search inexistente e removidas URLs de imagens Open Graph temporárias/expiradas. Criar futuramente imagem permanente da marca.
- Robots declara OAI-SearchBot, Googlebot e Bingbot, mas isso não garante indexação ou recomendação de IAs.

## Critérios de liberação da próxima etapa: SSR + SEO por rota

1. HTML inicial contém conteúdo principal, título e metadados específicos da rota.
2. Canonical autorreferente só para páginas realmente indexáveis e únicas.
3. 404 HTTP real, redirecionamentos intencionais, sitemap consistente e links HTML rastreáveis.
4. Conteúdo autêntico sobre os serviços ofertados, preços verificados, condições de atendimento, diferenciais comprováveis; nenhum dado inventado.
5. Testes e comparação de páginas, imagens, navegabilidade, CTAs e WhatsApp.
6. Publicar via GitHub → Vercel sem exigir editor ou servidor Lovable; domínio oficial só após validação.
7. Conferir desempenho de rastreamento e indexação via Google Search Console e Bing Webmaster Tools; acompanhar citações de IA quando mensuráveis.

## Fontes oficiais

- https://tanstack.com/start/latest/docs/framework/react/migrate-from-release-candidate
- https://vite.dev/blog/announcing-vite8.html
- https://tanstack.com/start/latest/docs/framework/react/guide/server-components
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.openai.com/api/docs/bots
- https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a
