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
          modifyURLPrefix: {
            '.next': '/_next',
            'static/': '_next/static/',
          },
          exclude: [
            /\.(map|png|jpg|jpeg|svg|webp|xml)$/,
            'react-loadable-manifest.json',
            'build-manifest.json',
            '_buildManifest.js'
          ],
          skipWaiting: true,
          clientsClaim: true,
          cleanupOutdatedCaches: true
        })
      )
    }
    return config
  }
}