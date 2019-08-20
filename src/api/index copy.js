import { request } from '@/utils/wx'
// 通用
export function hWxLogin(params = {}, config = {}) {
  return request({
    url: '/api/custom/wechat/wechat/login',
    method: 'post',
    params,
    config
  })
}

export function saveUserinfo(params = {}, config = {}) {
  return request({
    url: '/api/custom.wechat.wechat/saveUserinfo',
    // url: '/wxLogin',
    method: 'post',
    params,
    config
  })
}
// 场馆分类列表:http://yapi.gdtn.io/project/20/interface/api/405
export function getVenueType(params = {}, config = {}) {
  return request({
    url: '/api/custom/base/Index/venuetype',
    method: 'post',
    params,
    config
  })
}
// 轮播列表 http://yapi.gdtn.io/mock/20/api/custom/content/banner/index
export function getBanner(params = {}, config = {}) {
  return request({
    url: '/api/custom/content/banner/index',
    method: 'post',
    params,
    config
  })
}

// 场馆管理
// http://yapi.gdtn.io/project/20/interface/api/397
export function getStadiumList(params = {}, config = {}) {
  return request({
    url: '/api/custom/company/info',
    method: 'post',
    params,
    config
  })
}
// 场馆详情 http://yapi.gdtn.io/mock/20/api/custom/company/info/detail
export function getStadiumDetail(params = {}, config = {}) {
  return request({
    url: '/api/custom/company/info/detail',
    method: 'post',
    params,
    config
  })
}
// 场馆详情活动动列表 http://yapi.gdtn.io/project/20/interface/api/561
export function getStadiumActivity(params = {}, config = {}) {
  return request({
    url: '/api/custom/company/info/activity',
    method: 'post',
    params,
    config
  })
}

// 活动相关
// 热门活动 http://yapi.gdtn.io/project/20/interface/api/477
export function getHotActivity(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/listHot',
    method: 'post',
    params,
    config
  })
}
// 热门活动 http://yapi.gdtn.io/project/20/interface/api/477
export function getReadyActivity(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/listReady',
    method: 'post',
    params,
    config
  })
}
// 大事件活动 http://yapi.gdtn.io/project/20/interface/api/485
export function getBigActivity(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/listBig',
    method: 'post',
    params,
    config
  })
}
// 票活动列表 http://yapi.gdtn.io/project/20/interface/api/497
export function getTicketActivity(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/ticket',
    method: 'post',
    params,
    config
  })
}
// 券活动列表 http://yapi.gdtn.io/project/20/interface/api/497
export function getCouponActivity(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/coupon',
    method: 'post',
    params,
    config
  })
}
// 报名活动列表 http://yapi.gdtn.io/project/20/interface/api/505
export function getSignActivity(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/regular',
    method: 'post',
    params,
    config
  })
}
// 活动详情 http://yapi.gdtn.io/project/20/interface/api/517
export function getActivityDetail(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/detail',
    method: 'post',
    params,
    config
  })
}
// 获取认证信息 http://yapi.gdtn.io/project/20/interface/api/573
export function getExtraData(params = {}, config = {}) {
  return request({
    url: '/api/custom.epassport.epassport/getExtraData',
    method: 'post',
    params,
    config
  })
}
// 保存认证信息 http://yapi.gdtn.io/project/20/interface/api/577
export function getAuthInfo(params = {}, config = {}) {
  return request({
    url: '/api/custom.epassport.epassport/getAuthInfo',
    method: 'post',
    params,
    config
  })
}
// 文体风采列表 http://yapi.gdtn.io/project/20/interface/api/533
export function getMienList(params = {}, config = {}) {
  return request({
    url: '/api/custom/content/info/index',
    method: 'post',
    params,
    config
  })
}
// 文体风采列表 http://yapi.gdtn.io/project/20/interface/api/537
export function getSubjectList(params = {}, config = {}) {
  return request({
    url: '/api/custom/content/info/subList',
    method: 'post',
    params,
    config
  })
}
// 文体风采详情 http://yapi.gdtn.io/project/20/interface/api/541
export function getMienDetail(params = {}, config = {}) {
  return request({
    url: '/api/custom/content/info/detail',
    method: 'post',
    params,
    config
  })
}
// 文体风采专题详情 http://yapi.gdtn.io/project/20/interface/api/549
export function getSubjectDetail(params = {}, config = {}) {
  return request({
    url: '/api/custom/content/info/subDetail',
    method: 'post',
    params,
    config
  })
}
// 商品模块
// 票商品列表 http://yapi.gdtn.io/project/20/interface/api/565
export function getTicketList(params = {}, config = {}) {
  return request({
    url: '/api/custom/goods/Ticket/index',
    method: 'post',
    params,
    config
  })
}
// 券商品列表 http://yapi.gdtn.io/project/20/interface/api/569
export function getCouponList(params = {}, config = {}) {
  return request({
    url: '/api/custom/goods/Coupon/index',
    method: 'post',
    params,
    config
  })
}
// 票商品详情 http://yapi.gdtn.io/project/20/interface/api/581
export function getTicketDetail(params = {}, config = {}) {
  return request({
    url: '/api/custom/goods/ticket/detail',
    method: 'post',
    params,
    config
  })
}
// 券商品详情 http://yapi.gdtn.io/project/20/interface/api/585
export function getCouponDetail(params = {}, config = {}) {
  return request({
    url: '/api/custom/goods/Coupon/detail',
    method: 'post',
    params,
    config
  })
}
// 活动类型列表 http://yapi.gdtn.io/project/20/interface/api/473
export function getActivityType(params = {}, config = {}) {
  return request({
    url: '/api/custom/base/Index/activityType',
    method: 'post',
    params,
    config
  })
}

