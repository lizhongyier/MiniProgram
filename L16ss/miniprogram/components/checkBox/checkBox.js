// components/check/check.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: { // 默认的值
      type: String, // 类型（必填）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        this.setData({
          value: newVal
        });
      }
    },
    data: { // 关联数组
      type: Array, // 类型（必填）
      value: [], // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        let flag = false;
        newVal.forEach(item => {
          if (item == this.data.value) {
            flag = true;
          }
        });
        this.setData({
          selected: flag,
          arr: newVal
        });
      }
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    value: '',
    selected: false,
    arr: []

  },

  /**
   * 组件的方法列表
   */
  methods: {
    select: function() {
      // 如果选中则把value放入到arr中
      // 如果取消选中则把value从arr中移除
      var tmp = this.data.arr;
      if (this.data.selected) {
        tmp = tmp.filter(item => {
          return (item != this.data.value);
        });
      } else {
        tmp.push(this.data.value);
      }

      // 修改arr数组，然后值通过select事件传递出去
      this.setData({
        selected: !this.data.selected,
        arr: tmp
      });
      // 自定义事件把值传递出去
      this.triggerEvent('select', tmp);

    }
  }
})