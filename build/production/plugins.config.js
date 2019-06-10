const config = require('../config/config.js');

const pluginsConfig = require('../base/plugins.config.js');

const webpack = require('webpack');

// @see https://github.com/johnagan/clean-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// @see https://github.com/postcss/autoprefixer#options
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// @see https://github.com/webpack-contrib/copy-webpack-plugin#options
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const bundleAnalyzerPlugin = require('./plugin/BundleAnalyzerPlugin.config.js');

pluginsConfig.push(

  // 清理构建目录
  new CleanWebpackPlugin(),

  // 添加前缀
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer()
      ]
    }
  }),
  // 压缩css
  new MiniCssExtractPlugin({
    filename: `${config.dirs.staticDirName}/css/[name].[contenthash:8].css`
  }),

  bundleAnalyzerPlugin
);

module.exports = pluginsConfig;
