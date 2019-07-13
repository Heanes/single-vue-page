/**
 * @doc 站点配置文件
 * @author Heanes
 * @time 2019-04-13 21:21:40 周六
 */
export default {
  // api相关配置
  api: {
    // 环境
    env: 'mock',
    // api接口地址
    apiServerUrls: {
      // mock地址
      // mock: 'http://mock.example.com',
      mock: 'http://localhost:10086',
      // 开发环境
      dev: '/api/',
      // test地址
      test: 'http://test.example.com',
      // 线上环境
      production: '/api/'
    },
    // 接口调用超时时间
    timeout: 5000,
    // 返回api接口地址
    getApiServerUrl (){
      let url = this.apiServerUrls[this.env];
      return url || undefined;
    }
  }
}
