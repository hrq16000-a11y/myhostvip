import { test, expect, type Page } from '@playwright/test'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const variants = [
  { label: 'SPA', origin: 'http://127.0.0.1:4173' },
  { label: 'SSR', origin: 'http://127.0.0.1:43126' },
] as const
const pathnames = ['/', '/planos', '/hospedagem', '/contato']
const out = 'experiments/tanstack-start/visual-screenshots'

async function inspect(page: Page, origin: string, path: string, size: 'desktop' | 'mobile') {
  await page.setViewportSize(size === 'mobile' ? { width: 390, height: 844 } : { width: 1440, height: 900 })
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  const response = await page.goto(origin + path)
  expect(response?.status(), `HTTP failure at ${origin}${path}`).toBe(200)
  await page.locator('h1').first().waitFor({ state: 'visible' })
  await page.evaluate(() => document.fonts.ready)
  const h1 = await page.locator('h1').first().innerText()
  const text = (await page.locator('body').innerText()).replace(/\s+/g, ' ').trim()
  const anchors = await page.locator('a[href^="/"]').evaluateAll(nodes =>
    [...new Set(nodes.map(node => node.getAttribute('href')).filter(Boolean))].sort(),
  )
  const whatsapp = await page.getByRole('link', { name: 'Fale conosco pelo WhatsApp' }).getAttribute('href')
  const headerImage = await page.locator('nav img[alt="MyHostVIP"]').first().getAttribute('src')
  const name = `${path === '/' ? 'home' : path.substring(1)}-${size}`
  mkdirSync(out, { recursive: true })
  await page.screenshot({ path: join(out, `${name}-${origin.includes('43126') ? 'ssr' : 'spa'}.png`), fullPage: true, animations: 'disabled', caret: 'hide' })
  expect(errors, 'Runtime/hydration errors').toEqual([])
  return { h1: h1.replace(/\s+/g, ' ').trim(), text, anchors, whatsapp, headerImage }
}

for (const path of pathnames) {
  test(`Visual parity: ${path} desktop`, async ({ browser }) => {
    const contexts = await Promise.all(variants.map(() =>
      browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce', colorScheme: 'dark' })))
    try {
      const pages = await Promise.all(contexts.map(c => c.newPage()))
      const [spa, ssr] = await Promise.all(pages.map((p,i) => inspect(p, variants[i].origin, path, 'desktop')))
      expect(ssr.h1).toBe(spa.h1)
      expect(ssr.whatsapp).toBe(spa.whatsapp)
      expect(ssr.anchors).toEqual(spa.anchors)
      expect(ssr.text).toBe(spa.text)
    } finally { await Promise.all(contexts.map(c => c.close())) }
  })
}

test('Visual parity: homepage mobile', async ({ browser }) => {
  const contexts = await Promise.all(variants.map(() =>
    browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce', colorScheme: 'dark' })))
  try {
    const pages = await Promise.all(contexts.map(c => c.newPage()))
    const [spa, ssr] = await Promise.all(pages.map((p,i) => inspect(p, variants[i].origin, '/', 'mobile')))
    expect(ssr.h1).toBe(spa.h1)
    expect(ssr.whatsapp).toBe(spa.whatsapp)
    expect(ssr.anchors).toEqual(spa.anchors)
    expect(ssr.text).toBe(spa.text)
  } finally { await Promise.all(contexts.map(c => c.close())) }
})
