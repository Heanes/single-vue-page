const article = {
  __defaultMethod: 'post',
  __baseServer: '',

  /* ****************************** article 文章 ****************************** */
  article: {
    /**
     * @doc 获取文章列表
     * @param params
     * @param callback
     * @returns {*}
     * @author Heanes
     * @time 2019-03-28 10:26:49 周四
     */
    queryList: 'article/list',
    /**
     * @doc 获取文章详情
     * @param params
     * @param callback
     * @returns {*}
     * @author Heanes
     * @time 2019-03-28 10:26:49 周四
     */
    queryDetail: 'article/detail'
  }
};

export default article;
