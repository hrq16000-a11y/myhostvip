import { test, expect } from "../../playwright-fixture";

test.use({ reducedMotion: "reduce" });

for (const width of [390, 1440]) {
  test(`jornada de hospedagem em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const overflow = () => page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(await overflow()).toBe(false);
    const choice = page.getByRole("button", { name: "Projetos com mais demanda" });
    await choice.click();
    await expect(choice).toHaveAttribute("aria-pressed", "true");
    await page.getByRole("link", { name: "Ver opção e condições" }).click();
    await expect(page).toHaveURL(/\/planos\?plano=business$/);
    await expect(page.getByText("Opção selecionada:")).toContainText("Business");
    expect(await overflow()).toBe(false);
    const href = await page.getByRole("link", { name: "Consultar plano Business pelo WhatsApp" }).getAttribute("href");
    expect(new URL(href!).searchParams.get("text")).toContain("Business");
    await page.getByRole("link", { name: "Tirar dúvidas" }).click();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(await overflow()).toBe(false);
    let captured = "";
    await page.route("https://wa.me/**", async route => {
      captured = route.request().url();
      await route.fulfill({ status: 200, contentType: "text/html", body: "Teste interceptado; mensagem não enviada." });
    });
    await page.getByRole("button", { name: "Continuar no WhatsApp" }).click();
    expect(captured).toBe("");
    await page.getByLabel("Nome", { exact: true }).fill("Pessoa Teste");
    await page.getByLabel("Assunto", { exact: true }).fill("Consulta");
    await page.getByLabel("Mensagem", { exact: true }).fill("Teste isolado sem envio");
    await page.getByRole("button", { name: "Continuar no WhatsApp" }).click();
    await expect(page).toHaveURL(/^https:\/\/wa\.me\//);
    expect(new URL(captured).searchParams.get("text")).toContain("Teste isolado sem envio");
  });
}
