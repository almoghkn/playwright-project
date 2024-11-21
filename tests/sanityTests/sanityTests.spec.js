import { test, expect } from "@playwright/test";
import { siteURL } from "../../utils/testData.js";

test.describe("tests", () => {
  test("add products to cart", async ({ page }) => {
    await page.goto(siteURL);
    await expect(page).toHaveURL(siteURL);
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator(".title")).toContainText("Products");
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
      .click();
    await expect(
      page.locator('[data-test="shopping-cart-badge"]').toHaveCount(2)
    );
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill("Almog");
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill("Hakun");
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill("Israel");
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
  });
});
