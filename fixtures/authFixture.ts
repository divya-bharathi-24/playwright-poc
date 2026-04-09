import { test as base } from '@playwright/test';

// define custom fixture type
type MyFixtures = {
  loggedInPage: any;
};

// extend Playwright test
export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }: { page: any }, use: (page: any) => Promise<void>) => {
    
    // go to site
    await page.goto('/');

    // login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // give logged-in page to test
    await use(page);
  }
});

export { expect } from '@playwright/test';