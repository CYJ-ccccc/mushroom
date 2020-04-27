import { request } from '../../api/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  // bindgetuserinfo回调中获取到用户信息
  toLogin (result) {
    let userInfo = result.detail.userInfo
    console.log(userInfo)
    // 调用接口获取登录凭证（code）
    wx.login({
      // 接口调用成功的回调函数
      success: async res => {
        // console.log(res)
        if (res.code) {// 如果返回结果存在code，发送请求获取登陆结果
          let dataBack = await request({
            url: '/user/wxlogin',
            method: 'post',
            data: {
              code: res.code,
              nickname: userInfo.nickName,
              avatar: userInfo.avatarUrl
            }
          })
          console.log(dataBack)
          let token = dataBack.data.token.split(' ')[1]
          // 将token保存在本地
          wx.setStorage({
            key: 'token',
            data: token,
            success: () => {
              // wx.switchTab({
              //   url: '../home/home',
              // })
              // 提示微信登录成功
              wx.showToast({
                title: '微信登录成功',
                success: () => {
                  setTimeout(() => {
                    // 返回到主页
                    wx.switchTab({
                      url: '../home/home',
                    })
                  }, 1000)
                }
              })
            }
          })
        }
      }
    })
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
