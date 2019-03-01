// miniprogram/pages/shoppingCart/index.js
const pproduct = require("../../utils/product.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    all: false,
    count: 0,
    money: 0,
    selected: [],
    products: []


  },
  // 勾选或者加减数量的响应事件
  changeHandler(res) {
    console.log(res);
    let arr = res.detail[0];
    let id = res.detail[1];
    let count = res.detail[2];
    let all = false;
    if (arr.length == this.data.products.length) {
      all = true;
    }
    let products = this.data.products.map(item => {
      if (item._id == id) {
        item.count = count;
      }
      return item;
    });
    this.setData({
      all: all,
      selected: arr,
      products: products
    });
    this.sum();
  },

  selectAll(res) {
    let selected = [];
    if (res.detail) {
      // 全选操作
      this.data.products.forEach(item => {
        selected.push(item._id);
      });
    }
    this.setData({
      all: res.detail,
      selected: selected
    });
    this.sum();
  },
  // 计算数量和总价
  sum() {
    let count = 0;
    let money = 0;
    this.data.products.forEach(item => {
      let flag = false;
      this.data.selected.forEach(i => {
        if (item._id == i) {
          flag = true;
        }
      });
      if (flag) {
        count += item.count;
        money += (item.count * item.price);
      }
    });
    this.setData({
      count: count,
      money: money
    });
  },
  deleteHander: function () {
    pproduct.getShoppingcart().then(res => {
      console.log(res.data);
      this.setData({ products: res.data });
    }).catch();
  },

  // 传出后及时把selected修改了
  // checkbox(res) {
  //   console.log(res)
  //   this.setData({
  //     selected: res.detail
  //   });

  //   console.log(this.data.selected);
  // },


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
    // 隐藏底部的菜单
    wx.hideTabBar();
 // 获取购物车云列表
    pproduct.getShoppingcart().then(res => {
      console.log(res.data);

      console.log(res.data[0].size)
      this.setData({
        products: res.data
      })
    }).catch(err => { })

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