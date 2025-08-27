import { waitTimout } from '../utils/actions';

export default class BasePage {
  async launchUrl(url: string) {
    await browser.maximizeWindow();
    waitTimout(2000);
    await browser.url(url);
  }

}