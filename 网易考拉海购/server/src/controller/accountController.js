const Account=require("../db/accountModel.js");
const tool=require("../tool/tools.js");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
let reg=(req,res)=>{
    //获取数据
    console.log(req.body);
    let {user,pass}=req.body
    Account.find({user})
    .then((data)=>{
        if (data.length>=1) {
            throw '用户名存在'
        }else{
          var salt = bcrypt.genSaltSync(10);
          var hash = bcrypt.hashSync(pass, salt);
          return Account.insertMany({user:user,pass:hash})
        }
    })
    .then((data)=>{
         res.send({err:0,msg:'注册成功'})
    })
    .catch((error)=>{
        res.send({err:-1,msg:error})
    })
 
 
 }
let sign=(req,res)=>{
    let {user,pass}=req.body;
    Account.find({user})
    .then((data)=>{
        if(!data.length){
            throw "用户名不存在"
        }else{
            let hash=data[0].pass;
            let result=bcrypt.compareSync(pass,hash)
            if(!result){
                throw '用户名密码错误'
            }
            let token=tool.createToken(user);
            res.send({err:0,msg:'登录ok',token:token})
        }
    })
    .catch((err)=>{
        res.send({err:-1,msg:err})
    })
}
let test=(req,res)=>{
    // 获取token
    let token=req.body.token
	jwt.verify(token, 'hehe', function(err, decoded) {
	  if (err) { return res.send({err:-999,msg:"token验证失败"})}
	  res.send('token ok')
	});
}
module.exports={
    sign,reg,test
}