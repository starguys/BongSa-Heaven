const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freecommentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  freeboard_id: {
    type: Schema.Types.ObjectId,
    ref: "Freeboard",
    required: true,
  },
  comment: String,
});

// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Freecomment", freecommentSchema);
