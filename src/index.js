import Vue from 'vue';
import App from './views/App.vue';
import router from './router/index.js';
import store from './store/index.js';

import siteConfig from './config/index.js';
import httpUtil from './utils/http/http.js';
import apiUtil from './api/index.js';
import {enableMock} from './mock'

Vue.config.productionTip = false;

// 0. 装载整站配置
Vue.prototype.$_siteConfig = siteConfig;

// 1. 装载接口相关(根据站点配置)
// 挂载http请求工具
httpUtil.initHttp(siteConfig.api);
Vue.prototype.$http = httpUtil.http;
// 挂载api接口配置
Vue.prototype.$api = apiUtil.getApiUrls(siteConfig.env);

// console.log('api config: ', Vue.prototype.$api);

enableMock()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
