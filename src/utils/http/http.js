import axios from 'axios';

/**
 * @doc 处理请求异常
 * @param error
 * @returns {null}
 */
function handleAxiosRequestExceptionDefault (error) {
  if (error) {
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
function handleAxiosResponseDefault (response, callback) {
  if (response.data) {
    if (response.data.success) {
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
  initialized: false,
  http: axios.create(),
  // 允许的请求方法
  allowMethod: ['get', 'post'],
  /**
   * 默认处理请求异常处理函数
   */
  handleAxiosRequestExceptionDefault: handleAxiosRequestExceptionDefault,
  /**
   * 默认请求响应处理函数
   */
  handleAxiosResponseDefault: handleAxiosResponseDefault,
  /**
   * 初始化http工具
   * @param apiConfig
   * @param handleAxiosRequestException 请求时异常处理方法
   * @param handleAxiosResponse 请求正常情况的处理方法
   */
  initHttp (apiConfig, handleAxiosRequestException, handleAxiosResponse) {
    if (this.initialized) return this.http;
    const axios = this.http;
    // 1. 设置基础url
    axios.defaults.baseURL = apiConfig.getApiServerUrl();
    // 2. 设置超时时间
    if (apiConfig.timeout > 0) {
      axios.defaults.timeout = apiConfig.timeout;
    }
    //
    if (apiConfig.withCredentials) {
      axios.defaults.withCredentials = true
    }
    // 3. 设置错误处理方法
    handleAxiosRequestException = handleAxiosRequestException || handleAxiosRequestExceptionDefault;
    handleAxiosResponse = handleAxiosResponse || handleAxiosResponseDefault;
    // 请求拦截器
    axios.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        handleAxiosRequestExceptionDefault(error);
        return Promise.reject(error);
      }
    );

    // 添加一个响应拦截器
    axios.interceptors.response.use(
      function (res) {
        return handleAxiosResponse(res);
      },
      function (error) {
        handleAxiosRequestExceptionDefault(error);
        return Promise.resolve(error);
      }
    );

    this.http = axios;
    this.initialized = true;
    return this;
  },
  get (url, params, callback) {
    return this.http.get(url, {params: params});
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
