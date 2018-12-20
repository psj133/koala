const scret='hehe'
const jwt=require('jsonwebtoken')
// 验证token的中间件
let checkTokenMiddle=(req,res,next)=>{

	 let token=req.body.token
	jwt.verify(token, scret, function(err, decoded) {
	  if (err) { return res.send({err:-999,msg:"token验证失败"})}
	  next()
	});
	
}
// 创建token
let createToken=(user)=>{
 let payload={
	user:user
	}
  return jwt.sign(payload, scret,{expiresIn:'2h'});
}

module.exports={
	checkTokenMiddle,
	createToken
}