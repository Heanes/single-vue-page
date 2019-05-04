const config = require('../config/config.js');

const pluginsConfig = require('../base/plugins.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

pluginsConfig.push(
  // 压缩css
  new MiniCssExtractPlugin({
    filename: `${config.dirs.staticDirName}/css/[name].[contenthash:8].css`
  })
);

module.exports = pluginsConfig;
