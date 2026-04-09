import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { testData } from '../fixtures/testData';
import { Header } from '../pages/components/header';

// test('Add product to cart', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const homePage = new HomePage(page);
//   const cartPage = new CartPage(page);

//   await loginPage.goto();
//   await loginPage.login(testData.username, testData.password);

// //   await homePage.addProductToCart(testData.product);
// //   await homePage.goToCart();
//     await homePage.header.goToCart();

//   await cartPage.verifyProductInCart(testData.product);
// });

test('Go to cart using header', async ({ page }) => {

  // create object of component
  const header = new Header(page);

  // login (for now directly)
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // use reusable method
  await header.goToCart();
});