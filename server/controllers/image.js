// const freeBoard = require("../models/Freeboard");
module.exports = {
  registerControl: async (req, res) => {
    console.log(req.files);
    const image = req.files.location;
    if (image === undefined) {
      return res.status(400).send("이미지가 존재x");
    }
    return res.status(200).send(image);
  },
};
