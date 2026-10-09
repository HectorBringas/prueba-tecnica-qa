import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { users } from '../../data/users';

test('remove product from cart', async ({ page }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);
  await loginPage.login(users.standard.username, users.standard.password);

  const productsPage = new ProductsPage(page);
  await productsPage.addProductToCart('Sauce Labs Backpack');

  await productsPage.cartLink.click();

  const cartPage = new CartPage(page);
  await cartPage.removeProduct('Sauce Labs Backpack');

  await expect(cartPage.cartItems).toHaveCount(0);
});