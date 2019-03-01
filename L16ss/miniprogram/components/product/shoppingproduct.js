// components/product/shoppingproduct.js
const tool = require("../../utils/product.js");

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    productId: { // 商品ID
      type: String, // 类型（必填）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        console.log(newVal);
        this.setData({
          id: newVal
        });

      }
    },
    selected: { // 
      type: Array, // 类型（必填）
      value: [], // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        console.log(newVal);
        this.setData({
          arr: newVal
        });

      }
    },
    shoppingId: { // 商品ID
      type: String, // 类型（必填）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        console.log(newVal);
        this.setData({
          shoppingId: newVal
        });

      }
    },
    image: { // 
      type: String, // 类型（必填）
      value: './default.png', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        console.log(newVal);
        this.setData({
          image: newVal
        });

      }
    },
    title: { // 
      type: String, // 类型（必填）
      value: '商品标题', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        console.log(newVal);
        this.setData({
          title: newVal
        });

      }
    },
    price: { // 
      type: Number, // 类型（必填）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        console.log(newVal);
        this.setData({
          price: newVal
        });

      }
    },
    option: { // 
      type: String, // 类型（必填）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        console.log(newVal);
        this.setData({
          option: newVal
        });

      }
    },
    count: { // 
      type: Number, // 类型（必填）
      value: 1, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        console.log(newVal);
        this.setData({
          count: newVal
        });
      }
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    id: 0,
    shoppingId: 0,
    arr: [],
    image: '',
    title: '',
    price: 0.00,
    option: '',
    count: 1

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // CheckBox勾选事件
    checkbox(res) {
      this.setData({
        arr: res.detail
      });
      this.triggerEvent('change', [this.data.arr, this.data.shoppingId, this.data.count]);
    },
    // 数量减1
    reduce: function() {
      this.setData({
        count: (this.data.count > 1) ? (this.data.count - 1) : 1
      });

      this.triggerEvent('change', [this.data.arr, this.data.shoppingId, this.data.count]);
    },
    // 数量加1
    add: function() {
      this.setData({
        count: ++this.data.count
      });
      this.triggerEvent('change', [this.data.arr, this.data.shoppingId, this.data.count]);
    },
    deleteShopping: function (res) {
      var id = res.currentTarget.dataset.id;
      wx.showModal({
        title: '提示',
        content: '是否移除该商品？',
        success: (res) => {
          if (res.confirm) {
            tool.deleteShopping(id).then(res => {
              this.triggerEvent('delete', null);
            }).catch();
          }
        }
      });
    }


  }
})