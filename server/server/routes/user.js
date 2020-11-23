const Router = require('koa-router');
const axios = require('axios');
const router = new Router({prefix:'/api/user'});
const User = require('../model/user');
const JWT = require('jsonwebtoken');

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

router.use(async (ctx, next) => {
  const token = ctx.req.headers.authorization.replace("Bearer ", "");
  try {
    const { userid } = JWT.verify(token, "hello world");
    ctx.userid = userid;
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = {
      message: '登录过期，请从新登录!'
    }
  }
});

// 检查登录态
router.get('/check_login',async (ctx) => {
  ctx.status = 200;
}
)
module.exports = router;

                                                                                                    