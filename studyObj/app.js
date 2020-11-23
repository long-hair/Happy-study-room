import store from './store/index';
import request from './http/request';
import {CHECKLOGIN_API} from './http/api';
App({
  store,

  onLaunch: function () {

    this.getUserInfo();

    this.checkLogin();
    
  }, 

  async getUserInfo(){
    const result = await wx.getSetting();
    if(result.authSetting['scope.userInfo']){
      const { userInfo } = await wx.getUserInfo();
      store.dispatch({
        type: 'setUserInfo',
        value: userInfo
      })
    }
  },
  // 检查登录是否过期
  async checkLogin(){
    const token = wx.getStorageSync('TOKEN');
    if(token){
      request.get(CHECKLOGIN_API).then((msg)=>{
        //登录正常
        console.log(msg);
      }).catch(error=>{
        //登录过期，从新登录
        console.log(error);
      })
    }else{
      this.login();
    }
  },
// 登录 
  login(){

    wx.login({
     success({code}){
       console.log(code);
       wx.request({
         url: 'http://localhost:3000/api/auth/send_code',
         method:'POST',
         data:{
           code
         },
         success(res){
          //  登录第六步，获取登录态
          const token = res.data.token;
          // 第七步，保存登录态
          wx.setStorageSync('TOKEN', token)
            console.log(res);
         },
         fail(error){
           console.log(error);
         }
       })
     }
    })
  }
})
