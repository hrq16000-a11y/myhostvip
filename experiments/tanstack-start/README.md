# Piloto de SSR TanStack Start — MyHostVIP

**Experimental e isolado:** o Vite/React Router existente e a Vercel de produção continuam sendo publicados a partir da raiz do repositório. Este subprojeto não é usado pelo domínio principal.

## Escopo da rodada

- Comprovar TanStack Start + Vite 8 + Node >=22.12 + React 18, sem Lovable.
- Comprovar SSR **de verdade** com HTML inicial da home e da rota /planos, tags head diferentes e HTTP 200.
- Manter **noindex,nofollow** no piloto para não concorrer com o domínio oficial.
- Não portar interface, preços, integração comercial nem WhatsApp nesta etapa.

## Validação

```sh
cd experiments/tanstack-start
npm install --no-audit --no-fund
npm run build
npm run smoke:ssr
```

O workflow GitHub `.github/workflows/tanstack-start-pilot.yml` executa o mesmo procedimento em PRs, em Node 22.

## Critérios antes de substituir o site atual

1. Fixar e versionar lockfile após build reproduzível.
2. Portar páginas e componentes integralmente com comparação visual (desktop e mobile).
3. Preservar todos os links, CTAs, WhatsApp e navegação.
4. Garantir canonical autorreferente, metadados e schema válidos em cada URL indexável.
5. Testar rota inexistente com HTTP 404 verdadeiro, sitemap só de URLs aptas e imagens OG permanentes.
6. Verificar deploy Vercel com framework `tanstack-start`, Nitro e recursos SSR em preview isolado.
7. Só então avaliar merge/configuração de produção e DNS, mantendo rollback.

Fontes:
- https://tanstack.com/start/latest/docs/framework/react/build-from-scratch
- https://tanstack.com/start/latest/docs/framework/react/guide/hosting
- https://tanstack.com/start/latest/docs/framework/react/guide/routing
