import { test, expect } from "@playwright/test";
import { siteURL } from "../../utils/testData.js";
import { positiveUsers } from "../../utils/testData.js";
import { correctPassword } from "../../utils/testData.js";
import { login } from "../../utils/testActions.js";

test.describe("Suite positive", () => {
  test.beforeEach("verify that the site loaded", async ({ page }) => {
    await page.goto(siteURL);
    await expect(page.locator("data-test=login-credentials")).toContainText(
      "Accepted usernames are"
    );
  });
for (let name of positiveUsers) {
  test(`Positive login with ${name}`, async ({ page }) => {
    await page.goto(siteURL);
    await login(page, name, correctPassword);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await expect(page.locator(".title")).toContainText("Products");
  });
}
});
