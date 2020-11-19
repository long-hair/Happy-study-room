// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:getApp().store.getState().isLogin,
    swiper: ['/assets/img/swiper1.svg', '/assets/img/swiper2.svg'],
    space: [{
      src: '/assets/img/swiper1.svg',
      mes: '在开放的单人区学习，你可以感受周围浓烈的学习氛围，无论是上网还是看书、刷题、乃至办公，效果都极佳！更有机会认识一群爱学习的好书友!'
    },
    {
      src: '/assets/img/swiper1.svg',
      mes: '在开放的单人区学习，你可以感受周围浓烈的学习氛围，无论是上网还是看书、刷题、乃至办公，效果都极佳！更有机会认识一群爱学习的好书友!'
    }],
    location:'../../../assets/img/location.png'
    ,flow:['线上付费预约','门店扫码开门','对应位置入座','扫码开灯学习'],
    matters:[
      {
        title:'关于声音控制',
        mes:'在自习室内，请自觉保持安静。请控制声量，将手机调成静音状态。如有接电话需求，请移步公共区域。'
      },
      {
        title:'关于饮食',
        mes:'请不要在自习室吃带有浓厚气味的食品。'
      },
      {
        title:'关于座位',
        mes:'请勿占用无人座位，请勿随意涂鸦，离开座位前请将椅子归位，并扫码关灯。'
      }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().store.subscribe(()=>{
      this.setData({isLogin:getApp().store.getState().isLogin})
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})