module.exports = {
  // 代理api接口
  '/api/': {
    target: 'http://localhost:10086',
    pathRewrite: {'^/api/': '/'},
    changeOrigin: true
  }
};
