import { waitForElement } from "../utils/actions";

class CartPage {
    get cartItem() { return $('._1AtVbE'); }
    get buyNowBtn() { return $('//button[text()="Buy Now"]'); }

    async buyNow() {
        const buyNowButton = await $('//button[contains(text(), "Buy Now")]');
await buyNowButton.scrollIntoView();
await buyNowButton.waitForClickable({ timeout: 5000 });
await buyNowButton.click();

        // waitForElement(this.buyNowBtn);
        // await this.buyNowBtn.click();
    }
}

export default new CartPage();
