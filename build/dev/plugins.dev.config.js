/**
 * @doc 定义插件
 * @author Heanes
 * @time 2019-05-03 16:35:11 周五
 */

const webpack = require('webpack');

const pluginsConfig = require('../base/plugins.config.js');

pluginsConfig.push(

  // 启用模块热替换(Enable Hot Module Replacement - HMR)
  new webpack.HotModuleReplacementPlugin(),

  // 在输出阶段时，遇到编译错误跳过
  new webpack.NoEmitOnErrorsPlugin()
);

module.exports = pluginsConfig;
