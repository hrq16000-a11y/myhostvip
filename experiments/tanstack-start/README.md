# TanStack Start SSR — Migração piloto da home MyHostVIP

Experimento em `experiments/tanstack-start/`. O projeto comercial na raiz do repositório permanece Vite/React Router e sua implantação Vercel não é alterada.

## Rodada 4

Os arquivos originais de `src/pages/Index.tsx`, `src/components/landing/*`, `src/components/WhatsAppFloat.tsx`, `src/components/ui/button.tsx`, `src/lib/utils.ts`, `src/index.css`, `src/assets/logo-myhostvip.png` e `tailwind.config.ts` foram copiados **com os mesmos Git blobs** da fonte oficial. Identidade, copy, seções, comportamento motion, estilos e links foram preservados no código.

Vite resolve imports `react-router-dom` por um **adaptador exclusivo do piloto**: links de `/` e `/planos` usam o TanStack Router; links das outras páginas continuam levando ao domínio comercial enquanto não migrarem. Nada disso altera a aplicação principal.

Execução via GitHub:
```bash
cd experiments/tanstack-start
npm ci --no-audit --no-fund
npm run build
npm run smoke:ssr
```

O HTML SSR da home precisa conter título principal, seções originais, logo, preços/CTAs, link de WhatsApp e meta `noindex,nofollow`. `/planos` continua como página mínima de teste e será migrada na próxima frente.

## Limites

- Ainda faltam: verificação visual/hidratação real em browsers, SEO por rota, performance, rotas secundárias e preview SSR na Vercel.
- Os indicadores de performance, depoimentos, garantias e CNPJ do conteúdo comercial original não foram auditados nesta rodada. Antes de indexar uma página migrada, exigir provas e substituir placeholders, sem inventar dados.
- Não mudar domínio principal, configuração Vercel de produção ou retirar `noindex` deste piloto.
