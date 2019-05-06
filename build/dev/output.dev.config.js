/**
 * @doc 定义输出
 * @author Heanes
 * @time 2019-05-03 13:33:10 周五
 */

const config = require('../config/config.js');

module.exports = {
  filename: `[name].js`,
  publicPath: '/',
  path: `${config.dirs.distDir}/${config.dirs.staticDirName}/js`
};
