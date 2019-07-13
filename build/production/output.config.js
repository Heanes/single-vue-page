const config = require('../config/config.js');

module.exports = {
  filename: `${config.dirs.staticDirName}/js/[name].[contenthash:8].js`,
  publicPath: '/frontend/single-vue-page/',
  path: config.dirs.distDir
};
