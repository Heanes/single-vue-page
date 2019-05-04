let optimization = require('../base/optimization.config.js');

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const TerserJSPlugin = require('terser-webpack-plugin');

// @see https://webpack.js.org/plugins/mini-css-extract-plugin#minimizing-for-production
// and https://github.com/NMFR/optimize-css-assets-webpack-plugin
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

optimization = {
  ...optimization,
  minimizer: [
    new TerserJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin()
  ]
};

module.exports = optimization;
