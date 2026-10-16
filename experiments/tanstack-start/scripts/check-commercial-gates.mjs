import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import assert from 'node:assert/strict'

// Scan customer-facing SSR components only, not technical documentation where
// forbidden claims may appear as examples of what NOT to publish.
const sourceRoots = ['src/pages', 'src/components/landing']
function listTsx(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return listTsx(path)
    return /\.tsx$/.test(path) ? [path] : []
  })
}
const files = sourceRoots.flatMap(listTsx)
assert(files.length >= 15, 'Scanner found too few public components — review source paths')

const forbidden = [
  [/99[,.]9\s*%/gi, 'unproven 99.9% uptime'],
  [/\b10K\+/gi, 'unproven customers'],
  [/\b12x\s+(?:mais|r[aá]pid)/gi, 'unproven 12x performance'],
  [/3\.500\s*MB\/s/gi, 'unproven disk benchmark'],
  [/garantia\s+de\s+30\s+dias/gi, 'unverified refund guarantee'],
  [/00\.000\.000\/0001-00/g, 'fake CNPJ'],
  [/\b24\/7\b/g, 'unverified round-the-clock support'],
  [/seo\s+autom[aá]tico/gi, 'false automatic SEO promise'],
  [/\b185\s+templates/gi, 'unverified catalog size'],
  [/landing\s+pages\s+ilimitadas/gi, 'unverified unlimited pages'],
  [/assinar\s+agora/gi, 'false instant subscription action'],
  [/suporte\s+priorit[aá]rio/gi, 'unverified priority support'],
]
const errors = []
for (const path of files) {
  const source = readFileSync(path, 'utf8')
  for (const [pattern, explanation] of forbidden) {
    pattern.lastIndex = 0
    for (const match of source.matchAll(pattern)) {
      const line = source.slice(0, match.index).split('\n').length
      errors.push(`${path}:${line}: ${explanation} (${match[0]})`)
    }
  }
}
const root = readFileSync('src/routes/__root.tsx','utf8')
if (!/name:\s*['"]robots['"],\s*content:\s*['"]noindex,nofollow['"]/.test(root))
  errors.push('SSR preview must retain noindex,nofollow — production cutover requires separate approval')
const contact = readFileSync('src/pages/Contact.tsx','utf8')
if (!contact.includes('onSubmit={handleWhatsApp}') ||
    !contact.includes('Continuar no WhatsApp') ||
    !contact.includes('Nada é enviado automaticamente.')) {
  errors.push('Contact must explicitly open WhatsApp after user action with no fake send state')
}
const blog = readFileSync('src/pages/Blog.tsx','utf8')
if (blog.includes('slug: "#"') || !blog.includes('em preparação'))
  errors.push('Blog may not pretend that unpublished topics have published article URLs')
if (errors.length) {
  console.error('BLOCKED commercial release gate:\n' + errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`PASS: ${files.length} public SSR components checked; preview SEO and contact guards enforced.`)
}
