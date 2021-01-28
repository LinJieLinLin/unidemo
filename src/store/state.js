import config from '../../package.json'
// 变量定义
const state = {
  Version: config.version,
  // 需要本地缓存字段
  localKey: ['NeedAuth', 'UserInfo', 'CountNum'],
  // 是否打开实名认证弹窗
  NeedAuth: 0,
  // 用户信息
  UserInfo: {},
  // 全局倒计时
  CountNum: '',
  // BaseUrl: 'http://sznswtt.gdtengnan.com',
  BaseUrl: 'https://sznswtt.gdtengnan.com',
  // 是否需要刷新页面（设置后记得取消）
  Reload: false,
}
export default state
