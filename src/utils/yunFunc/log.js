export const log = function(message) {
  try {
    let systemInfo = wx.getSystemInfoSync()
    let page = getCurrentPages()
    // 只有不在开发工具上触发的才上报
    if (systemInfo.platform !== 'devtools-') {
      wx.getNetworkType({
        success: async res => {
          await wx.cloud
            .callFunction({
              name: 'log',
              data: {
                clientType: systemInfo.model,
                systemInfo: JSON.stringify(systemInfo),
                pageRoute: page[page.length - 1].route,
                message: message,
                networkType: res.networkType,
                errorTime: new Date()
              }
            })
            .catch(err => console.error(err))
        }
      })
    }
  } catch (err) {
    console.error(err)
  }
}
