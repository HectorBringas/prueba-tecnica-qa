import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';         // Ajusta la ruta si es necesario
import { ProductsPage } from '../pages/ProductsPage';   // Ajusta la ruta
import { CartPage } from '../pages/CartPage';           // Ajusta la ruta
import { CheckoutPage } from '../pages/CheckoutPage';   // Ajusta la ruta
import { users } from '../data/users';                  // Tu archivo de datos de usuario

// 1. Definimos el tipo de todas nuestras páginas y fixtures personalizados
type MyFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  loggedProductsPage: ProductsPage; // Fixture inteligente que ya hace el login por ti
};

// 2. Extendemos el test base de Playwright
export const test = base.extend<MyFixtures>({
  
  // Fixture para la página de login (sin loguear, ideal para pruebas negativas)
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  // Fixture para la página de productos (sin loguear)
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  // Fixture para el carrito
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  // Fixture para el checkout
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  // ✨ FIXTURE INTELIGENTE: Navega a Saucedemo y hace login con el usuario 'standard' automáticamente
  loggedProductsPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await page.goto('/'); // Si en tu playwright.config.ts configuras el baseURL, solo pones '/'
    
    // Usamos los datos de tu archivo users.ts
    await loginPage.login(users.standard.username, users.standard.password);

    // Le entregamos la página de productos lista para usarse en el test
    await use(productsPage);
  },
});

// Re-exportamos 'expect' para usarlo siempre junto a nuestro test personalizado
export { expect } from '@playwright/test';