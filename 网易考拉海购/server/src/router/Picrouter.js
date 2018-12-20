const express=require('express');
const router=express.Router();
const Pic=require('../controller/Piccontroller.js');
//图片接口
router.get('/getPicture',Pic.getPicture);
router.post('/addPicture',Pic.addPicture);
router.post('/delPicture',Pic.delPicture);
router.post('/updatePicture',Pic.updatePicture);
router.post('/pushPicture',Pic.pushPicture);
router.post('/getPictureByKw',Pic.getPictureByKw);
router.post('/getPictureByType',Pic.getPictureByType);
router.post('/getPictureByPage',Pic.getPictureByPage);
router.post('/delPictures',Pic.delPictures);
router.post('/getPictureById',Pic.getPictureById);
module.exports=router;