const express=require('express');
const router=express.Router();
const getUser=require('../controller/Usercontroller.js')
router.get('/getAccount',getUser.getUserAccount);
router.post('/addAccount',getUser.addUserAccount);
router.post('/delAccount',getUser.delUserAccount);
module.exports=router;