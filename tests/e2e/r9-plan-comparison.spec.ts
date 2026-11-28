import { test, expect } from "@playwright/test";

for (const width of [390, 768, 1440]) {
  test(`comparação contextual de planos — ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/planos?plano=starter&origem=home");
    const table = page.getByRole("table", { name: "Compare os planos lado a lado" });
    await expect(table).toBeVisible();
    await expect(table.getByText("R$ 4,99", { exact: true })).toBeVisible();
    await expect(table.getByText("R$ 29,99", { exact: true })).toBeVisible();
    await expect(table.getByText("R$ 69,99", { exact: true })).toBeVisible();
    await expect(table.getByText("Consultar limites", { exact: true })).toBeVisible();
    await expect(table.getByRole("button", { name: "Escolher Starter" })).toHaveAttribute("aria-pressed", "true");
    const professional = table.getByRole("button", { name: "Escolher Profissional" });
    await professional.focus();
    await page.keyboard.press("Enter");
    await expect(professional).toHaveAttribute("aria-pressed", "true");
    await expect(table.getByRole("button", { name: "Escolher Starter" })).toHaveAttribute("aria-pressed", "false");
    await expect(page).toHaveURL(/plano=profissional/);
    await expect(page).toHaveURL(/origem=home/);
    await expect(page.locator("#plano-profissional")).toContainText("Opção que você selecionou");
    await expect(page.getByRole("link", { name: "Ir ao plano" })).toHaveAttribute("href", "#plano-profissional");
    await expect(page.getByRole("link", { name: "Consultar plano Profissional pelo WhatsApp" })).toHaveAttribute("href", /Profissional/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
    await page.reload();
    await expect(professional).toHaveAttribute("aria-pressed", "true");
  });
}
