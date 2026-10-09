import { test, expect } from '../../fixtures/base-test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../data/users';

test('login with invalid username', async ({ page }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);

  await loginPage.login(
    users.blockedUsername.username,
    users.blockedUsername.password
  );

  await expect(loginPage.blockedMessage).toBeVisible();
  await expect(page).toHaveURL(/\/$/);
});