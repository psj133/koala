const express=require('express');
const router=express.Router();
const product=require('../controller/Procontroller.js')
router.get("/getProduct",product.getProduct);
module.exports=router;