import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I navigate to the login page', async ({ page }: { page: any }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

When(
  'I login with username {string} and password {string}',
  async ({ page }: { page: any }, username: string, password: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
  }
);

Then('I should see the inventory page', async ({ page }: { page: any }) => {
  await expect(page).toHaveURL(/inventory/);
});