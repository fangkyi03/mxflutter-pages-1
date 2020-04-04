/* eslint-disable */
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const lessToJS = require('less-vars-to-js')
const withImage = require('next-images')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withProgressBar = require('next-progressbar')
const withInferno = require('next-inferno')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const withPreact = require('@zeit/next-preact')
const webpack = require('webpack');
const withLessExcludeAntd = require("./next-less.config.js")
const CompressionPlugin = require('compression-webpack-plugin')
const withSize = require('next-size')
const fs = require('fs')
const path = require('path')
const getPageFile = require('./utils/getPageFile')
const withOffline = require('next-offline')
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}
if (typeof require !== 'undefined') {
  // eslint-disable-next-line
  require.extensions['.css'] = file => { }
}

const routerObj = {}
getPageFile.forEach((e) => {
  routerObj['/' + e] = { page: '/' + e }
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  [withBundleAnalyzer, {
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
    }
  }],
  [CleanWebpackPlugin, ["out", '.next']],
  [withSize, {}],
  [withProgressBar, {
    progressBar: {
      profile: true
    }
  }],
  [optimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: false,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 50,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: {
      quality: [0.3, 0.5]
    },
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
  [withCSS],
  [withLessExcludeAntd, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[path]__[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
      cssModules: true
    }
  }],
  // [withOffline]
  // [withPreact,{}],
], {
    exportTrailingSlash: true,
    assetPrefix: isProd ? '/mxflutter-pages/' : '',
  exportPathMap: function () {
    return routerObj;
  },
  webpack(config, options) {
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: true
      })
    )
    if (config.mode !== 'development') {
      config.output = { ...config.output, globalObject: 'this', }
      // config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
      config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/))
      config.plugins.push(new CleanWebpackPlugin(['out', '.next']))
      config.plugins.push(new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        algorithm: 'gzip',
        threshold: 8192,
        compressionOptions: { level: 9 },
      }))
    }
    return config
  },
})