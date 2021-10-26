const WorkboxPlugin = require('workbox-webpack-plugin')
const path = require('path')
const publicPath = 'public'

module.exports = {
  webpack: (config, { dev }) => {
    if (!dev) {
      // Service Worker
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      // https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack#adding_runtime_caching
      config.plugins.push(
        new WorkboxPlugin.GenerateSW({
          swDest: path.join(publicPath, 'service-worker'),
          modifyUrlPrefix: {
            '.next': '/_next',
          },
          skipWaiting: true,
          clientsClaim: true,
          cleanupOutdatedCaches: true,
          exclude: [
            'react-loadable-manifest.json',
            'build-manifest.json'
          ],
        })
      )
    }
    return config
  }
}