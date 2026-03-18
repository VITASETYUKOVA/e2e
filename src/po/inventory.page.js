class InventoryPage {

    async addProductToCart(productName) {
             const items = await $$('.inventory_item');

        for (const item of items) {
            const nameEl = await item.$('.inventory_item_name');
            const nameText = await nameEl.getText();
            if (nameText === productName) {
                const addButton = await item.$('button'); 
                await addButton.click();
                return;
            }
        }

        throw new Error(`Product "${productName}" not found`);
    }

    async goToCart() {
        await $('.shopping_cart_link').click();
    }
}

module.exports = new InventoryPage();