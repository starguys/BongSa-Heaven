const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const freecommentSchema = require("./Freecomment");

const freeboardSchema = new Schema(
  {
    like: [{ type: Schema.Types.ObjectId, ref: "User" }],
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    description: String,
    images: String,
    freecomments: [
      {
        type: freecommentSchema,
        default: [],
      },
    ],
    isopen: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// freeboardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Freeboard", freeboardSchema);
