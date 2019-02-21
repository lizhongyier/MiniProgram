// components/topbar/topbar.js
Component({
// 使全局样式生效
  options: {
    addGlobalClass: true,
  },


  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    menuMsg: [{
      icon: "fa-home",
      title: "首页",
      url: "#"
    }, {
      icon: "fa-category",
      title: "分类搜索",
      url: "#"
    }, {
      icon: "fa-shopping-cart",
      title: "购物车",
      url: "#"
    }, {
      icon: "fa-user",
      title: "我的京东",
      url: "#"
    }, {
      icon: "fa-footprint",
      title: "浏览记录",
      url: "#"
    }]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击菜单显示
    tapMenu: function (e) {
      console.log(e);
      this.setData({
        showMenu: !this.data.showMenu
      });

    },
    toHome: function () {
      wx.switchTab({
        url: '/pages/index/home'
      })

    }

  }
})