// 活动基础列表列表 http://yapi.gdtn.io/project/20/interface/api/469
export function getSignBaseType(params = {}, config = {}) {
  return request({
    url: '/api/custom/base/Index/baseType',
    method: 'post',
    params,
    config
  })
}
// 获取团队报名活动字段 http://yapi.gdtn.io/project/20/interface/api/645
export function getTeamInfo(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/getTeam',
    method: 'post',
    params,
    config
  })
}

// 新增团队信息提交 http://yapi.gdtn.io/project/20/interface/api/677
export function createTeam(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/createTeam',
    method: 'post',
    params,
    config
  })
}

// 编辑团队信息提交 http://yapi.gdtn.io/project/20/interface/api/701
export function editTeam(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/editTeam',
    method: 'post',
    params,
    config
  })
}
// 团队队员邀请提交 http://yapi.gdtn.io/project/20/interface/api/689
export function addGroupUser(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/invite',
    method: 'post',
    params,
    config
  })
}
// 编辑个人/团队个人信息提交 http://yapi.gdtn.io/project/20/interface/api/737
export function editPerson(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/editPerson',
    method: 'post',
    params,
    config
  })
}
// 获取团队个人报名活动字段 http://yapi.gdtn.io/project/20/interface/api/649
export function getTeamPerson(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/getTeamPerson',
    method: 'post',
    params,
    config
  })
}
// 取消团队队员 http://yapi.gdtn.io/project/20/interface/api/773
export function delTeamPerson(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/delTeamPerson',
    method: 'post',
    params,
    config
  })
}
// 保存团队 http://yapi.gdtn.io/project/20/interface/api/785
export function saveTeam(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/saveTeam',
    method: 'post',
    params,
    config
  })
}
// 取消团队 http://yapi.gdtn.io/project/20/interface/api/769
export function delTeam(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/delTeam',
    method: 'post',
    params,
    config
  })
}

// 新增个人报名报名信息提交 http://yapi.gdtn.io/project/20/interface/api/673
export function createPerson(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/createPerson',
    method: 'post',
    params,
    config
  })
}

