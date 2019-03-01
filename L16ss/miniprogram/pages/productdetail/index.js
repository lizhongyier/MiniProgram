// miniprogram/pages/productdetail/index.js
const productdetail = require("../../utils/product.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pop: false,
    image: "",
    title: "",
    price: "",
    id: "",
    color: [],
    size: [],
    select: {
      color: "",
      size: "",
      count: 1
    }

  },
  showPop: function() {
    this.setData({
      pop: true
    })
  },
  hidePop: function() {
    this.setData({
      pop: false
    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: "加载中",
    });
    productdetail.getProductDetail(options.id).then(res => {
      console.log(res.data);
      this.setData({
        image: res.data.image,
        title: res.data.title,
        price: res.data.price,
        id: res.data._id,
        color: res.data.color,
        size: res.data.size,
        select: {
          color: res.data.color[0],
          size: res.data.size[0],
          count: 1
        }
      });
      wx.hideLoading();
    }).catch(err => {
      wx.hideLoading();
    })
  },

  // 选择颜色
  chooseColor:function(res){
    console.log(res);
    let c=res.currentTarget.dataset.color;
    console.log(c);
    let select=this.data.select;
    select.color=c;
    this.setData({
      select:this.data.select
    })
  },
  // 选择型号
  chooseSize: function (res) {
    console.log(res);
    let c = res.currentTarget.dataset.size;
    console.log(c);
    let select = this.data.select;
    select.size = c;
    this.setData({
      select: select
    })
  },

  // 购买数量
  reduce:function(){
    let select = this.data.select;
    if (select.count>1)
    select.count = --select.count
    this.setData({
      select: select

    })

  },
  add: function () { 
    let select = this.data.select;
    select.count = ++select.count
    this.setData({
      select: select

    })
  },
  // 添加到购物车云列表
  addshopingcart:function(){
    let data = {
      image:this.data.image,
      title:this.data.title,
      price: this.data.price,
      product_id: this.data.id,
      ...this.data.select
    };
    console.log(data);
    productdetail.addShoppingcart(data).then(res=>{
      this.setData({
        pop:false
      });
      wx.showToast({
        title: "成功！",
        icon: 'success',
        duration: 2000
      })
    }).catch(err=>{
     console.log(err)
    })

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

  }
})