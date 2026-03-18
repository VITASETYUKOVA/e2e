# WDIO SauceDemo Tests

## Setup
1. Install dependencies: `npm install`
2. Run tests: `npx wdio run wdio.conf.js`
3. Generate Allure report:
   ```bash
   allure generate allure-results --clean -o allure-report
   allure open allure-report