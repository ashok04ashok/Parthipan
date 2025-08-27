import type { ChainablePromiseElement } from 'webdriverio';

export async function waitTimout(timeout: number) {
    await browser.pause(timeout);
}

export async function waitForElement(element: ChainablePromiseElement) {
    await element.waitForDisplayed({ timeout: 60000 });
}

export async function enterText(element: ChainablePromiseElement, text: string) {
    waitForElement(element);
    await element.setValue(text);
}

export async function clickElement(element: ChainablePromiseElement) {
    waitForElement(element);
    await element.click();
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
