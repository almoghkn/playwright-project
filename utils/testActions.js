export async function login(page, userName, userPassword) {
  await page.locator('[data-test="username"]').fill(userName);
  await page.locator('[data-test="password"]').fill(userPassword);
  await page.locator('[data-test="login-button"]').click();
}
