import store from './store/index'
App({
  store,

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
 
    this.checkLogin();
    
  }, 
  // 检查登录态
  checkLogin(){
    const token = wx.getStorageSync('TOKEN');
    if(token){
      wx.request({
        url: 'http://localhost:3000/api/auth/check_login',
        method:'GET',
        data:{
          token
        },
        success :({statusCode})=>{
          if(statusCode == 200){
            console.log('成功')
          }else{
            console.log('登陆过期')
            this.login();
          }
        },
        fail :(err)=>{
          console.log(err);
          this.login()
        }
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
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
