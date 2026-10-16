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
  ['/recursos', 'Recursos de Hospedagem | MyHostVIP', 'Todos os'],
  ['/templates', 'Templates para Sites | MyHostVIP', 'Templates'],
  ['/afiliados', 'Programa de Afiliados | MyHostVIP', 'Ganhe dinheiro'],
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
    assert(!seenTitles.has(expectedTitle), `Título duplicado: ${expectedTitle}`)
    seenTitles.add(expectedTitle)
    console.log(`SSR 200 ${pathname}: ${mainHeading(html)}`)
  }

  const home = (await fetchRoute('/')).html
  for (const text of [
    'Landing Pages Ilimitadas',
    'Velocidade que faz diferença',
    'O que nossos clientes dizem',
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
  assert(contact.includes('Envie uma mensagem'), 'Conteúdo do contato original não foi migrado')

  console.log(`PASSOU: ${routes.length} rotas SSR, titles/description únicos, navegação, WhatsApp e conteúdo.`)
} catch (error) {
  console.error('FALHA SSR:', error)
  console.error(logs.slice(-6000))
  process.exitCode = 1
} finally {
  server.kill('SIGTERM')
}
