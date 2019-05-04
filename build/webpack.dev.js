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

module.exports = webpackConfig;
