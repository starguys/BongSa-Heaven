const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    // user_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   unique: true,
    // },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    // comments: [
    //   {
    //     ref: "Comment",
    //   },
    // ],
    crew: {
      type: Boolean,
      default: false,
    },
    shorts_description: {
      type: String,
    },
  },
  { timestamps: true }
);
// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Board", boardSchema);
