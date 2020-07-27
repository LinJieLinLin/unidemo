// const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}
let isCdn = true
let cdnConfig = {
  // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
  externals: {
    'crypto-js': 'CryptoJS',
  },
  // cdn的css链接
  css: ['https://cdn.bootcdn.net/ajax/libs/font-awesome/5.14.0/css/all.css'],
  // cdn的js链接
  js: ['https://cdn.bootcdn.net/ajax/libs/crypto-js/4.0.0/crypto-js.min.js'],
}
var publicPath = '/'
console.log('当前环境', process.env.UNI_PLATFORM)
// 只有H5时使用cdn
if (
  !isCdn ||
  (process.env.UNI_PLATFORM && !process.env.UNI_PLATFORM.match('h5'))
) {
  cdnConfig = {
    externals: {},
    css: [],
    js: [],
  }
}
module.exports = {
  // index.html生成名称
  // indexPath: 'test.html',
  // sass-loader配置
  // 基本路径
  publicPath: publicPath,
  // 输出文件目录
  // outputDir: 'dist',
  // html生成别名
  // indexPath: 'coco.html',
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8001,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://test.gzgjj.gov.cn/',
        changeOrigin: true,
        proxyTimeout: 1920000,
        timeout: 1920000,
        // pathRewrite: {
        //   // '^/index.php': '/index.php'
        // }
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@static': path.join(__dirname, 'static'),
        '@assets': path.join(__dirname, 'assets'),
        '@utils': path.join(__dirname, 'utils'),
        '@store': path.join(__dirname, 'store'),
      },
    },
    // 要忽略打包的文件
    externals: cdnConfig.externals,
    plugins: [
      // 模板处理
      new HtmlWebpackPlugin({
        title: '',
        template: resolve('public/index.html'),
        cdn: cdnConfig,
        baseUrl: publicPath,
      }),
      // 复制文件到根目录
      // new CopyWebpackPlugin([
      //   {
      //     from: './public/iconfont.js',
      //     to: './iconfont.js'
      //   }
      // ])
    ],
  },
  chainWebpack: (config) => {},
  css: {
    loaderOptions: {
      sass: {
        // 这里的选项会传递给 sass-loader 小程序不会加载，已在uni.scss引入
        // prependData: '@import "@/scss/settings.scss";'
      },
    },
    // 生产环境开启sourceMap
    sourceMap: process.env.NODE_ENV === 'production',
  },
}