// 获取个人报名活动字段 http://yapi.gdtn.io/project/20/interface/api/529
export function getPerson(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/getPerson',
    method: 'post',
    params,
    config
  })
}
// 订场场馆列表 http://yapi.gdtn.io/project/20/interface/api/741
export function getVenueList(params = {}, config = {}) {
  return request({
    url: '/Api/custom.field.info/venueList',
    method: 'post',
    params,
    config
  })
}

// 体育项目类型列表 http://yapi.gdtn.io/project/20/interface/api/721
export function getEventType(params = {}, config = {}) {
  return request({
    url: '/api/custom.base.index/eventType',
    method: 'post',
    params,
    config
  })
}
// 获取场馆下可用的体育项目类型 http://yapi.gdtn.io/project/20/interface/api/761
export function getVenueEventList(params = {}, config = {}) {
  return request({
    url: '/Api/custom.field.info/venueEventList',
    method: 'post',
    params,
    config
  })
}
// 获取场馆某体育项目场地的可预订日期 http://yapi.gdtn.io/project/20/interface/api/789
export function getVenueEventDateList(params = {}, config = {}) {
  return request({
    url: '/Api/custom.field.info/venueEventDateList',
    method: 'post',
    params,
    config
  })
}
// 获取某场馆某场地某日期的时间表 http://yapi.gdtn.io/project/20/interface/api/797
export function getBookTable(params = {}, config = {}) {
  return request({
    url: '/Api/custom.field.info/fieldTimetable',
    method: 'post',
    params,
    config
  })
}
// 预订场地 http://yapi.gdtn.io/project/20/interface/api/813
export function saveBook(params = {}, config = {}) {
  return request({
    url: '/Api/custom.field.info/bookTimetable',
    method: 'post',
    params,
    config
  })
}

// 活动点赞 http://yapi.gdtn.io/project/20/interface/api/845
export function like(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/like',
    method: 'post',
    params,
    config
  })
}

// 我的报名活动列表 http://yapi.gdtn.io/project/20/interface/api/837
export function getMySignList(params = {}, config = {}) {
  return request({
    url: '/api/custom/user/regular/index',
    method: 'post',
    params,
    config
  })
}
// 签到提交 http://yapi.gdtn.io/project/20/interface/api/841
export function signin(params = {}, config = {}) {
  return request({
    url: '/api/custom/user/regular/signin',
    method: 'post',
    params,
    config
  })
}
// 签到记录 http://yapi.gdtn.io/project/20/interface/api/857
export function getSigninLog(params = {}, config = {}) {
  return request({
    url: '/api/custom/user/regular/signinLog',
    method: 'post',
    params,
    config
  })
}
// 图片上传 http://yapi.gdtn.io/project/20/interface/api/861
export const imgUpload = '/Api/custom.wechat.upload/imgUpload'

// 购券选择页 http://yapi.gdtn.io/project/20/interface/api/849
export function getCouponInfo(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.coupon/couponInfo',
    method: 'post',
    params,
    config
  })
}
// 确认购票 http://yapi.gdtn.io/project/20/interface/api/853
export function couponLottery(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.coupon/couponLottery',
    method: 'post',
    params,
    config
  })
}
// 订单支付确认页 http://yapi.gdtn.io/project/20/interface/api/873
export function couponOrderDetail(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.coupon/couponOrderDetail',
    method: 'post',
    params,
    config
  })
}
// 确认支付 http://yapi.gdtn.io/project/20/interface/api/877
export function couponOrderCommit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.coupon/couponOrderCommit',
    method: 'post',
    params,
    config
  })
}
// 购票选择页 http://yapi.gdtn.io/project/20/interface/api/881
export function getTicketInfo(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.ticket/ticketInfo',
    method: 'post',
    params,
    config
  })
}
// 确认购票 http://yapi.gdtn.io/project/20/interface/api/889
export function ticketLottery(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.ticket/ticketLottery',
    method: 'post',
    params,
    config
  })
}
// 确认支付 http://yapi.gdtn.io/project/20/interface/api/897
export function ticketOrderCommit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.ticket/ticketOrderCommit',
    method: 'post',
    params,
    config
  })
}
// 票订单列表 http://yapi.gdtn.io/project/20/interface/api/925
export function getTicketOrderList(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.ticket/orderList',
    method: 'post',
    params,
    config
  })
}
// 票订单退订 http://yapi.gdtn.io/project/20/interface/api/945
export function refundTicketOrder(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.ticket/orderRefund',
    method: 'post',
    params,
    config
  })
}
// 票订单退订 http://yapi.gdtn.io/project/20/interface/api/917
export function refundCouponOrder(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.coupon/orderRefund',
    method: 'post',
    params,
    config
  })
}

