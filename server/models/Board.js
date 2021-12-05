const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema(
  { free_bodard:[{

    
  }]


  }
);
// boardSchema.plugin(findOrCreate);
module.exports = mongoose.model("Board", boardSchema);
