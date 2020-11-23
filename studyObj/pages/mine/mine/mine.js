import storeMixin from '../../../store/store-mixin';
Page({
  ...storeMixin,
  
  data: {
    avatarUrl:'../../../assets/img/head.png',
    share:"../../../assets/img/share.png",
    showLog: true,
    nickName: '',
  },
  onLoad(){
    let isLogin = this.$getState().isLogin;
    let userInfo = this.$getState().userInfo;
    this.setData({
      showLog: !isLogin,
      nickName: userInfo.nickName,
      avatarUrl: userInfo.avatarUrl,
    })
  },
  async login(info){
    if(info.detail.errMsg === 'getUserInfo:ok' ){
      let {userInfo} = await wx.getUserInfo();
      this.setData({
        showLog: false,
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl,
      });
      this.$dispatch({
        type: 'setUserInfo',
        value: userInfo
      });
    }
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