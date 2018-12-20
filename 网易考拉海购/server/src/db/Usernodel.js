const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let UserSchema=new Schema({
    user:{type:String,required:true},
    sex:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true}
})
let model=mongoose.model('User',UserSchema);
module.exports=model;