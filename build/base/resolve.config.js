const path = require('path');

const config = require('../config/config.js');

module.exports = {
  modules: [path.resolve(config.dirs.rootDir, 'node_modules')],
  alias: {
    // 定义src源目录别名
    '@': config.dirs.srcRootDir,
    '~': config.dirs.rootDir
  },
  extensions: ['.js', '.json', '.vue']
};
