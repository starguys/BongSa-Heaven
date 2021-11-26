const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require:true,
    trim:true
  
  },

  mails:[{
    type: mongoose.Schema.Types.ObjectId, ref: 'Mail'

  }],
  sex: {
    type: String,
  },
  want_region: {
    type: String,
  },
  want_vol: {
    type: Array,
  },
  age: {
    type: String,
  },
 

},{timestamps:true});

// userSchema.plugin(findOrCreate);
module.exports = mongoose.model("User", userSchema);
