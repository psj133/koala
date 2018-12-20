const express=require('express');
const router=express.Router();
const login=require('../controller/accountController.js');
router.post('/login',login.sign);
router.post('/reg',login.reg);
router.post('/test',login.test);
module.exports=router;