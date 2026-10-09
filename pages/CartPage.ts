import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(private page: Page) {
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async removeProduct(productName: string) {
    const product = this.cartItems.filter({
      hasText: productName,
    });

    await product.getByRole('button', { name: /Remove/ }).click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}