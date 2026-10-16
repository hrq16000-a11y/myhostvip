import { spawn } from 'node:child_process'
import assert from 'node:assert/strict'

const port = 43117
const origin = `http://127.0.0.1:${port}`
const server = spawn(process.execPath, ['.output/server/index.mjs'], {
  env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', NODE_ENV: 'production' },
  stdio: ['ignore', 'pipe', 'pipe'],
})
let logs = ''
for (const stream of [server.stdout, server.stderr]) {
  stream.on('data', (chunk) => { logs += chunk.toString() })
}

const fetchRoute = async path => {
  const result = await fetch(origin + path)
  return { status: result.status, html: await result.text(), contentType: result.headers.get('content-type') }
}

const mainHeading = html => {
  const match = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)
  assert(match, 'Nenhum h1 encontrado no HTML de resposta')
  return match[1].replace(/<[^>]*>/g, ' ').replace(/&(?:nbsp|#160);/g, ' ').replace(/\s+/g, ' ').trim()
}

const routes = [
  ['/', 'MyHostVIP - Hospedagem Rápida', 'Hospedagem rápida e poderosa para criar'],
  ['/planos', 'Planos de Hospedagem | MyHostVIP', 'Hospedagem para'],
  ['/hospedagem', 'Hospedagem de Sites | MyHostVIP', 'Hospedagem profissional'],
  ['/criador-de-sites', 'Criador de Sites | MyHostVIP', 'Crie sites'],
  ['/recursos', 'Recursos de Hospedagem | MyHostVIP', 'Recursos para'],
  ['/templates', 'Templates para Sites | MyHostVIP', 'Ideias de'],
  ['/afiliados', 'Parcerias e Indicações | MyHostVIP', 'Conheça possibilidades'],
  ['/blog', 'Blog de Hospedagem e Sites | MyHostVIP', 'Dicas e'],
  ['/base-de-conhecimento', 'Base de Conhecimento | MyHostVIP', 'Base de'],
  ['/contato', 'Contato | MyHostVIP', 'Fale'],
]

try {
  let ready = false
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error('Servidor interrompido: ' + logs)
    try { await fetchRoute('/'); ready = true; break } catch { await new Promise(r => setTimeout(r, 500)) }
  }
  assert(ready, 'Servidor Nitro não iniciou: ' + logs)

  const seenTitles = new Set()
  for (const [pathname, expectedTitle, expectedHeading] of routes) {
    const { status, html, contentType } = await fetchRoute(pathname)
    assert.equal(status, 200, `Falha HTTP em ${pathname}`)
    assert.match(contentType || '', /text\/html/, `Content-type inválido em ${pathname}`)
    assert(html.includes('<title>') && html.includes(expectedTitle), `Head sem título exclusivo: ${pathname}`)
    assert.match(html, /name="description"/, `Falta description para ${pathname}`)
    assert.match(html, /noindex,nofollow/, `Preview indexável indevidamente: ${pathname}`)
    assert(mainHeading(html).includes(expectedHeading), `H1 não renderizado em ${pathname}: ${mainHeading(html)}`)
    assert(html.includes('logo-myhostvip'), `Logo original ausente em ${pathname}`)
    assert(html.includes('5541997452053'), `WhatsApp original ausente em ${pathname}`)
    const canonical = 'https://myhostvip.com' + pathname
    const canonicalLinks = html.match(/<link\b[^>]*rel="canonical"[^>]*>/gi) || []
    assert.equal(canonicalLinks.length, 1, `Canonical duplicado ou ausente: ${pathname}`)
    assert(canonicalLinks[0].includes(`href="${canonical}"`), `Canonical errado: ${pathname}`)
    assert(html.includes(`content="${canonical}"`) && html.includes('property="og:url"'),
      `Open Graph URL incorreta: ${pathname}`)
    assert(html.includes('name="twitter:card"'), `Twitter card ausente: ${pathname}`)
    assert(html.includes('application/ld+json'), `JSON-LD ausente: ${pathname}`)
    assert(html.includes('"@type":"') || html.includes('&quot;@type&quot;'),
      `JSON-LD não serializado no HTML: ${pathname}`)
    assert(!html.includes('gpt-engineer-file-uploads'), `Imagem social temporária: ${pathname}`)
    assert(!seenTitles.has(expectedTitle), `Título duplicado: ${expectedTitle}`)
    seenTitles.add(expectedTitle)
    console.log(`SSR 200 ${pathname}: ${mainHeading(html)}`)
  }

  const home = (await fetchRoute('/')).html
  for (const text of [
    'Landing Pages e limites',
    'Velocidade que faz diferença',
    'O que avaliar antes de escolher uma hospedagem',
    'Pronto para começar',
    'Ver Planos',
  ]) {
    assert(home.includes(text), `Componente da home não renderizado: ${text}`)
  }
  assert.match(home, /href="\/planos"/)
  assert.match(home, /Fale conosco pelo WhatsApp/)

  const plans = (await fetchRoute('/planos')).html
  assert(plans.includes('Starter') && plans.includes('Profissional') && plans.includes('Business'), 'Planos reais não foram migrados')
  const contact = (await fetchRoute('/contato')).html
  assert(contact.includes('Prepare sua mensagem') && contact.includes('Continuar no WhatsApp'), 'Conversão WhatsApp não entregue no HTML de contato')
  assert(!contact.includes('Disponível 24/7') && !contact.includes('24/7/365'), 'Promessa de suporte não verificada')
  const blog = (await fetchRoute('/blog')).html
  assert(blog.includes('em preparação') && !blog.includes('15 Mar 2026'), 'Blog ainda anuncia artigos sem publicação')
  assert(!home.includes('Carlos Silva'), 'Depoimento sem comprovação no HTML SSR')
  assert(!home.includes('00.000.000/0001-00'), 'CNPJ de exemplo não pode aparecer na produção')

  const templates = (await fetchRoute('/templates')).html
  assert(templates.includes('Exemplos de formatos') && !templates.includes('185 templates'), 'Templates sem catálogo verificado')
  assert(templates.includes('Consultar modelos disponíveis'), 'CTA de templates deve levar à consulta')
  const affiliates = (await fetchRoute('/afiliados')).html
  assert(affiliates.includes('Consultar parcerias pelo WhatsApp') && !affiliates.includes('comissões recorrentes'), 'Afiliados promete benefícios não confirmados')
  const knowledge = (await fetchRoute('/base-de-conhecimento')).html
  assert(knowledge.includes('temas em preparação encontrados') && knowledge.includes('Buscar temas'), 'Base de conhecimento simula artigos prontos')
  const hosting = (await fetchRoute('/hospedagem')).html
  assert(hosting.includes('Especificações a confirmar') && !hosting.includes('3.500 MB/s') && !hosting.includes('12x mais veloz'), 'Hosting promete benchmarks sem medição')
  const resources = (await fetchRoute('/recursos')).html
  assert(resources.includes('recursos') && resources.includes('disponibilidade'), 'Recursos não deixam clara a necessidade de confirmação')
  assert(plans.includes('Consultar este plano') && plans.includes('Preços') && !plans.includes('Assinar Agora'), 'CTA/preços induzem assinatura ou garantia imediata')
  assert(!plans.includes('Garantia de 30 dias') && !home.includes('10K+') && !home.includes('99.9%'), 'Marketing numérico não verificado em HTML SSR')
  assert(!home.includes('12x mais rápido') && !home.includes('3.500 MB/s'), 'Home promete benchmarks inexistentes')
  console.log('CONFIRMADO: transparência comercial e CTAs de contato sem simular compra.')

  const missing = await fetchRoute('/pagina-inexistente-verificacao-404')
  assert.equal(missing.status, 404, 'Rota inexistente NÃO retornou status HTTP 404')
  assert(missing.html.includes('Página não encontrada'), 'Tela 404 amigável ausente')
  assert(missing.html.includes('noindex,nofollow'), '404 não foi bloqueado para indexação')
  console.log('SSR 404 /pagina-inexistente-verificacao-404: HTTP 404 confirmado')
  console.log(`PASSOU: ${routes.length} rotas SSR, titles/description únicos, navegação, WhatsApp e conteúdo.`)
} catch (error) {
  console.error('FALHA SSR:', error)
  console.error(logs.slice(-6000))
  process.exitCode = 1
} finally {
  server.kill('SIGTERM')
}
