// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head:'../../../assets/img/head.png',
    share:"../../../assets/img/share.png",
    list:[
      {
        img:'../../../assets/img/shop.png',
        mes:'卡券商城',
        btn:'前往购买 >'
      },
      {
        img:'../../../assets/img/coupon.png',

        mes:'我的卡券',
        btn:'n张 >'
      },
      {
        img:'../../../assets/img/money.png',

        mes:'钱包余额（￥25.5元）',
        btn:'充值 >'
      },
      {
        img:'../../../assets/img/problem.png',

        mes:'常见问题',
        btn:'查看 >'
      },
      {
        img:'../../../assets/img/wx.png',

        mes:'联系商家',
        btn:'拨打电话 >'
      }
    ]

  },


  login:function (info){
    if(info.detail.errMsg==='getUserInfo:ok'){
      this.setData({head:info.detail.userInfo.avatarUrl})
      console.log('确认')
      getApp().store.dispatch({
        type:'login',
        value:true
      })
    }else{
        wx:wx.showToast({
          title: '登录失败请重试！',
          duration: 0,
          icon: icon,
          image: 'image',
          mask: true,
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    }
    console.log(info);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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