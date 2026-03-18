const LoginPage = require('../../po/login.page');
const InventoryPage = require('../../po/inventory.page');
const CartPage = require('../../po/cart.page');
const CheckoutPage = require('../../po/checkout.page');

describe('UC-1 Checkout Flow', () => {
    it('should complete checkout successfully', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        const productName = 'Sauce Labs Backpack';
        await InventoryPage.addProductToCart(productName);
        await InventoryPage.goToCart();

        await CartPage.validateItemInCart(productName);
        await CartPage.proceedToCheckout();

        await CheckoutPage.fillInformation('John', 'Doe', '12345');
        await CheckoutPage.finishCheckout();
        await CheckoutPage.validateSuccessMessage();
    });
});