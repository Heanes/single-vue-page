import axios from 'axios';
import siteConfig from '../../config/index.js';

// 添加一个请求拦截器
axios.defaults.baseURL = siteConfig.api.getApiServerUrl();
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.timeout = 1000;
// axios.defaults.withCredentials=true

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    handleAxiosException(error);
    return Promise.reject(error);
  }
);

// 添加一个响应拦截器
axios.interceptors.response.use(
  function (res) {
    return handleAxiosResponse(res);
  },
  function (error) {
    handleAxiosException(error);
    return Promise.resolve(error);
  }
);

/**
 * @doc 处理异常
 * @param error
 * @returns {null}
 */
function handleAxiosException (error) {
  if(error){
    const msg = `${error.config.method} '${error.config.url}' exception: ${error.message}${error.response && error.response.data ? ', ' + error.response.data : ''}`;

    // do something to notify
    console.error(msg);
    console.info(error);

    return error;
  }
}

/**
 * @doc 处理返回结果
 * @param response
 * @param callback
 * @returns {*}
 */
function handleAxiosResponse (response, callback) {
  if (response.data) {
    if(response.data.code === 0) {
      callback && callback(response.data);
      return response.data;
    } else {
      const msg = `${response.config.method} '${response.config.url}' error: ${response.data.msg}`;

      // do something to notify
      console.error(msg);

      return response;
    }
  } else {
    const msg = `${response.config.method} '${response.config.url}' exception: ${response.message}${response.response && response.response.data ? ', ' + response.response.data : ''}`;

    // do something to notify
    console.error(msg);
    console.info(response);

    return response;
  }
}

export default {
  http: axios,
  // 允许的请求方法
  allowMethod: ['get', 'post'],
  get (url, params, callback) {
    return this.http.get(url, params);
  },
  post (url, params, callback, config) {
    return this.http.post(url, params, config);
  },
  /**
   * @doc 根据配置生成api方法
   * @param source url
   * @param serverBasePath 基础地质
   * @param target 绑定目标
   * @param requestMethod 请求类型，get、post等
   */
  makeApiMethod (source, serverBasePath = '', target, requestMethod) {
    const getApiNames = Object.keys(source);
    getApiNames.forEach(apiName => {
      // 生成一个方法，params为参数，callback为回调函数，config为调用的其他配置
      target[apiName] = (params, callBack, config) => {
        requestMethod = this.allowMethod.includes(requestMethod) != null ? requestMethod : this.allowMethod[0];
        // method = 'get';

        // axios调用get时，需要包一层{params: param}，这里统一一下
        if (requestMethod === 'get') {
          params = {params: params};
        }
        return this[requestMethod](serverBasePath + source[apiName], params, callBack, config);
      }
    });
  }
};
