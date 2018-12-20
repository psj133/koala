const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let AccountSchema=new Schema({
    user:{type:String,required:true},
    pass:{type:String,required:true}
})
let model=mongoose.model('Account',AccountSchema);
module.exports=model;