const LoginPage = require('../pages/login.page');

const users = [
    { username: 'standard_user', password: 'secret_sauce', shouldPass: true },
    { username: 'locked_out_user', password: 'secret_sauce', shouldPass: false, error: 'Epic sadface: Sorry, this user has been locked out.' }
];

describe('UC-2 Data Driven Login', () => {
    users.forEach(user => {
        it(`should ${user.shouldPass ? 'login' : 'fail login'} for ${user.username}`, async () => {
            await LoginPage.open();
            await LoginPage.login(user.username, user.password);

            if (user.shouldPass) {
                await expect(browser).toHaveUrlContaining('inventory.html');
            } else {
                await expect(LoginPage.errorMsg).toHaveTextContaining(user.error);
            }
        });
    });
});