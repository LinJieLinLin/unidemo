const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  // sass-loader配置
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8001,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    // 设置代理
    proxy: {
      '/gzgjjWx': {
        // target: 'http://gzgjjtest.gdtengnan.com:8888',
        target: 'http://test.gzgjj.gov.cn/',
        changeOrigin: true,
        proxyTimeout: 1920000,
        timeout: 1920000
        // pathRewrite: {
        //   // '^/index.php': '/index.php'
        // }
      },
      '/gzgjjApi': {
        // target: 'http://gzgjjtest.gdtengnan.com:8888',
        target: 'http://test.gzgjj.gov.cn/',
        changeOrigin: true,
        proxyTimeout: 1920000,
        timeout: 1920000
        // pathRewrite: {
        //   // '^/index.php': '/index.php'
        // }
      },
      '/wap': {
        // target: 'http://192.168.101.1/miya/trunk/public',
        target: 'http://miya.gdtengnan.com/',
        changeOrigin: false
      }
    }
  },
  configureWebpack: {
    plugins: [
      // 复制文件到根目录
      // new CopyWebpackPlugin([
      //   {
      //     from: './public/iconfont.js',
      //     to: './iconfont.js'
      //   }
      // ])
    ]
  },
  chainWebpack: config => {
    // GraphQL Loader
    // config.module
    //   .rule('graphql')
    //   .test(/\.graphql$/)
    //   .use('graphql-tag/loader')
    //   .loader('graphql-tag/loader')
    //   .end()
    // config.module
    //   .rule('vue')
    //   .use('eslint-loader')
    //   .loader('eslint-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     if (!options) {
    //       options = {}
    //     }
    //     options.formatter = require('eslint-friendly-formatter')
    //     return options
    //   })
  },
  css: {
    loaderOptions: {
      sass: {
        // 这里的选项会传递给 sass-loader 小程序不会加载，已在uni.scss引入
        // prependData: '@import "@/scss/settings.scss";'
      }
    },
    // 生产环境开启sourceMap
    sourceMap: process.env.NODE_ENV === 'production'
  }
}
