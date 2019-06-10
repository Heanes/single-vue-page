const config = require('../config/config.js');

let modulesConfig = require('../base/module.config.js');

// @see https://github.com/webpack-contrib/mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

modulesConfig.rules.push(
  // sass-scss 处理
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '/'
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        }
      },
      // @see https://github.com/postcss/postcss-loader
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: 'build/config/'

          },
          sourceMap: true,
        }
      },
      'sass-loader'
    ],
    include: config.dirs.srcRootDir,
    exclude: /node_modules|vendor/
  },
  {
    enforce: 'pre',
    test: /\.(vue|([jt])sx?)$/,
    exclude: [
      /node_modules/
    ],
    use: [
      /* config.module.rule('eslint').use('eslint-loader') */
      {
        loader: 'eslint-loader',
        options: {
          extensions: [
            '.js',
            '.jsx',
            '.vue'
          ],
          cache: true,
          emitWarning: true,
          emitError: false
        }
      }
    ]
  }
);

module.exports = modulesConfig;