// 票订单详情 http://yapi.gdtn.io/project/20/interface/api/929
export function getTicketOrderDetail(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.ticket/orderDetail',
    method: 'post',
    params,
    config
  })
}
// 券订单详情 http://yapi.gdtn.io/project/20/interface/api/905
export function getCouponOrderDetail(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.coupon/orderDetail',
    method: 'post',
    params,
    config
  })
}
// 券订单列表 http://yapi.gdtn.io/project/20/interface/api/901
export function getCouponOrderList(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.coupon/orderList',
    method: 'post',
    params,
    config
  })
}

// 显示订场的核销二维码 http://yapi.gdtn.io/project/20/interface/api/913
export function fieldSignupQrcode(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.field/fieldSignupQrcode',
    method: 'post',
    params,
    config
  })
}

// 显示票的核销二维码 http://yapi.gdtn.io/project/20/interface/api/941
export function ticketQrcode(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.ticket/ticketQrcode',
    method: 'post',
    params,
    config
  })
}
// 场地退订 http://yapi.gdtn.io/project/20/interface/api/833
export function refundTimetable(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.field/refundTimetable',
    method: 'post',
    params,
    config
  })
}
// 个人基础信息修改 http://yapi.gdtn.io/project/20/interface/api/865
export function editUserInfo(params = {}, config = {}) {
  return request({
    url: '/api/custom/user/Info/edit',
    method: 'post',
    params,
    config
  })
}
// 我的待核销票和待核销订场 http://yapi.gdtn.io/project/20/interface/api/1001
export function getMyOrderList(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.mine/owner',
    method: 'post',
    params,
    config
  })
}
// 商品列表 http://yapi.gdtn.io/project/20/interface/api/1041
export function getGoodsList(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.shop/goodsList',
    method: 'post',
    params,
    config
  })
}
// 查看团队报名详情 http://yapi.gdtn.io/project/20/interface/api/1073
export function getTeamDetail(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/Regular/getTeamDetail',
    method: 'post',
    params,
    config
  })
}
// 积分券 - 兑换选择页 http://yapi.gdtn.io/project/20/interface/api/1049
export function getIconCouponInfo(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.shop/couponInfo',
    method: 'post',
    params,
    config
  })
}
// 积分券 券 - 兑换订单提交 http://yapi.gdtn.io/project/20/interface/api/1057
export function couponOrderSubmit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.shop/couponOrderSubmit',
    method: 'post',
    params,
    config
  })
}
// 积分券 券 - 确认支付 http://yapi.gdtn.io/project/20/interface/api/1065
export function iconCouponOrderCommit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.shop/couponOrderCommit',
    method: 'post',
    params,
    config
  })
}
// 积分票 - 兑换选择页 http://yapi.gdtn.io/project/20/interface/api/1069
export function iconTicketInfo(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.shop/ticketInfo',
    method: 'post',
    params,
    config
  })
}
// 积分票 - 兑换订单提交 http://yapi.gdtn.io/project/20/interface/api/1077
export function iconTicketOrderSubmit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.shop/ticketOrderSubmit',
    method: 'post',
    params,
    config
  })
}
// 积分票 - 确认支付 http://yapi.gdtn.io/project/20/interface/api/1085
export function iconTicketOrderCommit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.shop/ticketOrderCommit',
    method: 'post',
    params,
    config
  })
}
// 我的积分http://yapi.gdtn.io/project/20/interface/api/1089
export function getMyCredit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.credit/myCredit',
    method: 'post',
    params,
    config
  })
}
// 我的积分日志 http://yapi.gdtn.io/project/20/interface/api/1097
export function myCreditLog(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.credit/myCreditLog',
    method: 'post',
    params,
    config
  })
}
// 积分规则 http://yapi.gdtn.io/project/20/interface/api/1101
export function getIconRule(params = {}, config = {}) {
  return request({
    url: '/Api/custom.program.content/creditContent',
    method: 'post',
    params,
    config
  })
}
// 是否每日已签到 http://yapi.gdtn.io/project/20/interface/api/1137
export function isDailySignin(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.mine/isDailySignin',
    method: 'post',
    params,
    config
  })
}
// 每日签到 http://yapi.gdtn.io/project/20/interface/api/1133
export function dailySignin(params = {}, config = {}) {
  return request({
    url: '/Api/custom.user.mine/dailySignin',
    method: 'post',
    params,
    config
  })
}
// 活动分享记录接口 http://yapi.gdtn.io/project/20/interface/api/1177
export function share(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/share',
    method: 'post',
    params,
    config
  })
}
// 获取图形验证码 http://yapi.gdtn.io/project/20/interface/api/1289
export function getCaptacha(params = {}, config = {}) {
  return request({
    url: '/api/custom/user/Info/getCaptacha',
    method: 'post',
    params,
    config
  })
}
// 获取修改手的机短信验证码 http://yapi.gdtn.io/project/20/interface/api/1293
export function sendSmsCode(params = {}, config = {}) {
  return request({
    url: '/api/custom/user/Info/sendSmsCode',
    method: 'post',
    params,
    config
  })
}
// 修改手机接口 http://yapi.gdtn.io/project/20/interface/api/1297
export function updMobile(params = {}, config = {}) {
  return request({
    url: '/api/custom/user/Info/updMobile',
    method: 'post',
    params,
    config
  })
}

