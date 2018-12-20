const Pic=require("../db/Picmodel.js")
/* 
    图片管理相关API接口
    1.查询接口
*/
let getPicture=(req,res)=>{
    Pic.find()
    .then((data)=>{
        res.send({err:1,msg:'查询成功',data:data});
    })
    .catch((err)=>{
        res.send({err:2,msg:'查询失败'});
    })
}
let getPictureById=(req,res)=>{
    let id=req.body.id
	Pic.find({_id:id})
	.then((data)=>{
		res.send({err:0,msg:'查询ok',data:data})
	})
	.catch((err)=>{
		res.send({err:-1,msg:'查询nook'})
	})
}
/*
    2.添加图片接口
    根据数据模型中的字段，一一插入数据库中
*/
let addPicture=(req,res)=>{
     let {path,url,name,type}=req.body;
     Pic.insertMany({path,url,name,type})
     .then((data)=>{
         res.send({err:0,msg:'添加成功'});
     })
     .catch((err)=>{
         res.send({err:-1,msg:'添加失败'});
     })
}
/* 
    3.删除图片接口
    根据id删除
*/
let delPicture=(req,res)=>{
    let id=req.body.id;
    Pic.deleteOne({
        _id:id
    })
    .then((data)=>{
        res.send({err:3,msg:'删除成功'});
    })
    .catch((err)=>{
        res.send({err:4,msg:'删除失败'});
    })
}
/* 
    4.修改图片接口
    根据id来修改
*/
let updatePicture=(req,res)=>{
    let {id,path,url,name}=req.body;
    Pic.updateMany({_id:id},{path,url,name})
    .then((data)=>{
        res.send({err:5,msg:'修改成功'});
    })
    .catch((err)=>{
        res.send({err:6,msg:'修改失败'});
    })
}
/* 
    5.发布接口
    根据id来修改发布状态
*/
let pushPicture=(req,res)=>{
    let {id,push}=req.body;
    Pic.updateOne({_id:id},{push:push})
    .then((data)=>{
        res.send({err:7,msg:'发布成功'});
    })
    .catch((err)=>{
        res.send({err:8,msg:'发布失败'});
    })
}
/* 
   6.模糊查询接口
   根据关键字查询
 */
let getPictureByKw=(req,res)=>{
    let keyword=req.body.keyword;
    let reg=new RegExp(keyword);
    Pic.find({$or:[
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
/* 
    7.分类查询接口
    先修改类型，再根据类型查询
*/
let getPictureByType=(req,res)=>{
    let type=req.body.type;
     Pic.find({type})
    .then((data)=>{
        res.send({err:-4,msg:'查询ok',data:data});
    })
    .catch((err)=>{
        res.send({err:-5,msg:'失败'});
    })
}
let delPictures=(req,res)=>{
   
    //     // 	// 批量删除
        let id1=req.body.id1;
        let id2=req.body.id2;
        let id3=req.body.id3;
        console.log(req.body);
        Pic.remove({_id:{$in:[id1,id2,id3]}})
        .then((data)=>{
            res.send({err:0,msg:'删除ok'})
        })
        .catch((err)=>{
            res.send({err:-1,msg:'删除nook'})
        })
     }
/* 
    8.分页查询
*/
let getPictureByPage=(req,res)=>{
    let page=Number(req.body.page)||1;
    let pageSize=Number(req.body.pageSize)||2;
    let total=0
    Pic.find()
    .then((data)=>{
        total=data.length
        return  Pic.find().skip(pageSize*(page-1)).limit(pageSize)
    })	
   .then((data)=>{
       let obj={
          list:data,// 某一页的具体数据信息
          total:total,// 总的数据条数
          pageSize:pageSize,//每页显示条数
          nowpage:page //当前页数
       }
       res.send({err:0,msg:'查询ok',data:obj})
   })
   .catch((err)=>{
       res.send({err:-1,msg:'查询nook'})
   })
}
module.exports={
    getPicture,
    addPicture,
    delPicture,
    updatePicture,
    pushPicture,
    getPictureByKw,
    getPictureByType,
    getPictureByPage,
    delPictures,
    getPictureById
}