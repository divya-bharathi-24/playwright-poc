import { test, expect } from '../fixtures/authFixture';
import { Header } from '../pages/components/header';

test('End-to-End: Add product and verify cart', async ({ loggedInPage }) => {
  const header = new Header(loggedInPage);

  // Add product
  await loggedInPage.click('.inventory_item:first-child button');

  // Go to cart
  await header.goToCart();

  // Validate product
  const product = loggedInPage.locator('.inventory_item_name');
  await expect(product).toBeVisible();
});