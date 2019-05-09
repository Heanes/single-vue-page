const config = require('../config/config.js');

const pluginsConfig = require('../base/plugins.config.js');

const webpack = require('webpack');
// @see https://github.com/postcss/autoprefixer#options
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

pluginsConfig.push(
  // 添加前缀
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer()
      ]
    }
  }),
  // 压缩css
  new MiniCssExtractPlugin({
    filename: `${config.dirs.staticDirName}/css/[name].[contenthash:8].css`
  })
);

module.exports = pluginsConfig;
