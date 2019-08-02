import { isProduction } from './utils/index';

module.exports = {
    appName: 'SAW',
    dev: !isProduction,
    production: isProduction,
    sentry: {
        dsn: 'https://844ab33636a24edc9a0c6ce285555d9f@sentry.io/1508421',
    }
}   