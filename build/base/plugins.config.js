/**
 * @doc 定义插件
 * @author Heanes
 * @time 2019-05-03 13:41:50 周五
 */

const webpack = require('webpack');

// @see https://github.com/jantimon/html-webpack-plugin#options
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const BannerPlugin = require('./plugin/BannerPlugin.config.js');

const plugins = [

  // vue-loader,
  new VueLoaderPlugin(),

  // 输出html
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/public/index.html',
    xhtml: true
  }),

  // 将对象暴露给webpack
  new webpack.ProvidePlugin({
    jQuery: 'jquery'
  }),

  // 添加banner
  BannerPlugin

];

module.exports = plugins;
