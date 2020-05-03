const path = require('path');
const dirVars = {};

dirVars.distDirName        = 'dist';
dirVars.srcRootDirName     = 'src';
dirVars.viewsDirName       = 'views';
dirVars.componentsDirName  = 'components';
dirVars.publicDirName      = 'public';
dirVars.staticDirName      = 'static';

/**
 * @doc 定义项目目录
 * @type {*|*|string}
 * @author Heanes
 * @time 2018-11-05 16:38:28 周一
 */
dirVars.rootDir       = path.resolve(process.cwd());                                   // 项目根目录
dirVars.srcRootDir    = path.resolve(dirVars.rootDir, './' + dirVars.srcRootDirName);        // 源文件目录，项目业务代码根目录
dirVars.viewsDir      = path.resolve(dirVars.srcRootDir, './' + dirVars.viewsDirName);       // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
dirVars.publicDir     = path.resolve(dirVars.srcRootDir, './' + dirVars.publicDirName);      // 存放各个页面使用到的公共资源
dirVars.componentsDir = path.resolve(dirVars.srcRootDir, './' + dirVars.componentsDirName);  // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要

// 生成文件目录
dirVars.distDir = path.resolve(dirVars.rootDir, './' + dirVars.distDirName);                 // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

// console.log('----------------------------------------');
// console.log('dirVars:\n', dirVars);
// console.log('----------------------------------------');

module.exports = dirVars;
