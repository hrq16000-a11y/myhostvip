import { test, expect } from "../../playwright-fixture";

test("navegação básica MyHostVIP", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/MyHostVIP/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "Planos" }).first().click();
  await expect(page).toHaveURL(/\/planos\/?$/);
});
