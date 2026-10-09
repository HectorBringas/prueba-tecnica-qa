import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;
  readonly errorMessage: Locator;
  readonly finishButton: Locator;
  readonly confirmationMessage: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;

  constructor(private page: Page) {
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.postalCode = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.errorMessage = page.locator('[data-test="error"]');
    this.subtotalLabel = page.locator('.summary_subtotal_label');
    this.taxLabel = page.locator('.summary_tax_label');
    this.totalLabel = page.locator('.summary_total_label');
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.confirmationMessage = page.getByText(
      'Thank you for your order!',
      { exact: true }
    );
  }

  async fillCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}