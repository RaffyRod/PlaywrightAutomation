const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { DashboardPage } = require('../../pages/dashboardPage');
import { randEmail, randAbbreviation } from '@ngneat/falso';
require('dotenv').config();

const fakeEmail = randEmail();
const fakePassword = randAbbreviation();

test.describe('Login test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./login');
  });

  test('Successful login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(process.env.USER_NAME, process.env.USER_PASSWORD);
  });
  test('Attempt to Login with empty fields', async ({ page }) => {
    const login = new LoginPage(page);
    await login.emptyFieldsAlert();
  });

  test('Attempt to Login with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(fakeEmail, fakePassword);
    await expect(login.invalidCredentialsAlert).toBeVisible();
    await expect(login.invalidCredentialsAlert).toHaveText('Invalid credentials');
  });

  test('Attempt to Login without password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.invalidLoginMissingPassword();
  });

  test('Attempt to Login without email', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(' ', process.env.USER_PASSWORD);
  });
  test('Log out', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(process.env.USER_NAME, process.env.USER_PASSWORD);
    const dashboard = new DashboardPage(page);
    await dashboard.logout();
  });
});
