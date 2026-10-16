import { test, expect } from '@playwright/test'

test('desktop: hydrate homepage and navigate through plans to hosting', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', err => errors.push(err.message))
  const initial = await page.goto('/')
  expect(initial?.status()).toBe(200)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Hospedagem rápida e poderosa')
  await expect(page.getByRole('link', { name: 'Fale conosco pelo WhatsApp' })).toHaveAttribute(
    'href', /wa\.me\/5541997452053/,
  )
  await expect(page.locator('nav a[href="/planos"]').first()).toBeVisible()
  await page.getByRole('link', { name: 'Ver Planos' }).first().click()
  await expect(page).toHaveURL(/\/planos\/?$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Hospedagem para')
  await page.locator('nav a[href="/hospedagem"]').first().click()
  await expect(page).toHaveURL(/\/hospedagem\/?$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Hospedagem profissional')
  await page.screenshot({ path: testInfo.outputPath('hosting-desktop.png'), fullPage: true })
  expect(errors, 'Erros de hidratação/execução no navegador').toEqual([])
})

test('mobile: menu navigates to contact and form inputs are editable', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const errors: string[] = []
  page.on('pageerror', err => errors.push(err.message))
  await page.goto('/')
  const menu = page.getByRole('button', { name: 'Alternar menu de navegação' })
  await expect(menu).toBeVisible()
  await menu.click()
  await expect(menu).toHaveAttribute('aria-expanded', 'true')
  await page.locator('#myhostvip-menu-mobile').getByRole('link', { name: 'Contato' }).click()
  await expect(page).toHaveURL(/\/contato\/?$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Fale')
  await page.getByPlaceholder('Seu nome').fill('Teste de navegação')
  await expect(page.getByPlaceholder('Seu nome')).toHaveValue('Teste de navegação')
  await expect(page.getByRole('link', { name: 'Fale conosco pelo WhatsApp' })).toBeVisible()
  await page.screenshot({ path: testInfo.outputPath('contact-mobile.png'), fullPage: true })
  expect(errors, 'Erros de hidratação/execução no navegador mobile').toEqual([])
})

test('unknown route: real HTTP 404 and human-readable recovery link', async ({ page }) => {
  const res = await page.goto('/rota-inexistente-para-teste')
  expect(res?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: 'Página não encontrada' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Voltar ao início' })).toHaveAttribute('href', '/')
})

test('contact: validated form opens WhatsApp with user-entered details but does not auto-send', async ({ page }) => {
  await page.goto('/contato')
  await page.evaluate(() => {
    Object.defineProperty(window, 'open', {
      configurable: true,
      value: (url: string) => {
        (window as Window & { __testWhatsappUrl?: string }).__testWhatsappUrl = url
        return null
      },
    })
  })
  await page.getByRole('button', { name: 'Continuar no WhatsApp' }).click()
  expect(await page.evaluate(() => (window as Window & { __testWhatsappUrl?: string }).__testWhatsappUrl)).toBeUndefined()

  await page.getByPlaceholder('Seu nome').fill('Pessoa de Teste')
  await page.getByPlaceholder('seu@email.com').fill('cliente@example.org')
  await page.getByPlaceholder('Como podemos ajudar?').fill('Ajuda com o plano')
  await page.getByPlaceholder('Descreva sua dúvida ou solicitação...').fill('Olá, gostaria de conhecer os planos.')
  await page.getByRole('button', { name: 'Continuar no WhatsApp' }).click()
  const url = await page.evaluate(() => (window as Window & { __testWhatsappUrl?: string }).__testWhatsappUrl)
  expect(url).toMatch(/^https:\/\/wa\.me\/5541997452053\?text=/)
  const message = new URL(url!).searchParams.get('text')
  expect(message).toContain('Pessoa de Teste')
  expect(message).toContain('cliente@example.org')
  expect(message).toContain('Ajuda com o plano')
  expect(message).toContain('Olá, gostaria de conhecer os planos.')
  await expect(page.getByText('Nada é enviado automaticamente.')).toBeVisible()
})

test('blog: only topic previews are shown and categories really filter', async ({ page }) => {
  await page.goto('/blog')
  await expect(page.getByText('6 temas em preparação.')).toBeVisible()
  await page.getByRole('button', { name: 'WordPress', exact: true }).click()
  await expect(page.getByText('2 temas em preparação.')).toBeVisible()
  await expect(page.getByRole('button', { name: 'WordPress', exact: true })).toHaveAttribute('aria-pressed','true')
  await expect(page.locator('article')).toHaveCount(2)
  await page.getByRole('button', { name: 'Todos', exact: true }).click()
  await expect(page.locator('article')).toHaveCount(6)
})

test('knowledge base: search filters unpublished support topics without fake article links', async ({ page }) => {
  await page.goto('/base-de-conhecimento')
  const search = page.getByRole('textbox', { name: 'Buscar temas na base de conhecimento' })
  await expect(page.getByRole('status')).toContainText('24 temas')
  await search.fill('DNS')
  await expect(page.getByRole('status')).toContainText('1 temas')
  await expect(page.getByText('Como configurar DNS', { exact: true })).toBeVisible()
  await expect(page.getByText('Como criar sua conta na MyHostVIP', { exact: true })).toHaveCount(0)
  await search.fill('')
  await expect(page.getByRole('status')).toContainText('24 temas')
})

test('consultation routes: templates and partnership CTAs lead to actual channels', async ({ page }) => {
  await page.goto('/templates')
  const templates = page.getByRole('link', { name: 'Consultar modelos disponíveis' })
  await expect(templates).toHaveAttribute('href', '/contato')
  await templates.click()
  await expect(page).toHaveURL(/\/contato\/?$/)
  await page.goto('/afiliados')
  const partnership = page.getByRole('link', { name: 'Consultar parcerias pelo WhatsApp' })
  await expect(partnership).toHaveAttribute('href', /wa\.me\/5541997452053\?text=/)
  await expect(partnership).toHaveAttribute('target', '_blank')
})
