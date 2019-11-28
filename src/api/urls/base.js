import {multipleEnvConfig} from '../utils.js';

const base = {
  __defaultMethod: 'post',
  __baseServer: '',

  queryRoot: 'base',

  /* ****************************** common 公用 ****************************** */
  common: {
    /**
     * @doc 获取基础信息，传入不同参数获取对应数据[setting, navList, announcement, friendlyLink]
     * @param params
     * @param callback
     * @returns {*}
     * @author Heanes
     * @time 2019-03-28 10:26:49 周四
     */
    queryBaseCommon: 'base/common',

    queryBaseCommonWithEnv: multipleEnvConfig({
      mock: 'base/common',
      base: 'base/common'
    }),
    /**
     * @doc 获取头部导航
     * @param params
     * @param callback
     * @returns {*}
     */
    queryNavList: multipleEnvConfig({
      mock: 'nav/list',
      base: 'nav/list'
    })
  },

  thirdPart: {
    caiyunWeather: {
      beijingDaxing: 'https://api.caiyunapp.com/v2/TAkhjf8d1nlSlspN/39.726929,116.341395/realtime.json'
    },
    v2ex: {
      latest: 'https://www.v2ex.com/api/topics/latest.json'
    }
  }
};

export default base;
