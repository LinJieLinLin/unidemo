// 变量定义
const state = {
  // 用户信息
  UserInfo: {},
  // BaseUrl: 'http://sznswtt.gdtengnan.com',
  BaseUrl: 'https://sznswtt.gdtengnan.com',
  // 当前报名用户信息
  SignUserInfo: {},
  // 临时券详情信息
  CouponItem: {},
  // 临时票详情信息
  TicketItem: {},
  // 是否需要刷新页面（设置后记得取消）
  Reload: false,
  // 是否显示返回首页悬浮按钮
  ShowBackIndex: false,
  // 是否打开实名认证弹窗
  NeedAuth: 0
}
export default state
