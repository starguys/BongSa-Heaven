const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freechildcommentSchema = new Schema(
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
    freecomment_id: {
      type: Schema.Types.ObjectId,
      ref: "Freecomment",
    },
    child_comment: {
      type: String,
      maxLength: 1000,
    },
  },
  { timestamps: true }
);

// freecommentSchema.plugin(findOrCreate);
module.exports = freechildcommentSchema;
// mongoose.model("Freecomment", freecommentSchema);
