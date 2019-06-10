const webpackConfig = {

  mode: 'production',

  entry: require('./base/entry.config.js'),

  output: require('./production/output.config.js'),

  module: require('./production/module.config.js'),

  resolve: require('./base/resolve.config.js'),

  plugins: require('./production/plugins.config.js'),

  externals: {},

  optimization: require('./production/optimization.config.js'),

  stats: require('./base/stats.config.js'),

  devtool: 'nosources-source-map'
};

module.exports = webpackConfig;
