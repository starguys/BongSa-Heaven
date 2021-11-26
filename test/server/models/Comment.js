const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema =new Schema({

comment :{
    type:String,
    require:true
},
nickname:{
     type:String,
     unique:true
},}, {timestamps:true})


module.exports = mongoose.model("Comment", commentSchema);
