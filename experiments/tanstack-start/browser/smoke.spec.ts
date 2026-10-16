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
  await page.getByRole('link', { name: 'Contato' }).click()
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
