const LoginPage = require('../../po/login.page');
const InventoryPage = require('../../po/inventory.page');
const CartPage = require('../../po/cart.page');
const CheckoutPage = require('../../po/checkout.page');

describe('UC-1 Checkout Flow', () => {

    it('should complete checkout successfully', async () => {

        // Given: the login page is open
        await LoginPage.open();

        // When: the user logs in with standard_user
        await LoginPage.login('standard_user', 'secret_sauce');

        // And: the user adds "Sauce Labs Backpack" to the cart
        const productName = 'Sauce Labs Backpack';
        await InventoryPage.addProductToCart(productName);

        // And: navigates to the cart
        await InventoryPage.goToCart();

        // Then: the product is displayed in the cart
        await CartPage.validateItemInCart(productName);

        // When: the user proceeds to checkout
        await CartPage.proceedToCheckout();

        // And: fills in checkout information
        await CheckoutPage.fillInformation('John', 'Doe', '12345');

        // And: finishes checkout
        await CheckoutPage.finishCheckout();

        // Then: a success message is displayed
        await CheckoutPage.validateSuccessMessage();

    });

});