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
  // {
  //   test: /\.(js|vue)$/,
  //   loader: 'eslint-loader',
  //   enforce: 'pre',
  //   include: [resolve('src'), resolve('test')],
  //   options: {
  //     formatter: require('eslint-friendly-formatter')
  //   }
  // },
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
        // 这里的选项会传递给 sass-loader
        data: '@import "@/scss/settings.scss";'
        // data: '@import "@/uni.scss";'
      }
    }
    // 生产环境开启sourceMap
    // sourceMap: process.env.NODE_ENV === 'production'
  }
}
