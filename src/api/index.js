import {parseUrls} from './utils.js';
// 需要多少，导入多少
import urlsBase from './urls/base.js';
import urlsArticle from './urls/article.js';
// 合并
const urls = {...urlsBase, ...urlsArticle};

export default {
  /**
   * @doc 根据配置的URL及环境得到apiUrl
   * @param env 环境变量
   * @returns Object
   */
  getApiUrls(env){
    // 得到解析后的URL
    return parseUrls(urls, env);
  }
};
