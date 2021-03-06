// miniprogram/pages/index/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "isFixed": false,
    "indicatorDots": true,
    "autoplay": true,
    "interval": 4500,
    "duration": 1500,
    "imgUrls": ["/images/swiper_1.jpg", "/images/swiper_2.jpg", "/images/swiper_3.jpg"],
    "mainNav": [{
      image: "/images/icon2/01.png",
      title: "京东超市",
      url: "#"
    }, {
      image: "/images/icon2/02.png",
      title: "京东超市",
      url: "#"
    }, {
      image: "/images/icon2/03.png",
      title: "京东超市",
      url: "#"
    }, {
      image: "/images/icon2/04.png",
      title: "京东超市",
      url: "#"
    }, {
      image: "/images/icon2/05.png",
      title: "京东超市",
      url: "#"
    }, {
      image: "/images/icon2/06.png",
      title: "京东超市",
      url: "#"
    }, {
      image: "/images/icon2/07.png",
      title: "京东超市",
      url: "#"
    }, {
      image: "/images/icon2/08.png",
      title: "京东超市",
      url: "#"
    }, {
      image: "/images/icon2/09.png",
      title: "京东超市",
      url: "#"
    }, {
      image: "/images/icon2/10.png",
      title: "京东超市",
      url: "#"
    }],
    products: [{
      image: "/images/pro1.png",
      title: "锐舞手机膜，全屏贴合，触控灵敏，限时秒杀，买一送一",
      price: 20,
      id: "0"
    }, {
      image: "/images/pro2.jpg",
      title: "协和专卖，维生素E乳",
      price: 100,
      id: "1"
    }, {
      image: "/images/pro1.png",
      title: "锐舞手机膜，全屏贴合，触控灵敏，限时秒杀，买一送一",
      price: 20,
      id: "2"
    }, {
      image: "/images/pro2.jpg",
      title: "协和专卖，维生素E乳",
      price: 20,
      id: "3"
    }, ]

  },
  toSearch: function() {
    wx.navigateTo({
      url: '/pages/search/index'
    })

  },
  toCategory: function() {
    wx.switchTab({
      url: '/pages/category/category'
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 滚动出现搜索条
  onPageScroll: function(e) {
    console.log(e.scrollTop);
    if (e.scrollTop > 20) {
      this.setData({
        isFixed: true
      })
    } else {
      this.setData({
        isFixed: false
      })
    }

  }
})