const users=require('../db/Usernodel.js')
let getUserAccount=(req,res)=>{
    users.find()
    .then((data)=>{
        res.send({err:0,msg:'查询ok',data:data});
    })
    .catch((err)=>{
        res.send({err:-1,msg:'查询no ok'});
    })
}
let addUserAccount=(req,res)=>{
    let{user,sex,phone,email,address}=req.body;
    users.insertMany({user,sex,phone,email,address})
    .then((data)=>{
        res.send({err:0,msg:"添加成功"});
    })
    .catch((err)=>{
        res.send({err:-1,msg:'添加失败'});
    })
}
let delUserAccount=(req,res)=>{
    let id=req.body.id;
    users.deleteMany({
        _id:id
    })
    .then((data)=>{
        res.send({err:0,msg:"删除成功"});
    })
    .catch((err)=>{
        res.send({err:-1,msg:'删除失败'});
    })
}
module.exports={
    getUserAccount,
    addUserAccount,
    delUserAccount
}