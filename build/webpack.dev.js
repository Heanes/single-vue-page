const webpackConfig = {

  mode: 'development',

  entry: require('./base/entry.config.js'),

  output: require('./dev/output.dev.config.js'),

  module: require('./dev/module.dev.config.js'),

  resolve: require('./base/resolve.config.js'),

  plugins: require('./dev/plugins.dev.config.js'),

  externals: {},

  devServer: require('./dev/devServer.dev.config.js'),

  optimization: require('./dev/optimization.dev.config.js'),

  stats: require('./dev/stats.dev.config.js'),

  devtool: 'eval-source-map'
};

const portfinder = require('portfinder');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const config = require('./config/config.js');
const buildUtils = require('./utils/buildUtils.js');
const packageConfig = require('../package.json');

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  // 自动寻找新的端口
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      // add port to devServer config
      webpackConfig.devServer.port = port;

      // Add FriendlyErrorsPlugin
      webpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${webpackConfig.devServer.host}:${port}`]
        },
        onErrors: config.dev.notifyOnErrors
          ? buildUtils.createNotifierCallback(packageConfig)
          : undefined
      }));

      resolve(webpackConfig);
    }
  })
});
