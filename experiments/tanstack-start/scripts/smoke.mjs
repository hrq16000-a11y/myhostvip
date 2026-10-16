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

async function response(path) {
  const result = await fetch(origin + path)
  return { status: result.status, html: await result.text() }
}

try {
  let ready = false
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error('Servidor finalizou antecipadamente: ' + log)
    try { await response('/'); ready = true; break } catch { await new Promise(r => setTimeout(r, 500)) }
  }
  assert(ready, 'Servidor não respondeu: ' + log)

  const home = await response('/')
  assert.equal(home.status, 200)
  assert.match(home.html, /<h1[^>]*>Hospedagem de sites e landing pages MyHostVIP<\/h1>/)
  assert.match(home.html, /Hospedagem de Sites e Landing Pages/)
  assert.match(home.html, /noindex,nofollow/)

  const plans = await response('/planos')
  assert.equal(plans.status, 200)
  assert.match(plans.html, /<h1[^>]*>Planos de hospedagem MyHostVIP<\/h1>/)
  assert.match(plans.html, /Planos de Hospedagem/)
  assert.match(plans.html, /noindex,nofollow/)

  console.log('SSR smoke OK: / e /planos entregam HTML real, distinto e com noindex.')
} catch (error) {
  console.error('SSR smoke FAILED:', error)
  console.error(log.slice(-6000))
  process.exitCode = 1
} finally {
  server.kill('SIGTERM')
}
