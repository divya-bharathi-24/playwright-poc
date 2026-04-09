import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../fixtures/testData';
import users from '../fixtures/user.json';

// test('User login test', async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await loginPage.goto();
//   await loginPage.login(testData.username, testData.password);

//   await expect(page).toHaveURL(/inventory/);
// });

// Data-driven test using multiple users from JSON file
(users as any[]).forEach(user => {
    test.describe(`Tests for ${user.username}`, () => {
        test.beforeEach(async ({ page }) => {
            await page.goto(process.env.BASE_URL!);
        });

        test(`Valid login - ${user.username}`, async ({ page }) => {
            await page.fill('#user-name', user.username);
            await page.fill('#password', user.password);
            await page.click('#login-button');
        });

        test(`Invalid login - wrong password - ${user.username}`, async ({ page }) => {
            await page.fill('#user-name', user.username);
            await page.fill('#password', 'wrong_password');
            await page.click('#login-button');
            await expect(page.locator('[data-test="error"]')).toBeVisible();
        });
    });
});