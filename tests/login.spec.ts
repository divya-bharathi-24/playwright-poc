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

(users as any[]).forEach(user => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test(`Valid login - ${user.username}`, async ({ page }) => {
        await page.fill('#user-name', user.username);
        await page.fill('#password', user.password);
        await page.click('#login-button');
    });

    test('Invalid login - wrong password', async ({ page }) => {
        await page.fill('#user-name', user.username);
        await page.fill('#password', 'wrong_password');
        await page.click('#login-button');
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

});