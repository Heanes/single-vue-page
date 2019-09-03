const urls = {

  /* ****************************** common 公用 ****************************** */
  common: {
    post: {},
    get: {
      /**
       * @doc 获取基础信息，传入不同参数获取对应数据[setting, navList, announcement, friendlyLink]
       * @param params
       * @param callback
       * @returns {*}
       * @author Heanes
       * @time 2019-03-28 10:26:49 周四
       */
      queryBaseCommon: 'base/common',
      /**
       * @doc 获取头部导航
       * @param params
       * @param callback
       * @returns {*}
       */
      queryNavList: 'nav/list'
    }
  }
};

export default urls;
