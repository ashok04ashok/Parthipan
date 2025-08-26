import { expect } from 'chai';
import { ChainablePromiseElement } from 'webdriverio';

describe('Sample Test', () => {
    it('should open Google', async () => {
        const searchBox: ChainablePromiseElement = await $('input[name="q"]');
        await searchBox.setValue('WebdriverIO');
        await browser.pause(2000);

        const title = await browser.getTitle();
        expect(title).to.include('Google');
    });
});
