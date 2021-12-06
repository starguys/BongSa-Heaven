const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
  },
  nickname: {
    type: String,
    required: true,
  },
  kakao_id: {
    type: String,
  },
  google_id: {
    type: String,
  },
  password: {
    type: String,
  },
  salt: {
    type: String,
  },
  sex: {
    type: String,
  },
  want_region: {
    type: String,
  },
  want_vol: {
    type: String,
  },
  age: {
    type: String,
  },
  company: {
    type: String,
  },
  iscompany: {
    type: Boolean,
  },
  isopen: {
    type: Boolean,
    default: true,
  },
});

// userSchema.plugin(findOrCreate);
module.exports = mongoose.model("User", userSchema);
