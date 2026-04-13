import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';

type MyFixtures = {
  loggedInPage: any;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }: { page: any }, use: (page: any) => Promise<void>) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await use(page);
  }
});

export { expect } from '@playwright/test';