// 订场协议 http://yapi.gdtn.io/project/20/interface/api/1305
export function getFieldContent(params = {}, config = {}) {
  return request({
    url: '/Api/custom.program.content/fieldContent',
    method: 'post',
    params,
    config
  })
}

// 购票选择前置的摇一摇抽奖 http://yapi.gdtn.io/project/20/interface/api/1333
export function ticketShake(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.ticket/ticketShake',
    method: 'post',
    params,
    config
  })
}
// 抢券选择前置的摇一摇抽奖 http://yapi.gdtn.io/project/20/interface/api/1345
export function couponShake(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.coupon/couponShake',
    method: 'post',
    params,
    config
  })
}
// 获取用户某商品票可购买数 http://yapi.gdtn.io/project/20/interface/api/1341
export function getUserTicketLimit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.ticket/getUserTicketLimit',
    method: 'post',
    params,
    config
  })
}
// 摇一摇中奖后，提交购票信息进行订单生成 http://yapi.gdtn.io/project/20/interface/api/1337
export function ticketShakeSubmit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.ticket/ticketShakeSubmit',
    method: 'post',
    params,
    config
  })
}

// 获取用户某商品票可购买数 http://yapi.gdtn.io/project/20/interface/api/1353
export function getUserCouponLimit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.coupon/getUserCouponLimit',
    method: 'post',
    params,
    config
  })
}
// 摇摇一摇中奖后，提交购券信息进行订单生成 http://yapi.gdtn.io/project/20/interface/api/1349
export function couponShakeSubmit(params = {}, config = {}) {
  return request({
    url: '/Api/custom.activity.coupon/couponShakeSubmit',
    method: 'post',
    params,
    config
  })
}
// 获取支付信息 http://yapi.gdtn.io/project/38/interface/api/1949
export function getPayInfo(params = {}, config = {}) {
  return request({
    url: '/api/custom/pay/info/pay',
    method: 'post',
    params,
    config
  })
}
// 搜索 http://yapi.gdtn.io/project/38/interface/api/2385
export function search(params = {}, config = {}) {
  return request({
    url: '/api/custom/activity/info/search',
    method: 'post',
    params,
    config
  })
}
