import { test, expect } from '../../fixtures/base-test';
import { LoginPage } from '../../pages/LoginPage';

// 1. Define tu lista de combinaciones inválidas
const invalidLogins = [
  { username: 'locked_out_user', password: 'secret_password', description: 'usuario bloqueado' },
  { username: 'invalid_user', password: 'secret_sauce', description: 'usuario inexistente' },
  { username: 'standard_user', password: 'wrong_password', description: 'contraseña incorrecta' },
];

test.describe('Pruebas de login inválido en SauceDemo', () => {
  
  // 2. Itera sobre cada combinación usando test.each
  for (const data of invalidLogins) {
    test(`Debería mostrar error al intentar iniciar sesión con ${data.description}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await page.goto('/');
      await loginPage.login(data.username, data.password);

      // 3. Valida que el mensaje de error aparezca
      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toContainText('Epic sadface');
    });
  }
});