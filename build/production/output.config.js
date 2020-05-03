const config = require('../config/config.js');

module.exports = {
  filename: `${config.dirVars.staticDirName}/js/[name].[contenthash:8].js`,
  publicPath: '/frontend/single-vue-page/',
  path: config.dirVars.distDir
};
