class CheckoutPage {

    get inputFirstName() { return $('[data-test="firstName"]'); }
    get inputLastName() { return $('[data-test="lastName"]'); }
    get inputZip() { return $('[data-test="postalCode"]'); }

    get btnContinue() { return $('[data-test="continue"]'); } 
    get btnFinish() { return $('[data-test="finish"]'); } 
    get successMsg() { return $('.complete-header'); } 

    async fillInformation(first, last, zip) {
        await this.inputFirstName.setValue(first);
        await this.inputLastName.setValue(last);
        await this.inputZip.setValue(zip);
        await this.btnContinue.click();
    }

    async finishCheckout() {
        await this.btnFinish.click();
    }

    async validateSuccessMessage() {
        await this.successMsg.waitForDisplayed({ timeout: 5000 });
        await expect(this.successMsg).toHaveText('Thank you for your order!');
    }

}

module.exports = new CheckoutPage();