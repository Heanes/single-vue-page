// @see https://webpack.js.org/configuration/stats
module.exports = {
  colors: true,
  modules: false,
  children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
  chunks: false,
  chunkModules: false
};
