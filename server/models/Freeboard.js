const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const freecommentSchema = require("./models/Freecomment");

const freeboardSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    description: String,
    images: Array,
    // free_comments: {
    //   type: [freecommentSchema],
    //   default: [],
    // },
  },
  { timestamps: true }
);

// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Freeboard", freeboardSchema);
