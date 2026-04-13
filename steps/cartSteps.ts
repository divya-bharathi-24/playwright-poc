import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/authFixture';

const { When, Then } = createBdd(test);

When('I add a product to cart', async ({ loggedInPage }) => {
  await loggedInPage.click('.inventory_item:first-child button');
});

Then('I should see it in cart', async ({ loggedInPage }) => {
  await loggedInPage.click('.shopping_cart_link');
  await expect(loggedInPage.locator('.inventory_item_name')).toBeVisible();
});

Then('I should verify the thank you message', async ({ loggedInPage }) => {
    await expect(loggedInPage.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
});