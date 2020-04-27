// pages/my/index.js
import { request } from '../../api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // 获取用户信息
  async getuserInfo () {
    // 获取保存在本地的token
    let token = wx.getStorageSync('token')
    console.log(token)
    if (token) {
      let res = await request({
        url: '/my/info',
        header: {
          Authorization: 'Bearer ' + token
        }
      })
      console.log(res)
      this.setData({
        userInfo: res.data.message
      })
    } else {
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    //获取用户信息
    this.getuserInfo()
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
