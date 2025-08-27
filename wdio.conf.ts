export const config = {
    specs: ['./src/tests/**/*.ts'],
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
     mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
     reporters: [
        ['allure', {
            outputDir: 'reports/allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    before: function () {
        const chai = require('chai');
        global.expect = chai.expect;
    },
    afterTest: async function(test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};