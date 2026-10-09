import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly pageTitle: Locator;
  readonly products: Locator;
  readonly cartLink: Locator;
  readonly sortDropdown: Locator;
  readonly productPrices: Locator;
  readonly twitterLink: Locator;


  constructor(private page: Page) {
    this.pageTitle = page.getByText('Products', { exact: true });
    this.products = page.locator('.inventory_item');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productPrices = page.locator('.inventory_item_price');
    // Localizador usando el texto o la clase/selector del enlace de Twitter en SauceDemo
    this.twitterLink = page.locator('a[href*="twitter.com"], a[href*="x.com"]');
  }

  async addProductToCart(productName: string) {
    const product = this.products.filter({
      hasText: productName,
    });

    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async sortProducts(option: string) {
      await this.sortDropdown.selectOption(option);
  }

  async clickTwitterLink() {
    await this.twitterLink.click();
  }
}