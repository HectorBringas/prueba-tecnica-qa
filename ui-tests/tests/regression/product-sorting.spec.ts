import { test, expect } from '../../fixtures/base-test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { users } from '../../data/users';

test('products can be sorted by price from low to high', async ({ page }) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);
  await loginPage.login(users.standard.username, users.standard.password);

  const productsPage = new ProductsPage(page);

  await productsPage.sortProducts('lohi');

  const priceTexts = await productsPage.productPrices.allTextContents();

  const prices = priceTexts.map((price) =>
    Number(price.replace('$', ''))
  );

  const sortedPrices = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedPrices);
});