# MyHostVIP — Migração incremental para TanStack Start SSR

O projeto comercial continua no diretório raiz usando React Router + Vite. Este piloto isolado no diretório `experiments/tanstack-start` é independente do Lovable, **não substitui a versão comercial** e publica HTML com `noindex,nofollow`.

## Rodadas concluídas no piloto

- Rodada 3: prova de SSR Nitro em Node 22 e Vite 8, com smoke HTTP real.
- Rodada 4: home copiada com componentes, layout, tokens CSS, imagem de marca e WhatsApp originais.
- Rodada 5: **as nove páginas secundárias** do projeto oficial foram copiadas sem reescrever suas informações ou condições comerciais. São `/planos`, `/hospedagem`, `/criador-de-sites`, `/recursos`, `/templates`, `/afiliados`, `/blog`, `/base-de-conhecimento` e `/contato`. Agora todas as dez URLs públicas têm rota TanStack Start/SSR e `head` individual.

A camada `src/lib/router-compat.tsx` liga os componentes originais do React Router ao TanStack enquanto não se faz uma refatoração total. URLs internas das dez páginas migram pelo roteador; links externos e âncoras continuam nativos. O código da versão comercial não foi alterado.

## Executar/verificar

```bash
cd experiments/tanstack-start
npm ci --no-audit --no-fund
npm run build
npm run smoke:ssr
```

O smoke testa dez respostas HTTP 200 com `text/html`, um título e description por rota, H1 SSR da página verdadeira, logo e WhatsApp originais e `noindex` obrigatório. Também protege as seções da home e os planos comerciais.

## Critérios PENDENTES antes de publicar o SSR comercial

1. Validar visual e hidratação em navegador real (desktop e mobile) e estabilidade da navegação, CTA, motion e formulário.
2. O formulário original da página `/contato` tem botão `type="button"` e **nenhum envio implementado**; jamais alegar que está funcional. Planejar integração legítima ou alternativa WhatsApp, sem receber mensagens em backend inexistente.
3. Os links de postagens do `/blog` possuem `slug: "#"` e não entregam artigos reais. Não adicionar esses artigos ao sitemap até existirem páginas completas.
4. Revisar as alegações comerciais herdadas: métricas sem fonte, depoimentos de clientes, garantias, preços, serviços 24/7, localização e CNPJ `00.000.000/0001-00`. Não inventar dados; corrigir antes de `index,follow`.
5. Testar status HTTP 404 real para rotas ausentes, canonicals self por URL, Open Graph com imagem permanente, robots, sitemap e JSON-LD válido por página.
6. Validar o build Nitro `vercel` em projeto de preview isolado, sem mexer no projeto comercial da Vercel ou domínio oficial.
7. Medir performance, regressões e rastreabilidade antes de cutover; guardar rollback verificável.

## Diretriz

GitHub é a fonte de verdade. TanStack Start/Vite/Node só são migrados quando compatíveis e comprovados. O SSR ajuda buscadores e assistentes de IA a lerem conteúdo, mas não garante citação ou recomendação.
