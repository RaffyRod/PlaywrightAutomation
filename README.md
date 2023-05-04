# Senior Automation Challenge (Playwright Version)

The purpose of this project is to create an automation framework for UI and API testing using best practices, applied for the following modules using a test plan.

### UI testing

The framework contains the automation of some modules from the website [demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

| Module       | Number of Scenarios | Status             |
| ------------ | ------------------- | ------------------ |
| Login        | 5                   | :white_check_mark: |
| User profile | 5                   | :white_check_mark: |
| Dashboard    | 5                   | :white_check_mark: |

## Test Cases automated on each module

#### Login Page

- Login successful.
- Attempt to Login with empty fields.
- Attempt to Login with invalid credentials.
- Attempt to Login without password.
- Attempt to Login without email.

#### User profile section

- Navigate to About section.
- Navigate to Support section.
- Navigate to Change password page.
- Attempt to close users profile.

#### Dashboard page

- Verify Time at Work section title.
- Verify My Actions section title.
- Verify Quick Launch section title.
- Verify Employees on Leave Today section title.
- Verify Buzz Latest Posts title.
- Verify Employee Distribution by Sub Unit section title.
- Verify Employee Distribution by Location section title.

### API testing

For the API testing it was required to be automated 3 request to the Marvel Comics API [Marvel Developer Site](https://developer.marvel.com).

1. Automate that all the characters can be fetch.

2. Automate that all the comics for Spiderman can be fetch.

3. Automate that all characters for the X-Man comic can be fetch

## Tech Stack

- [Javascript.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Nodejs.](https://nodejs.org/en/about/)
- [Playwright](https://playwright.dev/)
- [ngneat/falso](https://github.com/ngneat/falso)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Sonar Cloud](https://www.sonarsource.com/products/sonarcloud/)
- [dotEnv](https://www.npmjs.com/package/dotenv)
- [Prettier](https://prettier.io/)
- [husky](https://github.com/typicode/husky)
- [Lint-staged](https://github.com/okonet/lint-staged)

## Before Installing

- Node.js must be installed in order to run the project.

- Go to [Marvel's developer website](https://developer.marvel.com) and create an account to get a public and a private API key `(this is required for API testing)`.

## Installation

- Clone the repository from Github.

```bash
  git clone https://github.com/elraffy/Senior-QA-Challenge-Raffy-Rodriguez.git
```

- Install all packages and dependencies for the project.

```bash
  npm install
```

- Configure the credentials for UI and API:

#### UI testing configuration

Go to the root of project and locate the `.env` file, open open it and add the credentials for the website.

```bash
  USER_NAME = user_name
  USER_PASSWORD = password
```

#### API testing configuration

After creating the Marvel API account, go to the website [MD5 Hash Generator](https://www.md5hashgenerator.com/) to create a Hash using the credentials gotten from the Marvel's API account.

Then go to the root of project and locate the `.env` file, open open it and add the credentials for the website.
replacing the values with the ones gotten from [Marvel's developer website](https://developer.marvel.com) after creating the account.

```bash
     PUBLIC_KEY = my_PublicKey
     HASH = hashFromMD5
```

##### Note

- Other requirements like timestamp will be included on the `.env` file.

#### Execution

- Run the tests using the cypress Test Runner by typing on the terminal the command:

```bash
   npm run test
```

- Run the tests on debug mode by typing on the terminal the command:

```bash
   npm run test-debug
```

This will automatically run all test and generate the report at the end of execution.

## Considerations

- It was used the POM design pattern combined with Javascript and cypress best practices.

- All The API successfull requests for positive scenarios were also validated using the [postman](https://www.postman.com/) tool and the collection will be included in the project just in case that is required to validate some information.

- To test with postman or other third party, will be required to get a hash that can be generated by going to [Hash generator](https://www.md5hashgenerator.com/) and doing the following steps:

  1.  Go to the [Hash generator](https://www.md5hashgenerator.com/) website.

  2.  On the text-area field paste the API keys preceded by the number `1` that will works as a `Timestamp`.

  ```bash
   ` 1 + Marvel's API privateKey + Marvel's API publicKey`
  ```

  3.  Click the generate button to get the hash required for API testing.

## Contributing

Contributions are always welcome!

- Feel free of fork this project, create your own branch, commit your changes and do your pull request.

## Acknowledgements

- [Playwright](https://playwright.dev/)
- [NPMjs.com](https://www.npmjs.com/)
- [GitHub Actions documentation](https://docs.github.com/en/actions)

## 🔗 Links

[![Profile](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/RaffyRod)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raffy-a-rodriguez-400552110/)
