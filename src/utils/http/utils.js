import http from './http.js'
export default {
  /**
   * @doc 装载api，生成方法
   * @param apiConfig api配置
   * @param serverBasePath 基础url
   */
  loadApiConfig (apiConfig, serverBasePath = '') {
    let apiGroups = Object.keys(apiConfig);
    let apis = {};
    apiGroups.forEach(group => {
      let apiConfigItem = apiConfig[group];
      let allApis = {};
      if (apiConfigItem) {
        let apiConfigType = Object.keys(apiConfigItem);
        apiConfigType.forEach(type => {
          http.makeApiMethod(apiConfigItem[type], serverBasePath, allApis, type)
        });
      }
      apis[group] = allApis
    });
    return apis;
  }
}
