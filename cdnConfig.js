/*
 * @Author: linj
 * @Email: 993353454@qq.com
 * @Date: 2020-07-29 17:20:55
 * @Description:cdn配置
 */
const pkg = require('./package.json')
let version = {
  vuex: '',
  vconsole: '',
  'crypto-js': '',
}
if (pkg.dependencies) {
  for (let k in version) {
    version[k] = pkg.dependencies[k].replace('^', '')
  }
}
let cdnConfig = {
  externals: {},
  css: [],
  js: [],
}
console.log('当前环境', process.env.UNI_PLATFORM, process.env.NODE_ENV)

switch (process.env.UNI_PLATFORM) {
  case 'h5':
    if (process.env.NODE_ENV === 'development') {
    } else {
      // cdnConfig = {
      //   // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
      //   externals: {
      //     vuex: 'Vuex',
      //     vconsole: 'VConsole',
      //     'crypto-js': 'CryptoJS',
      //   },
      //   // cdn的css链接
      //   css: [
      //     'https://cdn.bootcdn.net/ajax/libs/font-awesome/5.14.0/css/all.css',
      //   ],
      //   // cdn的js链接
      //   js: [
      //     'https://cdnjs.cloudflare.com/ajax/libs/vuex/' +
      //       version.vuex +
      //       '/vuex.min.js',
      //     'https://cdnjs.cloudflare.com/ajax/libs/vConsole/' +
      //       version.vconsole +
      //       '/vconsole.min.js',
      //     'https://cdn.bootcdn.net/ajax/libs/crypto-js/' +
      //       version['crypto-js'] +
      //       '/crypto-js.min.js',
      //   ],
      // }
    }
    break
}
// 只有H5时使用cdn
if (process.env.UNI_PLATFORM && !process.env.UNI_PLATFORM.match('h5')) {
  cdnConfig = {
    externals: {},
    css: [],
    js: [],
  }
}
module.exports = cdnConfig
