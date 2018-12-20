const express=require('express');
const router=express.Router();
const Pic=require('../controller/Piccontroller.js');
//图片接口
router.get('/getPicture',Pic.getPicture);
module.exports=router;