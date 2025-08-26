export const config = {
    specs: ['./src/tests/**/*.ts'],
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
};