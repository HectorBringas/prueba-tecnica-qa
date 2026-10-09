import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { users } from '../../data/users';

test('add product to cart', async ({ page }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);
  await loginPage.login(users.standard.username, users.standard.password);

  const productsPage = new ProductsPage(page);

  await productsPage.addProductToCart('Sauce Labs Backpack');

  await expect(productsPage.cartLink).toContainText('1');
});