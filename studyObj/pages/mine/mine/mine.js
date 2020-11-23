// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head:'../../../assets/img/head.png',
    share:"../../../assets/img/share.png",

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
  buyCardAction(){
    wx.navigateTo({
      url: '/pages/mine/cardShop/cardShop',
    })
  },
  myCardAction(){
    wx.navigateTo({
      url: '/pages/mine/myCard/myCard',
    })
  },
  payAction(){
    wx.navigateTo({
      url: '/pages/mine/money/money',
    })
  },
  qsAction(){
    wx.navigateTo({
      url: '/pages/mine/question/question',
    })
  },
  callAction(){
    console.log('callAction');
  },
  detail(){
    console.log('detail');
  }

})