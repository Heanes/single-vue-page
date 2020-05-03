/**
 * @doc 站点配置文件
 * @author Heanes
 * @time 2019-04-13 21:21:40 周六
 */
import environmentUtil from '@/utils/compile/environment.js';

const config = {
  env: environmentUtil.getEnvByBuildEnv(),
  getEnv (){
    return this.env;
  },
  // api相关配置
  api: {
    // api接口地址
    apiServerUrls: {
      // mock地址
      mock: 'https://mock.dev.heanes.com/api',
      // 开发环境
      dev: 'https://mock.dev.heanes.com/api/',
      // test地址
      test: 'https://mock.test.heanes.com/api',
      stage: 'https://mock.stage.heanes.com/api',
      // 线上环境
      production: '/api/'
    },
    // 接口调用超时时间，小于或等于0时表示不设置超时时间
    timeout: 5000,
    withCredentials: false,
    defaultContentType: 'application/json', // 默认请求时发送的content-type
    // 返回api接口地址
    getApiServerUrl (){
      const url = this.apiServerUrls[config.getEnv()];
      return url || '';
    }
  }
};

export default config;
