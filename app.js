// app.js
App({
  onLaunch() {
    const app = this
    wx.login({
      success (res) {

        if (res.code) {
          wx.request({
            url: `http://localhost:3000/api/v1/login`,
            method: 'POST',
            data: {
              code: res.code
            },
            success(res){
              console.log(res.data)
              wx.setStorageSync('auth', res.data.auth)
            }
          })
        } else {
          console.log('Error' + res.errMsg)
        }
      }
    })
  },
  globalData: {
    baseUrl: 'http://localhost:3000/api/v1',
    // baseUrl: 'your production url'
  }
})
