import { test, expect } from '../fixtures/authFixture';
import { Header } from '../pages/components/header';

test('E2E: Add product and verify cart', async ({ loggedInPage }) => {
  const header = new Header(loggedInPage);

  await loggedInPage.click('.inventory_item:first-child button');
  await header.goToCart();

  await expect(loggedInPage.locator('.inventory_item_name')).toBeVisible();
});