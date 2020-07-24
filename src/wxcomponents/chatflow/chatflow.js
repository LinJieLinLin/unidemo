const MENU_KEY_FILE = 'FileSelect'
const MENU_KEY_PIC = 'PictureSelect'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    appIcon:
      'https://3gimg.qq.com/trom_s/yunxiaowei/miniprogram/ic_taxation.png',
    userIcon: 'https://3gimg.qq.com/trom_s/yunxiaowei/miniprogram/ic_user.png',
    welcomeMessages: ['你好，我是腾讯云小微', '请问有什么可以帮您吗？'],

    customMenus: [
      {
        key: MENU_KEY_PIC,
        title: '图片',
        icon:
          'https://3gimg.qq.com/trom_s/yunxiaowei/miniprogram/ic_menu_pic.png',
        // 强制使用抽屉菜单（只有一个菜单项时有效）
        // inDrawer: true,
        // 点击后自动关闭菜单
        // autoClose: true,
      },
      {
        key: MENU_KEY_FILE,
        title: '文件',
        icon:
          'https://3gimg.qq.com/trom_s/yunxiaowei/miniprogram/ic_menu_file.png',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var chatflow = this.selectComponent('#chatflow')
    var audio = wx.createAudioContext('ttsAudio')
    // var audio = uni.createInnerAudioContext()
    chatflow.setAudio(audio, this)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  // 点击选择图片菜单
  _onPictureSelect: function (event) {
    console.log('_onPictureSelect')
  },
  // 点击选择文件菜单
  _onFileSelect: function (event) {
    console.log('_onFileSelect')
  },
})
