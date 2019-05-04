const config = require('../config/config.js');

const proxyConfig = require('./devServer/proxy.dev.config.js');

let devServer = {
  contentBase: config.dirs.distDir,
  // publicPath:'http://localhost:8080/',
  disableHostCheck: true,
  host: config.dev.host,
  port: config.dev.port,
  open: config.dev.autoOpenBrowser,    // 自动打开起浏览器
  hot: true,                  // 热加载
  hotOnly: true,
  compress: true,
  inline: true,               // 可以监控js变化
  clientLogLevel: 'warning',  // 热更新时console日志简化
  quiet: true,                // 简化控制台输出信息 necessary for FriendlyErrorsPlugin
  // 代理
  proxy: proxyConfig,
  overlay: config.dev.errorOverlay ? {warnings: false, errors: true} : false, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。
  // 使用history模式后，本地刷新页面后cannot get问题解决
  historyApiFallback: {
    rewrites: [
      // 404页面
      { from: /./, to: '/404.html' }
    ]
  }
};
module.exports = devServer;
