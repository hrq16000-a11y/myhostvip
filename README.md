# MyHostVIP

Site institucional MyHostVIP, desenvolvido em **React 18 + TypeScript + Vite 8**.

**Repositório principal:** https://github.com/hrq16000-a11y/myhostvip  
**Domínio previsto:** https://myhostvip.com  
**Endereço legado Lovable:** https://myhostvip.lovable.app

## Desenvolvimento independente

O código e o fluxo de desenvolvimento deste repositório **não exigem o editor Lovable**. É possível modificar, executar, testar e gerar os arquivos estáticos apenas com Node.js e Git.

Requisitos: **Node.js 22** e npm 10+.

```bash
git clone https://github.com/hrq16000-a11y/myhostvip.git
cd myhostvip
npm ci
npm run dev
```

## Verificações

```bash
npm test             # Vitest
npm run build        # saída de produção em dist/
npm run preview      # visualizar dist/ localmente
npm run lint         # regras de qualidade existentes
npx playwright install chromium
npm run test:e2e     # smoke test independente com Playwright
```

O workflow em `.github/workflows/ci.yml` executa **npm ci, testes unitários e build** em PRs e pushes para `main`. Este workflow não precisa de Lovable, token de implantação ou chaves adicionais.

## Publicação sem Lovable

O projeto é um site **Vite SPA** com React Router: qualquer hospedagem de arquivos estáticos que suporte fallback das rotas para `/index.html` pode servir a saída `dist/`.

### Vercel (GitHub)

1. No painel Vercel, importe **este repositório GitHub**, escolhendo `main` como branch de produção.
2. Use as configurações versionadas em `vercel.json`: framework Vite, `npm ci`, `npm run build`, diretório `dist` e rewrite SPA.
3. Confira a URL temporária/preview, carregamento de recursos, rotas internas, links e conversão por WhatsApp.
4. **Somente depois de validar o deploy**, aponte o DNS do domínio para a hospedagem independente. Evite trocar DNS ou retirar a publicação Lovable antes da verificação.
5. Depois de conectado o GitHub à hospedagem, commits em `main` poderão gerar novos deploys sem qualquer operação no Lovable.

Outros provedores (Cloudflare Pages, Netlify ou hospedagem estática própria) também servem `dist/`, configurando o mesmo fallback SPA e seus próprios processos de deploy.

### Responsabilidades separadas

- **GitHub:** fonte da verdade de código, histórico, pull requests e verificações de CI.
- **Hospedagem externa:** disponibiliza o site e gerencia domínio/DNS/HTTPS; não deve depender da publicação Lovable.
- **Lovable:** opcional para visualização/edição, sem ser requisito para desenvolver ou fazer build.

> **Status:** esta mudança prepara o projeto para funcionar e ser implantado de forma independente. **Ela não confirma que o domínio já foi migrado** nem cria automaticamente uma conexão entre GitHub e um provedor de hospedagem.
