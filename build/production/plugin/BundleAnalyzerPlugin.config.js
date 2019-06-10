/**
 * @doc 构建 文件大小分析
 * @author Heanes
 * @time 2019-05-03 16:31:30 周五
 */

// @see https://github.com/webpack-contrib/webpack-bundle-analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: 'server',
  analyzerHost: '127.0.0.1',
  analyzerPort: 8888,
  reportFilename: 'report.html',
  defaultSizes: 'parsed',
  openAnalyzer: true,
  generateStatsFile: false,
  statsFilename: 'stats.json',
  logLevel: 'info'
});

module.exports = bundleAnalyzerPlugin;
