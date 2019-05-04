/**
 * @doc 定义插件
 * @author Heanes
 * @time 2019-05-03 13:41:50 周五
 */

const path = require('path');
const config = require('../config/config.js');

const webpack = require('webpack');

// @see
const CleanWebpackPlugin = require('clean-webpack-plugin');

// @see https://github.com/webpack-contrib/copy-webpack-plugin#options
const CopyWebpackPlugin = require('copy-webpack-plugin');

// @see https://github.com/jantimon/html-webpack-plugin#options
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const BannerPlugin = require('./plugin/BannerPlugin.config.js');

let plugins = [
  // 清理构建目录
  new CleanWebpackPlugin(),

  // vue-loader,
  new VueLoaderPlugin(),

  // 输出html
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/public/index.html',
    xhtml: true,
  }),

  // 将对象暴露给webpack
  new webpack.ProvidePlugin({
    jQuery: 'jquery'
  }),

  // copy custom static assets
  /*new CopyWebpackPlugin([
    {
      from: config.dirs.publicDirName,
      to: 'public',
      ignore: ['.*'],
      cache: true
    }
  ])*/

  // 添加banner
  BannerPlugin

];

module.exports = plugins;
