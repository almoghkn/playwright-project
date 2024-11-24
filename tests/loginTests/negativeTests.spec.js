import { test, expect } from "@playwright/test";
import { siteURL } from "../../utils/testData.js";
import { invalidScenarios } from "../../utils/testData.js";
import { login } from "../../utils/testActions.js";

test.describe.only("Suite", () => {
  test.beforeEach("", async ({ page }) => {
    await page.goto(siteURL);
    // add assertion that the wesite opened
  });
});

for (const scenario of invalidScenarios) {
  test(`${scenario.name}, ${scenario.password}`, async ({ page }) => {
    await login(page, scenario.name, scenario.password);
    await expect(page.locator(".title")).toHaveText(scenario.errorMessage);
  });
}
