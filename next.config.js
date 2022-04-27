const WorkboxPlugin = require('workbox-webpack-plugin')
const path = require('path')
const publicPath = 'public'

module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Service Worker
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      const preCacheManifestIgnore = [
        /manifest\.(js|json)/,
        /\.(map|svg)$/,
      ]
      config.plugins.push(
        new WorkboxPlugin.GenerateSW({
          swDest: path.join(publicPath, 'service-worker'),
          modifyURLPrefix: {
            '.next': '_next',
            'static': '_next/static',
          },
          exclude: preCacheManifestIgnore,
          skipWaiting: true,
          clientsClaim: true,
          cleanupOutdatedCaches: true
        })
      )
    }
    return config
  }
}