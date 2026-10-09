import { test, expect } from '../../fixtures/base-test';
import { users } from '../../data/users';


test('successful login', async ({ page, loginPage }) => {
  await page.goto('/');

  await loginPage.login(users.standard.username, users.standard.password);

  await expect(page).toHaveURL(/inventory.html/);
});