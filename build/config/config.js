/**
 * @doc 配置文件
 * @author Heanes
 * @time 2019-05-03 12:01:17 周五
 */
const utils = require('../utils/utils');
const path = require('path');
const packageConfig = require('../../package.json');

let config = {
  appName: packageConfig.name,
  appVersion: packageConfig.version,
  appAuthor: packageConfig.author,
  copyrightYear: utils.getFormatDate('yyyy'),
  generateTime: utils.getFormatDate(),

  // 构建目标
  buildTarget: 'production',

  dirs: require('./dirVars.js'),

  dev: {
    host: 'localhost',      // 地址 can be overwritten by process.env.HOST
    port: 8080,             // 端口 can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false, // 自动打开浏览器
    errorOverlay: true,     // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。
    notifyOnErrors: true,   // 有错误时是否通知(support by friendly-errors-webpack-plugin)
    poll: false             // 与监视文件相关的控制选项 https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
  },

  production: {

    // 构建分析及加速相关工具
    bundleAnalyze: false,   // 包文件空间大小分析
    speedMeasure: true,     // 编译速度分析
    happyPack: true,        // 多线程打包
    cacheLoader: true,      // 缓存
  },
};

module.exports = config;
