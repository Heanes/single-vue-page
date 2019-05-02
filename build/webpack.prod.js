const VueLoaderPlugin = require('vue-loader/lib/plugin');

const path = require('path');

const webpackConfig = {
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: 'js/[name].[hash:8].js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ],
        exclude: /node_modules|vendor/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },

  resolve: {},

  plugins: [
    new VueLoaderPlugin()
  ],

  externals: {},

  devServer: {
    hot: true,                  // 热加载
  },

  optimization: {},

  stats: {},

  mode: 'production',

  devtool: 'eval-source-map'
};

module.exports = webpackConfig;
