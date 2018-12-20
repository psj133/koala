const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let ProductSchema=new Schema({
    path:{type:String,required:true},
    url:{type:String,required:true},
    name:{type:String,required:true},
    pull:{type:Boolean,default:false},
    type:{type:String}
})
let model=mongoose.model('Product',ProductSchema);
module.exports=model;