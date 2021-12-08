const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crewcommentSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    crewboard_id: {
      type: Schema.Types.ObjectId,
      ref: "Crewboard",
      required: true,
    },
    comment: String,
  },
  { timestamps: true }
);

// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Crewcomment", crewcommentSchema);
