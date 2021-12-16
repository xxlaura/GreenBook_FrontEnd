// pages/items/items.js
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: '../items/photos'
    }
  },
  /**
   * Page initial data
   */
  data: {
    imgUrls: [
      '../items/photos/cooljacket.png',
      '../items/photos/cooljacket copy.png',
      '../items/photos/cooljacket copy 2.png',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 500,
    Height: ""
  },

  imgHeight: function(e) {
    const winWid = wx.getSystemInfoSync().windowWidth;
    const imgh = e.detail.height;
    const imgw = e.detail.width;
    const swiperH = winWid*imgh/imgw + "px"
    this.setData({
      Height: swiperH
    })
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})