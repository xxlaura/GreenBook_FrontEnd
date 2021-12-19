// pages/landing/landing.js

Page({
  
  /**
   * 页面的初始数据
   */
  data: {

  },

  bindViewTap() {
    wx.navigateTo({
      url: '../giveaway/giveaway'
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  //发起网络请求
    let page = this;
    const auth = wx.getStorageSync('auth')
    const header = {
      "X-USER-TOKEN": auth.token,
      "X-USER-EMAIL": auth.email
    }
    wx.request({
      url: 'https://green-book-happyhour.herokuapp.com/api/v1', 
      header: header,
      method: "GET",
      success(res) {
        const items = res.data.items;
        page.setData ({
          items: items
        })
      }
    })
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