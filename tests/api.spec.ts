import { test, expect } from '../fixtures/authFixture';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


// API Testing with Playwright
test('simple Get Request', async ({ request }) => {
  const response = await request.get('/');
  expect(response.status()).toBe(200);
  const data = await response.text();
  console.log(data);
});
