const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
 
  user_id:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
 },
 image:{
   type:Array,
 
   
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
})

const commentSchema = new Schema({

  comment :{
      type:String,
      require:true,
     
      
  },
  nickname:{
       type:String,
       unique:true
  },}, {timestamps:true})

  

  

 const Comment = mongoose.model("Comment", commentSchema);
 const Board = mongoose.model("Board", boardSchema);

// boardSchema.plugin(findOrCreate);
module.exports = {Comment, Board}
