const express=require('express');
const router=express.Router();
const product=require('../controller/Procontroller.js')
router.get("/getProduct",product.getProduct)
router.post("/addProduct",product.addProduct)
router.post("/delProduct",product.delProduct)
router.post("/updateProduct",product.updateProduct)
router.post("/pullProduct",product.pullProduct)
router.post("/delProducts",product.delProducts)
router.post("/getProductByKw",product.getProductByKw)
router.post("/getProductById",product.getProductById)
module.exports=router;