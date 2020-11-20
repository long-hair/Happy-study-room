// pages/component/chooseSeat/area/area.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
    }

    

  },
  // 修改index


  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeIndex(ev){
      const index = ev.currentTarget.dataset.index
      this.triggerEvent('indexChange',index)
    },

  }
})
