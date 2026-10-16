import { spawn } from 'node:child_process'
import assert from 'node:assert/strict'

const port = 43117
const origin = `http://127.0.0.1:${port}`
const server = spawn(process.execPath, ['.output/server/index.mjs'], {
  env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', NODE_ENV: 'production' },
  stdio: ['ignore', 'pipe', 'pipe'],
})
let log = ''
for (const stream of [server.stdout, server.stderr]) {
  stream.on('data', (chunk) => { log += chunk.toString() })
}
const response = async (path) => {
  const result = await fetch(origin + path)
  return { status: result.status, html: await result.text() }
}
try {
  let ready = false
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error('Servidor finalizou: ' + log)
    try { await response('/'); ready = true; break } catch { await new Promise(r => setTimeout(r, 500)) }
  }
  assert(ready, 'Servidor não respondeu: ' + log)
  const home = await response('/')
  assert.equal(home.status, 200)
  assert.match(home.html, /Hospedagem rápida e poderosa para criar/)
  assert.match(home.html, /Landing Pages Ilimitadas/)
  assert.match(home.html, /Velocidade que faz diferença/)
  assert.match(home.html, /O que nossos clientes dizem/)
  assert.match(home.html, /Pronto para começar/)
  assert.match(home.html, /Ver Planos/)
  assert.match(home.html, /href="\/planos"/)
  assert.match(home.html, /Fale conosco pelo WhatsApp/)
  assert.match(home.html, /5541997452053/)
  assert.match(home.html, /logo-myhostvip/)
  assert.match(home.html, /noindex,nofollow/)
  assert.match(home.html, /MyHostVIP - Hospedagem Rápida/)
  const plans = await response('/planos')
  assert.equal(plans.status, 200)
  assert.match(plans.html, /Planos de hospedagem MyHostVIP/)
  assert.match(plans.html, /noindex,nofollow/)
  assert.match(plans.html, /Planos de Hospedagem/)
  console.log('SSR OK: home real e WhatsApp, /planos, HTML e SEO de piloto.')
} catch (error) {
  console.error('SSR FAILED:', error)
  console.error(log.slice(-6000))
  process.exitCode = 1
} finally { server.kill('SIGTERM') }
