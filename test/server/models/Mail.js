const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mailSchema = new Schema({
    mail:{
        type:String,
        required:true,
    },
    nickname:{
        type:String,
        required:true,
        unique:true
    }
    


},{timestamps:true});

// userSchema.plugin(findOrCreate);
module.exports = mongoose.model("Mail", mailSchema);
