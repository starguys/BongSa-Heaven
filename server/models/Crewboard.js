const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crewboardSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shorts_description: String,
    title: String,
    descreption: String,
    images: String,
    crew_comments: {
      type: [crewcommentSchema],
      default: [],
    },
  },
  { timestamps: true }
);

// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Crewboard", crewboardSchema);
