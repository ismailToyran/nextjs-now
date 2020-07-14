const withOffline = require('next-offline');

const isProd = process.env.NODE_ENV === 'production';
const devDomainURL = `http://localhost:${process.env.PORT || 3000}`;

const nextConfig = {
  publicRuntimeConfig: {
    DOMAIN_URL: isProd ? process.env.DOMAIN_URL : devDomainURL,
    API_URL: isProd ? process.env.API_URL : `${devDomainURL}/web-api`,
    TARGET_API_URL: isProd ? process.env.TARGET_API_URL : devDomainURL,
    PORT: process.env.PORT,
    RECAPTCHA_S2_KEY: process.env.RECAPTCHA_S2_KEY,
    GOOGLE_MAP_EMBED: process.env.GOOGLE_MAP_EMBED,
    GTM_ID: process.env.GTM_ID
  },
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: false,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = withOffline(nextConfig);
