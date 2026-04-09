import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductInCart(productName: string): Promise<void> {
    const product = this.page.locator(`text=${productName}`);
    await expect(product).toBeVisible();
  }
}