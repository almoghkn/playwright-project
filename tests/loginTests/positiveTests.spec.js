import { test, expect } from "@playwright/test";
import { siteURL } from "../../utils/testData.js";
import { positiveUsers } from "../../utils/testData.js";
import { correctPassword } from "../../utils/testData.js";
import { login } from "../../utils/testActions.js";

for (let name of positiveUsers) {
  test(`Positive login with ${name}`, async ({ page }) => {
    await page.goto(siteURL);
    await login(page, name, correctPassword);
    await expect(page.locator(".title")).toContainText("Products");
  });
}
