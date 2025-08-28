export const config = {
    specs: ['./src/tests/**/*.ts'],
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: false, disableWebdriverScreenshotsReporting: false }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    before: function () {
        require('ts-node').register({ files: true });
    },
    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
};