// miniprogram/pages/user/user.js
const tool = require("../../utils/user.js");
const file=require("../../utils/file.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: "",
    id:"",
    country:"",
    province:"",
    city:"",
    gender:"",
    sex:["女","男"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取用户信息
    tool.getUser().then(res => {
      console.log(res);
      this.setData({
        avatar: res.data[0].avatarUrl,
        id: res.data[0]._id,
        country: res.data[0].country,
        province:res.data[0].province,
        city:res.data[0].city,
        gender:this.data.sex[res.data[0].gender]
      })
    }).catch();

    wx.getUserInfo({
      success(res) {
        console.log(res.userInfo);
        tool.addUser(res.userInfo);
      }
    });

    // 查看是否授权
    wx.getSetting({
      success(res) {
        // if (res.authSetting['scope.userInfo']) {
        //   // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        //   wx.getUserInfo({
        //     success(res) {
        //       console.log(res.userInfo)
        //     }
        //   })
        // }
      }
    });

  },
  bindGetUserInfo(e) {
    console.log(e);

  },
  // 切换头像
  changeAvatar: function(res) {
    console.log(res.id);
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:(res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        // 显示上传的对话框
        wx.showLoading({
          title: '上传中....',
        })
        // 图片路径
        let path = tempFilePaths[0];
        // 图片的名称
        let name = path.substr(path.length - 20, 20);
        // 上传图片
        file.uploadImage(path, 'upload/' + name).then(res => {
          // 隐藏loading对话框
          wx.hideLoading();
          // 修改头像显示
          this.setData({
            avatar: res.fileID
          });
          tool.setUserAvatar(res.id, res.fileID);
          })
          .catch(err=>{
            console.log(err)
          })
      }
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