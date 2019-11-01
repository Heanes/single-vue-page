/**
 * @doc 生成banner
 * @author Heanes
 * @time 2019-05-03 16:31:00 周五
 */

const webpack = require('webpack');

const config = require('../../config/config.js');

// 生成文件添加自定义banner
// @see https://webpack.js.org/plugins/banner-plugin/
const BannerPluginConfig = new webpack.BannerPlugin({
  banner: () => {
    return `${config.appName} ${config.appVersion}\n` +
      `@author: ${config.appAuthor}\n` +
      `@time: ${config.generateTime}\n` +
      `(c) 2014-${config.copyrightYear} ${config.appAuthor}\n` +
      'Released under the MIT License.';
  },
  exclude: [
    /vendors.*/     // 排除vendors
  ]
});

module.exports = BannerPluginConfig;
