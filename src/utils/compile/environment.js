/**
 * @doc 编译相关工具
 */
export default {
  /**
   * @doc 根据构建模式获取环境
   * @returns string
   * @author Heanes
   * @time 2019-11-04 18:33:31 周一
   */
  getEnvByBuildEnv () {
    // eslint-disable-next-line no-undef
    console.log('env: ', __env + '');
    // console.log(process);
    // console.log(process.argv);
    // console.log(process.env.NODE_ENV);
    // console.log(process.env);
    // eslint-disable-next-line no-undef
    return __env;
  }
}
