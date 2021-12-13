const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crewchildcommentSchema = new Schema(
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
    crewcomment_id: {
      type: Schema.Types.ObjectId,
      ref: "Crewcomment",
    },
    child_comment: {
      type: String,
      maxLength: 1000,
    },
  },
  {timestamps: true},
);

module.exports = crewchildcommentSchema;
// module.exports = mongoose.model("Crewchildcomment", crewchildcommentSchema);
