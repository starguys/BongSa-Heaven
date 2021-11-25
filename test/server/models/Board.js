const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  user: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  freeboard: [
    {
      type: String,
      title: String,
      image: {
        type: Array,
      },
      descreption: String,
    },
  ],
  crewboard: [
    {
      type: String,
      title: String,
      image: {
        type: Array,
      },
      one_line: String,
      descreption: String,
      region: String,
    },
  ],
});

boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Board", boardSchema);
