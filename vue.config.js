// const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cdnConfig = require('./cdnConfig')
function resolve(dir) {
  return path.join(__dirname, dir)
}

var publicPath = '/unidemo/'
let plugins = [
  // 模板处理
  new HtmlWebpackPlugin({
    title: '',
    template: resolve('public/index.html'),
    cdn: cdnConfig,
    baseUrl: publicPath,
    minify: {
      // 压缩 HTML 中出现的 CSS 代码
      minifyCSS: true,
      // 压缩 HTML 中出现的 JS 代码
      minifyJS: true,
      // 删除双引号
      removeAttributeQuotes: false,
    },
  }),
  // 复制文件到根目录
  // new CopyWebpackPlugin([
  //   {
  //     from: './public/iconfont.js',
  //     to: './iconfont.js'
  //   }
  // ])
]
if (process.env.NODE_ENV === 'production') {
  plugins.push(
    // 去除console
    new TerserPlugin({
      sourceMap: true,
      cache: true,
      parallel: true,
      terserOptions: {
        output: {
          comments: false,
        },
        warnings: false,
        compress: {
          drop_debugger: true,
          drop_console: false,
        },
      },
    })
  )
}

// console.log(cdnConfig)
module.exports = {
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
        '@static': path.join(__dirname, 'src/static'),
        '@components': path.join(__dirname, 'src/components'),
        '@assets': path.join(__dirname, 'src/assets'),
        '@utils': path.join(__dirname, 'src/utils'),
        '@store': path.join(__dirname, 'src/store'),
      },
    },
    // 要忽略打包的文件
    externals: cdnConfig.externals,
    plugins: plugins,
  },
  chainWebpack: (config) => {
    // 打包分析
    if (process.env.IS_ANALYZ) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
        },
      ])
    }
  },
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
