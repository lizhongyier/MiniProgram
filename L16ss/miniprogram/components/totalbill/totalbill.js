// components/totalbill/totalbill.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number, // 类型（必填）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        this.setData({
          count: newVal
        });
      }
    },
    money: {
      type: Number, // 类型（必填）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        this.setData({
          money: newVal.toFixed(3)
        });
      }
    },
    all: {
      type: Boolean, // 类型（必填）
      value: false, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        this.setData({
          all: newVal
        });
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    money: 0,
    all: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select: function() {
      this.setData({
        all: !this.data.all
      });
      this.triggerEvent('select', this.data.all);
    }

  }
})