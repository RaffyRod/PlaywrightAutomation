const { expect } = require('@playwright/test');
import { randEmail, randAbbreviation } from '@ngneat/falso';

const fakeEmail = randEmail();
const fakePassword = randAbbreviation();

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginHeader = page.getByText('Login');
    this.usernameDetails = page.getByText('Username : AdminPassword : admin123');
    this.userNameInput = page.locator('[name=username]');
    this.singleRequiredWarning = page.getByText('Required').first();
    this.passwordInput = page.locator('[type=password]');
    this.doubleRequiredWarning = page.getByText('Required').nth(1);
    this.loginButton = page.getByRole('button');
    this.forgotPasswordButton = page.getByText('Forgot your password?');
    this.invalidCredentialsAlert = page.getByRole('alert');
  }

  async emptyFieldsAlert() {
    await this.loginButton.click();
    await expect(this.singleRequiredWarning).toBeVisible();
    await expect(this.doubleRequiredWarning).toBeVisible();
  }

  async invalidLoginMissingPassword() {
    await this.userNameInput.type(fakeEmail);
    await this.loginButton.click();
    await expect(this.singleRequiredWarning).toBeVisible();
  }

  async invalidLoginMissingEmail() {
    await this.passwordInput.type(fakePassword);
    await this.loginButton.click();
    await expect(this.singleRequiredWarning).toBeVisible();
  }

  async login(userName, password) {
    await this.userNameInput.type(userName);
    await this.passwordInput.type(password);

    await this.loginButton.click();
  }
};
