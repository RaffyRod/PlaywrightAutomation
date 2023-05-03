const { test, expect } = require('@playwright/test');
const { UserProfilePage } = require('../../pages/userProfilePage');
const { LoginPage } = require('../../pages/loginPage');
const { DashboardPage } = require('../../pages/dashboardPage');
require('dotenv').config();

test.describe('User profile tests', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('./login');
    await login.login(process.env.USER_NAME, process.env.USER_PASSWORD);
  });

  test.afterEach(async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.logout();
  });

  test('Navigate to About section', async ({ page }) => {
    const userProfile = new UserProfilePage(page);
    await userProfile.aboutSection();
  });

  test('Navigate to Support section', async ({ page }) => {
    const userProfile = new UserProfilePage(page);
    await userProfile.supportSection();
  });

  test('Navigate to Change password', async ({ page }) => {
    const userProfile = new UserProfilePage(page);
    await userProfile.changePasswordSection();
    await expect(userProfile.changePasswordHeader).toHaveText([`Update Password`]);
  });

  test('Attempt to close users profile', async ({ page }) => {
    const userProfile = new UserProfilePage(page);
    const dashboard = new DashboardPage(page);
    await userProfile.userProfileSection();
    await dashboard.clickOnDashboardPage();
  });
});
