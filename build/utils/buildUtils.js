/**
 * @doc 错误通知，以系统通知栏方式通知
 * @param packageConfig package.json文件
 * @returns {Function}
 * @author Heanes
 * @time 2019-05-04 21:31:22 周六
 */
function createNotifierCallback (packageConfig) {
  const notifier = require('node-notifier');

  return (severity, errors) => {
    if (severity !== 'error') return;

    const error = errors[0];
    const filename = error.file && error.file.split('!').pop();

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || ''
      // icon: path.join(__dirname, 'logo.png')
    })
  };
}

module.exports = {
  createNotifierCallback
};
