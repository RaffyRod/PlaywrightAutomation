const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { DashboardPage } = require('../../pages/dashboardPage');
require('dotenv').config();

test.describe('Dashboard tests', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('./login');
    await login.login(process.env.USER_NAME, process.env.USER_PASSWORD);
  });

  test.afterEach(async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.logout();
  });

  test('Verify Time at Work section title', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.timeAtWork();
    await expect(dashboard.timeAtWorkTitle).toHaveText(`Time at Work`);
  });

  test('Verify My Actions section title', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.myActions();
    await expect(dashboard.myActionsTitle).toHaveText(`My Actions`);
  });

  test('Verify Quick Launch section title', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.quickLaunch();
    await expect(dashboard.quickLaunchTitle).toHaveText(`Quick Launch`);
  });

  test('Verify Buzz Latest Posts title', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.buzzLatestPost();
    await expect(dashboard.BuzzLatestPostTitle).toHaveText(`Buzz Latest Posts`);
  });

  test('Verify Employees on Leave Today section title', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.employeeOnLeaveToday();
    await expect(dashboard.employeeOnLeaveTodayTittle).toHaveText(`Employees on Leave Today`);
  });

  test('Verify Employee Distribution by Sub Unit section title', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.employeeDistributionBySubUnit();
    await expect(dashboard.employeeDistributionBySubUnitTitle).toHaveText(`Employee Distribution by Sub Unit`);
  });

  test('Verify Employee Distribution by Location section title', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.employeeDistributionByLocation();
    await expect(dashboard.employeeDistributionByLocationTitle).toHaveText(`Employee Distribution by Location`);
  });
});
