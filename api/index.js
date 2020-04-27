// 封装在主页的网络请求
const BASE_URL = 'http://localhost:3000/api'
// 封装get方式获取信息的方法
export function request ({ url, method = 'get', data = {}, header = {} }) {
  wx.showLoading({
    title: '加载中...',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method,
      data,
      header,
      success (backData) {
        if (backData.data.status === 0) {
          resolve(backData)
        }
      },
      fail (err) {
        reject(err)
      },
      complete () {
        wx.hideLoading({
        })
      }
    })
  })
}

// 封装验证是否登录的方法
export function isLogin (){
  const TOKEN = wx.getStorageSync('token')
  console.log(TOKEN)
  if (TOKEN) {
    return true
  } else {
    return false
  }
}
