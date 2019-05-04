const webpackConfig = {

  mode: 'production',

  entry: require('./base/entry.config.js'),

  output: require('./production/output.production.config.js'),

  module: require('./production/module.production.config.js'),

  resolve: require('./base/resolve.config.js'),

  plugins: require('./production/plugins.production.config.js'),

  externals: {},

  optimization: require('./production/optimization.production.config.js'),

  stats: require('./production/stats.production.config.js'),

  devtool: 'nosources-source-map'
};

module.exports = webpackConfig;
