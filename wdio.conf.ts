export const config = {
    specs: ['./src/tests/**/*.ts'],
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
     mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};