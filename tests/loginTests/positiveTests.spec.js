import { test, expect } from "@playwright/test";
import { siteURL } from "../../utils/testData.js";
import { positiveUsers } from "../../utils/testData.js";
import { correctPassword } from "../../utils/testData.js";
import { login } from "../../utils/testActions.js";

for (let name of positiveUsers) {
  test(`Positive login with ${name}`, async ({ page }) => { // Put this test is a test suite - test.describe
    await page.goto(siteURL);
    await login(page, name, correctPassword);
    // you missed a validation step. you need to validate the url after the user redirect to the homepage.
    await expect(page.locator(".title")).toContainText("Products");
  });
}
