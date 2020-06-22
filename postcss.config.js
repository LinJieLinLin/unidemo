const pkg = require('./package.json')
let plugins = [
  require('postcss-import'),
  require('autoprefixer')({
    remove: process.env.UNI_PLATFORM !== 'h5'
  }),
  require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
]
if (process.env.UNI_PLATFORM.toLocaleLowerCase().match(/mp/)) {
  // plugins.push(require('wx-px2rpx'))
  plugins.push(
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 50,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'rpx',
      fontViewportUnit: 'rpx',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: true,
      landscapeUnit: 'rpx',
      landscapeWidth: 100
    })
  )
} else {
  plugins.push(
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 750
    })
  )
}
module.exports = {
  parser: require('postcss-comment'),
  plugins: plugins
}
