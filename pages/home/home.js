import { request, isLogin } from '../../api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    imagesList: {},
    recomlist: {},
    hotVideolist: {},
    isLogin: false
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 获取主页轮播图
  async getSwiper () {
    var res = await request({
      url: '/home/swipers'
    })
    this.setData({
      imagesList: res.data.message
    })
  },
  // 获取主页推荐课程
  async getCourse () {
    var res = await request({
      url: '/home/course'
    })
    this.setData({
      recomlist: res.data.message
    })
  },
  // 获取主页热门视频
  async gethotVideo () {
    var res = await request({
      url: '/home/video'
    })
    // console.log(res)
    this.setData({
      hotVideolist: res.data.message
    })
  },
  // 跳转到登录页
  tologin () {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图
    this.getSwiper()
    // 获取推荐课程
    this.getCourse()
    // 获取热门视频
    this.gethotVideo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 是否登录
    if (isLogin()) {
      this.setData({
        isLogin: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
