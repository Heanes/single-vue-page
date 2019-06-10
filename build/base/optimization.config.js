let optimization = {
  runtimeChunk: {
    name: 'manifest'    // 公共基础资源包
  },
  splitChunks: {
    cacheGroups: {
      // 第三方npm管理的包
      vendors: {
        test: /[\\/]node_modules[\\/]|[\\/]public/,
        name: 'vendors',
        chunks: 'all'
      },
      // 开发的js文件
      commons: {// ‘src/js’ 下的js文件
        chunks: 'initial',
        test: /[\\/]src|[\\/]public/, // 也可以只文件/[\\/]src[\\/]js[\\/].*\.js/,
        name: 'common', // 生成文件名，依据output规则
        minChunks: 2,
        maxInitialRequests: 5,
        minSize: 0,
        priority: 1
      }
    }
  }
};
module.exports = optimization;
