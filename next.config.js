/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const withImage = require('next-images')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
// const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withProgressBar = require('next-progressbar')
const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" });
const withSize = require('next-size')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}

module.exports = withPlugins([
  [withBundleAnalyzer,{
    // analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    // analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    // bundleAnalyzerConfig: {
    //   server: {
    //     analyzerMode: 'static',
    //     reportFilename: '../bundles/server.html'
    //   },
    //   browser: {
    //     analyzerMode: 'static',
    //     reportFilename: '../bundles/client.html'
    //   }
    // }
  }],
  [withSize,{}],
  [withProgressBar,{
    progressBar: {
      profile: true
    }
    // rest of your next config
  }],
  [optimizedImages, {}],
  [withLess, {
    cssModules: true,
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
      cssModules: true
    }
  }]
])