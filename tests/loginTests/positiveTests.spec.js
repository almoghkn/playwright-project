import { test, expect } from "@playwright/test";
import { siteURL } from "../../utils/testData.js";
import { positiveUsers } from "../../utils/testData.js";
import { correctPassword } from "../../utils/testData.js";

for (let name of positiveUsers) {
  test(`Positive login with ${name}`, async ({ page }) => {
    await page.goto(siteURL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(name);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(correctPassword);
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator(".title")).toContainText("Products");
  });
}