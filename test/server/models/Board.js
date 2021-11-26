const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
 
  user_id:{
    type:Number,
    ref:'User',
    required:true,
    

 },
 image:{
   type:String,
 
   
 },
 description:{
   type:String,

 },
 comments:[{
  type: mongoose.Schema.Types.ObjectId, ref: 'Comment'
 }],
 crew:{
   type:Boolean,
   default:false
 },
 shorts_description:{
   type:String,
   maxLength:50
 }
});

// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Board", boardSchema);
