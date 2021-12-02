const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freeboardSchema = new Schema({
  _id: Schema.Types.ObjectId,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: String,
  description: String,
  images: String,
  free_comments: {
    type: [freecommentSchema],
    default: [],
  },
});

// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Freeboard", freeboardSchema);
