const path = require('path');

const config = require('../config/config.js');

module.exports = {
  modules: [path.resolve(config.dirVars.rootDir, 'node_modules')],
  alias: {
    // 定义src源目录别名
    '@': config.dirVars.srcRootDir,
    '~': config.dirVars.rootDir
  },
  extensions: ['.js', '.json', '.vue']
};
