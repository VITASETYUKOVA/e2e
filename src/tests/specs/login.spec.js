const assert = require('assert');     
const LoginPage = require('../../po/login.page');

const users = [
    { username: 'standard_user', password: 'secret_sauce', shouldPass: true },
    { username: 'locked_out_user', password: 'secret_sauce', shouldPass: false, error: 'Epic sadface: Sorry, this user has been locked out.' }
];

describe('UC-2 Data Driven Login', () => {

    users.forEach(user => {

        it(`should ${user.shouldPass ? 'login' : 'fail login'} for ${user.username}`, async () => {

            // Given: the login page is open
            await LoginPage.open();

            // When: the user enters username and password and clicks login
            await LoginPage.login(user.username, user.password);

            // Then: verify the result
            if (user.shouldPass) {
                const url = await browser.getUrl(); 
                assert.ok(url.includes('inventory.html'), 'User was not redirected to the inventory page');
            } else {
                const text = await LoginPage.errorMsg.getText(); 
                assert.ok(text.includes(user.error), 'Error message is incorrect');
            }

        });

    });

});