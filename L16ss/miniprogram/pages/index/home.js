// miniprogram/pages/index/home.js
const product=require("../../utils/product.js")
const mainnav = require("../../utils/mainNav.js")
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
    "mainNav": [],
    products: [],
    page:1

  },
  // toSearch: function() {
  //   wx.navigateTo({
  //     url: '/pages/search/index'
  //   })

  // },
  toSearch: function () {
    wx.switchTab({
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
    mainnav.getmainNav().then(res => {
      console.log(res.data)
      this.setData({
        mainNav: res.data
      });
      console.log(res);
    }).catch(() => {
      this.setData({
        mainNav: []
      });
    });


    product.getProductList().then(res => {
      this.setData({
        products: res.data
      });
      console.log(res);
    }).catch(() => {
      this.setData({
        products: []
      });
    });



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
    wx.showTabBar();

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
    product.getProductList(10,this.data.page+1).then(res=>{
      this.setData({
        products:[
          ...this.data.products,
          ...res.data
        ],
        page: this.data.page + 1
      });
      console.log(res);

    }).catch(err=>{
      console.log(err)
    })
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