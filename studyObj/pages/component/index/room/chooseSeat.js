// pages/component/index/room/chooseSeat.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  // 立即预约
 
  /**
   * 组件的方法列表
   */
  methods: {
    reserve(ev){
      wx.navigateTo({
        url: `/pages/index/sunscribe/subscribe?index=${ev.target.dataset.type}`,
      })
    },

  }
})
