class CartPage {

    get btnCheckout() {
        return $('#checkout'); 
    }

    async validateItemInCart(itemName) {
   
    const items = await $$('.inventory_item_name');

    let found = false;
    for (const el of items) {
        const text = await el.getText();
        if (text === itemName) {
            await expect(el).toBeDisplayed();
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error(`Item "${itemName}" not found in cart`);
    }}
    async proceedToCheckout() {
        await this.btnCheckout.click();
    }

}

module.exports = new CartPage();