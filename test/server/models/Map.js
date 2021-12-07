const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//맵데이터는 1인당 1개씩 적용한다.
//등록되어잇을때 포스트 보내면 에러코드,
const MapSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  La: {
    type: Number,
  },
  Ma: {
    type: Number,
  },
});

// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("MAP", MapSchema);
