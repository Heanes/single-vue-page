/**
 * @doc 定义module
 * @author Heanes
 * @time 2019-05-03 13:39:59 周五
 */

const config = require('../config/config.js');

module.exports = {
  rules: [
    {
      test: /\.vue$/,
      use: [
        'vue-loader'
      ],
      include: config.dirs.srcRootDir,
      exclude: /node_modules|vendor/
    },
    // 图片等资源文件
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 4,
            name: 'static/img/[name].[hash:8].[ext]'
          }
        }
      ]
      /* include: dirVars.srcRootDir,
       exclude: /node_modules|vendor/ */
    },
    // 多媒体文件
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|ape)(\?.*)?$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            limit: 4,
            // useRelativePath: true,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ],
      include: config.dirs.srcRootDir
    },
    // 字体及图标文件
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 4,
            // useRelativePath: true,
            name: 'static/fonts/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    // ico
    {
      test: /\.(ico)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            limit: 50,
            name: 'static/ico/[name].[ext]' // 相对于path的路径
          }
        }
      ]

    }
  ]
};
