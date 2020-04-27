import { request, isLogin } from '../../api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    courseList: {},
    level: ['', '初级课程', '中级课程', '高级课程']
  },
  // 获取课程列表
  async getCourse () {
    let res = await request({
      url: '/course/list'
    })
    console.log(res)
    this.setData({
      courseList: res.data.message
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCourse()

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
