import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { users } from '../../data/users';

test('complete purchase successfully', async ({ page }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);
  await loginPage.login(users.standard.username, users.standard.password);

  const productsPage = new ProductsPage(page);
  await productsPage.addProductToCart('Sauce Labs Backpack');
  await productsPage.cartLink.click();

  const cartPage = new CartPage(page);
  await cartPage.checkout();

  const checkoutPage = new CheckoutPage(page);

  await checkoutPage.fillCustomerInformation(
    'John',
    'Doe',
    '12345'
  );

  await checkoutPage.continue();

  // --- NUEVA VALIDACIÓN DE PRECIOS EN EL RESUMEN ---
  // 1. Extraemos el texto del subtotal, impuesto y total (ej. "Item total: $29.99", "Tax: $2.40", "Total: $32.39")
  const subtotalText = await checkoutPage.subtotalLabel.textContent(); // O el selector que uses en tu CheckoutPage
  const taxText = await checkoutPage.taxLabel.textContent();
  const totalText = await checkoutPage.totalLabel.textContent();

  // 2. Limpiamos los textos para convertirlos a números flotantes
  const subtotal = Number(subtotalText?.replace(/[^0-9.-]+/g, ''));
  const tax = Number(taxText?.replace(/[^0-9.-]+/g, ''));
  const total = Number(totalText?.replace(/[^0-9.-]+/g, ''));

  // 3. Validamos matemáticamente (usamos .toFixed(2) para evitar problemas de decimales en JS)
  const calculatedTotal = Number((subtotal + tax).toFixed(2));
  expect(total).toBe(calculatedTotal);
  // ------------------------------------------------

  await checkoutPage.finishOrder();

  await expect(checkoutPage.confirmationMessage).toBeVisible();
});