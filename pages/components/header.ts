import { Page, Locator } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productName: string): Promise<void> {
    await this.page.locator(`text=${productName}`).click();
    await this.page.locator('button:has-text("Add to cart")').click();
  }
  
  async goToCart(): Promise<void> {
    await this.cartIcon.click();
  }
}