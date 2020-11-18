const Router = require('koa-router');
const axios = require('axios');
const router = new Router({prefix:'/api/auth'});
const User = require('../model/user');
const JWT = require('jsonwebtoken')

router.post('/send_code',async(ctx)=>{
  // 验证参数
  ctx.verifyParams({
    code:"string"
  });
  
  // 第三步将code appid aoosecret发送给微信平台
  // GET https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}T&js_code=${code}&grant_type=authorization_code
  const appid = 'wx8d8ca10ddb4d2cbb';
  const secret="3f585340a14ced716f42cf5acad99685"
  const code = ctx.request.body.code
  const result = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`)
 
//  登录第四步 获取openid和session_key
  if(result.status === 200){
      const user = await User.findOne({openid:result.data.openid})
      if(user){
        console.log('老用户')
      }else{
        const newUser = await new User({openid: result.data.openid}).save();
      }
      // 登陆第五步响应登录态
  }else{
    console.log('换取openid失败了');
  }
  const token = JWT.sign({
    openid:result.data.openid
  },'hello girl',{expiresIn:'7d'});
  ctx.status = 200;
  ctx.body = {
    message:'ok',
    token,
    openid:result.data.openid

  }
  // 隐藏步骤:静默注册

})


// 检查登录态
router.get('/check_login',async(ctx)=>{
  ctx.verifyParams({
    token:'string',
  });
  const result =  JWT.verify(ctx.request.query.token,'hello girl');
  const user = await User.findOne({openid:result.openid});
  if(user){
    ctx.status = 200;
    ctx.body = {
      message:'登陆成功'
    }}
    else{
      ctx.status = 401;
      ctx.body= {
        message:'登陆过期，请宠幸登录'
      }
    }
  }

)
module.exports = router;

                                                                                                    