// components/product/product.js
Component({
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
    image: { // 图片
      type: String, // 类型（必填）
      value: './default.png', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        this.setData({
          image: newVal
        });
        console.log(newVal);
      }
    },
    title: { // 商品标题
      type: String, // 类型（必填）
      value: '商品名称', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        this.setData({
          title: newVal
        });
      }
    },
    price: { // 价格
      type: Number, // 类型（必填）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        this.setData({
          price: newVal
        });
      }
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    id: 0,
    image: '',
    title: "",
    price: 0.00


  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})