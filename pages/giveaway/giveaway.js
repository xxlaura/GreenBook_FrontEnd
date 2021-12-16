// pages/giveaway/giveaway.js
Page({

  /**
   * Page initial data
   */
  data: {

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

  },

  data: {
    height: 20,
    focus: false
  },
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  bindSubmit: function (e) {
    // let image = e.detail.value.image
    console.log(e.detail)
    let name = e.detail.value.name;
    let category = e.detail.value.category;
    let description = e.detail.value.description;
    let location = e.detail.value.location;

    let giveaway = {
      // image: image,
      name: name,
      category: category,
      description: description,
      location: location
    }
    console.log(giveaway)
    const page = this
    const auth = wx.getStorageSync('auth')
    const header = {
      "X-USER-TOKEN": auth.token,
      "X-USER-EMAIL": auth.email
    }
    // Post data to API
    wx.request({
      url: `http://localhost:3000/api/v1/items`,
      header: header,
      method: 'POST',
      data: {item: giveaway},
      success(res) {
        const items = res.data.items;
        page.setData ({
          items: items
        })
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/main/main'
        });
      }
    })
  },

  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord() {
    this.ctx.startRecord({
      success: (res) => {
        console.log('startRecord')
      }
    })
  },
  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },

  
  addPhoto() {
    wx.chooseMedia({
      count: 9,
      mediaType: ['image','video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles.tempFilePath)
        console.log(res.tempFiles.size)
      }
    })

  }


})