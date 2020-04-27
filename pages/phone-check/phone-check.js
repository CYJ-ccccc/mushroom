// pages/phone-login/phone-login.js
import { request } from '../../api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 手机号码
    phoneNum: '18352408797',
    // 手机验证码
    vcode: null,
    time: 0
  },
  // 绑定输入框数据
  getPhone (event) {
    this.setData({
      phoneNum: event.detail.value
    })
  },
  setCode (event) {
    console.log(event)
    this.setData({
      vcode: event.detail.value
    })
  },
  // 获取手机验证码
  async getCode () {
    // 发送请求
    let res = await request({
      url: '/user/vcode',
      data: {
        phone: this.data.phoneNum
      }
    })
    console.log(res)
    wx.showToast({
      title: '验证码:' + res.data.vcode,
      duration: 5000
    })
    // 开始倒计时
    this.setData({
      time: 60,
    })
    // 添加一个定时器：判断当前按钮是否可以点击
    let timer = setInterval(() => {
      if (this.data.time != 0) {
        this.setData({
          time: --this.data.time
        })
        // console.log(this.data.time)
      } else {
        // 当时间为0时，定时器清空
        clearInterval(timer)
      }
    }, 1000)
  },
  // 验证登录
  async logincheck () {
    console.log(this.data.phoneNum)
    console.log(this.data.vcode)
    let res = await request({
      url: '/user/login',
      data: {
        phone: this.data.phoneNum,
        vcode: this.data.vcode
      },
      method: 'post'
    })
    // console.log(res)
    let token = res.data.token.split(' ')[1]
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
          title: '验证成功',
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
