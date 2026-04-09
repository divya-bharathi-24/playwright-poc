import { Page, Locator } from '@playwright/test';
import { Header } from './components/header';

// export class HomePage {
//   readonly page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async addProductToCart(productName: string): Promise<void> {
//     await this.page.locator(`text=${productName}`).click();
//     await this.page.locator('button:has-text("Add to cart")').click();
//   }

//   async goToCart(): Promise<void> {
//     await this.page.locator('.shopping_cart_link').click();
//   }
// }

export class HomePage {
  readonly page: Page;
  readonly header: Header;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
  }
}