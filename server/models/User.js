const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  board: [
    {
      ref: "Board",
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
  },
  salt: {
    type: String,
    minlength: 5,
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
});

// userSchema.plugin(findOrCreate);
module.exports = mongoose.model("User", userSchema);
