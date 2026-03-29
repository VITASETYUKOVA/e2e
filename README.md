# WDIO SauceDemo Tests

## Setup
1. Install dependencies: `npm install`
2. Run tests: `npm run test`
3. Generate Allure report:
   ```bash
   npm run allure:generate
   npm run allure:open

   This project contains **WebDriverIO end-to-end tests** for the [Sauce Demo](https://www.saucedemo.com/) website.  
Tests are implemented using **Page Object Model (POM)** and a **data-driven approach**.

---

## Full Description of the Task

The tests cover two main scenarios:

### UC-1: Checkout Flow
1. Login with `standard_user`.  
2. Add a specific product to the cart (parametrized, e.g., "Sauce Labs Backpack").  
3. Go to the Cart and validate that the item is present.  
4. Proceed to Checkout.  
5. Fill the information form (First Name, Last Name, Zip).  
6. Finish checkout and validate the success message:  
   **"Thank you for your order!"**

### UC-2: Data-Driven Login
- Test login with multiple users using a data provider:  
  - **User:** `standard_user` → **Expected Result:** Login succeeds  
  - **User:** `locked_out_user` → **Expected Result:** Login fails with error message:  
    `"Epic sadface: Sorry, this user has been locked out."`  

---
