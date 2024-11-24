import { test, expect } from "@playwright/test";
import { siteURL } from "../../utils/testData.js";
import { invalidUsers } from "../../utils/testData.js";
import { login } from "../../utils/testActions.js";

test.describe.only("Suite", () => {
  test.beforeEach("", async ({ page }) => {
    await page.goto(siteURL);
    await expect(page.locator("data-test=login-credentials")).toContainText(
      "Accepted usernames are"
    );
  });

  for (const invalidUser of invalidUsers) {
    test(`${invalidUser.name}, ${invalidUser.password}`, async ({ page }) => {
      await login(page, invalidUser.name, invalidUser.password);
      await expect(page.locator("data-test=error")).toContainText(
        invalidUser.errorMessage
      );
    });
  }
});
