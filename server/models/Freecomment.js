const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freecommentSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Freecomment", freecommentSchema);
