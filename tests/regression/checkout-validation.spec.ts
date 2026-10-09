import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { users } from '../../data/users';

test('checkout validation with empty required fields', async ({ page }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);
  await loginPage.login(users.standard.username, users.standard.password);

  const productsPage = new ProductsPage(page);
  await productsPage.addProductToCart('Sauce Labs Backpack');
  await productsPage.cartLink.click();

  const cartPage = new CartPage(page);
  await cartPage.checkout();

  const checkoutPage = new CheckoutPage(page);

  await checkoutPage.continue();

  await expect(checkoutPage.errorMessage).toBeVisible();
  await expect(page).toHaveURL(/checkout-step-one.html/);
});