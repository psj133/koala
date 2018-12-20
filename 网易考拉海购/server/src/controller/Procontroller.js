const Pro=require('../db/Promodel.js');
let getProduct=(req,res)=>{
    Pro.find()
    .then((data)=>{
        res.send({error:1,msg:'查询成功',data:data})
    })
    .catch((err)=>{
        res.send({error:2,msg:'查询失败'})
    })
}
let addProduct=(req,res)=>{
    let{path,url,name}=req.body;
    Pro.insertMany({path,url,name})
    .then((data)=>{
        res.send({error:0,msg:'添加成功'})
    })
    .catch((err)=>{
        res.send({error:-1,msg:'添加失败'})
    })
}
let delProduct=(req,res)=>{
    let id=req.body.id;
    Pro.deleteOne({
        _id:id
    })
    .then((data)=>{
        res.send({error:3,msg:'删除成功'})
    })
    .catch((err)=>{
        res.send({error:4,msg:'删除失败'})
    })
}
let updateProduct=(req,res)=>{
    let {id,path,url,name}=req.body;
    Pro.updateMany({_id:id},{path,url,name})
    .then((data)=>{
        res.send({error:5,msg:'修改成功'})
    })
    .catch((err)=>{
        res.send({error:6,msg:"修改失败"})
    })
}
let pullProduct=(req,res)=>{
    let {id,pull}=req.body;
    Pro.updateMany({_id:id},{pull,pull})
    .then((data)=>{
        res.send({error:5,msg:'修改成功'})
    })
    .catch((err)=>{
        res.send({error:6,msg:"修改失败"})
    })
}
 let delProducts=(req,res)=>{
   
//     // 	// 批量删除
    let id1=req.body.id1;
    let id2=req.body.id2;
    let id3=req.body.id3;
    console.log(req.body);
	Pro.remove({_id:{$in:[id1,id2,id3]}})
	.then((data)=>{
    	res.send({err:0,msg:'删除ok'})
    })
    .catch((err)=>{
    	res.send({err:-1,msg:'删除nook'})
    })
 }
let getProductByKw=(req,res)=>{
    let keyword=req.body.keyword;
    let reg=new RegExp(keyword);
    Pro.find({$or:[
		{name:{$regex:reg }},
		{url:{$regex:reg }}
		]})
	.then((data)=>{
		res.send({err:-2,msg:'查询ok',data:data})
	})
	.catch((err)=>{
		res.send({err:-3,msg:'查询nook'})
	})

}
let getProductById=(req,res)=>{
    let id=req.body.id
	Pro.find({_id:id})
	.then((data)=>{
		res.send({err:0,msg:'查询ok',data:data})
	})
	.catch((err)=>{
		res.send({err:-1,msg:'查询nook'})
	})
}


module.exports={
    getProduct,
    addProduct,
    delProduct,
    updateProduct,
    pullProduct,
    delProducts,
    getProductByKw,
    getProductById
}