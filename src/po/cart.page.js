class CartPage {

    get btnCheckout() {
        return $('#checkout'); 
    }

    async validateItemInCart(itemName) {
         const item = await $(`//div[@class="inventory_item_name" and text()="${itemName}"]`);
        await expect(item).toBeDisplayed();
    }

    async proceedToCheckout() {
        await this.btnCheckout.click();
    }

}

module.exports = new CartPage();