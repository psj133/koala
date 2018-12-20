const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let PictureSchema=new Schema({
    path:{type:String,required:true},
    url:{type:String,required:true},
    name:{type:String,required:true},
    push:{type:Boolean,default:false},
    type:{type:String,required:true}
})
let model=mongoose.model('Picture',PictureSchema);
module.exports=model;