export const config = {
    runner: 'local',
    specs: ['./src/tests/**/*.ts'],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',  // works with DevTools
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.flipkart.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['devtools'],  // <-- Use devtools instead of selenium or chromedriver

    framework: 'mocha',
    // reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    reporters: [
    'spec',
    ['allure', {
        outputDir: 'allure-results', // folder where results are saved
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]
],
 afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            // await browser.takeScreenshot(); // automatically added to Allure if disableWebdriverScreenshotsReporting=false
        }
    }
};
