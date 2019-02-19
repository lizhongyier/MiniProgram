// miniprogram/pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'item-1',
    itemIndex: 0,
    height: 0,
    showMenu: false,
    products: [{
      src: "/images/pro1.png",
      title: "手机膜"
    }, {
      src: "/images/pro1.png",
      title: "手机膜"
    }],
    category: [{
      title: '热门推荐',
      id: 1,
      product: [{
        src: "/images/pro1.png",
        title: "手机膜"
      }, {
        src: "/images/pro1.png",
        title: "手机膜"
      }]
    }, {
      title: '热门推荐',
      id: 2,
      product: [{
        src: "/images/pro2.jpg",
        title: "维生素"
      }, {
        src: "/images/pro2.jpg",
        title: "维生素"
      }]
    }, {
      title: '热门推荐',
      id: 3,
      product: [{
        src: "/images/pro1.png",
        title: "手机膜"
      }, {
        src: "/images/pro1.png",
        title: "手机膜"
      }]
    }, {
      title: '热门推荐',
      id: 4,
      product: [{
        src: "/images/pro2.jpg",
        title: "维生素"
      }, {
        src: "/images/pro2.jpg",
        title: "维生素"
      }]
    }, {
      title: '热门推荐',
      id: 5,
      product: [{
        src: "/images/pro1.png",
        title: "手机膜"
      }, {
        src: "/images/pro1.png",
        title: "手机膜"
      }]
    }, {
      title: '热门推荐',
      id: 6,
      product: [{
        src: "/images/pro2.jpg",
        title: "维生素"
      }, {
        src: "/images/pro2.jpg",
        title: "维生素"
      }]
    }, {
      title: '热门推荐',
      id: 7,
      product: [{
        src: "/images/pro1.png",
        title: "手机膜"
      }, {
        src: "/images/pro1.png",
        title: "手机膜"
      }]
    }, {
      title: '热门推荐',
      id: 8,
      product: [{
        src: "/images/pro2.jpg",
        title: "维生素"
      }, {
        src: "/images/pro2.jpg",
        title: "维生素"
      }]
    }, {
      title: '热门推荐',
      id: 9,
      product: [{
        src: "/images/pro1.png",
        title: "手机膜"
      }, {
        src: "/images/pro1.png",
        title: "手机膜"
      }]
    }, {
      title: '热门推荐',
      id: 10,
      product: [{
        src: "/images/pro2.jpg",
        title: "维生素"
      }, {
        src: "/images/pro2.jpg",
        title: "维生素"
      }]
    }, {
      title: '热门推荐',
      id: 11,
      product: [{
        src: "/images/pro1.png",
        title: "手机膜"
      }, {
        src: "/images/pro1.png",
        title: "手机膜"
      }]
    }, {
      title: '热门推荐',
      id: 12,
      product: [{
        src: "/images/pro2.jpg",
        title: "维生素"
      }, {
        src: "/images/pro2.jpg",
        title: "维生素"
      }]
    }, {
      title: '热门推荐',
      id: 13,
      product: [{
        src: "/images/pro1.png",
        title: "手机膜"
      }, {
        src: "/images/pro1.png",
        title: "手机膜"
      }]
    }],
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
  // 点击菜单显示
  tapMenu: function(e) {
    console.log(e);
    this.setData({
      showMenu: !this.data.showMenu
    });

  },
  // 左侧的点击事件
  selectCategory(e) {
    const index = e.target.dataset.index;
    const id = e.target.dataset.id;
    const product = e.target.dataset.product;
    this.setData({
      itemIndex: index,
      toView: 'item-' + id,
      products: product

    });

  },
  toSearch: function() {
    wx.navigateTo({
      url: '/pages/search/index'
    })

  },
  toHome: function() {
    wx.switchTab({
      url: '/pages/index/home'
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // 创建元素选择器
    const query = wx.createSelectorQuery()
    query.select('#scroll-category').boundingClientRect()
    query.selectViewport().scrollOffset();
    query.exec((res) => {
      // 修改滚动的高度
      this.setData({
        height: res[0].height
      });
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