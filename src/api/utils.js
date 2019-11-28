/**
 * @doc api配置种方式
 * @type {{common: {post: {queryNavList: string, queryBaseCommon: string}}}}
 * 1. 不同环境不同配置值
 * 2. 不同的配置值配置方式
 *   2.1. baseURL + url 方式
 *   2.2. 绝对值方式
 * 3. 支持嵌套无线层
 */
function parseUrls (urls, env = 'production') {
  const urlData = {};
  for(const key in urls){
    const item = urls[key];
    const temType = typeof item;
    // console.log('key:', key, ' item: ', item);
    // console.log('temType: ', temType);

    if(temType === 'string' && ['__defaultMethod', '__baseServer'].indexOf(key) < 0){
      urlData[key] = item;
    }
    if(temType === 'object'){
      urlData[key] = parseUrls(item, env);
    }
    if(temType === 'function'){
      // console.log('item is function: ', item);
      urlData[key] = item()[env] ? item()[env] : item().base;
    }
  }
  return urlData;
}

/**
 * 多环境配置
 * @param envConfig
 * @returns {function(): *}
 */
function multipleEnvConfig (envConfig) {
  // 返回一个function，用以区分普通嵌套配置对象
  return function (){
    return envConfig;
  }
}

export {
  parseUrls,
  multipleEnvConfig
};
