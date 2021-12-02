require("dotenv").config();
const crypto = require("crypto");
const User = require("../models/User");
const Board = require("../models/Board");
const {
  generateAccessToken,
  generateRefreshToken,
  isAuthorized,
  checkRefreshToken,
} = require("../middlewares/token");

module.exports = {
  registerControl: async (req, res) => {
    const { description, crew, shorts_description, title } = req.body;

    const token = req.headers["authorization"] || req.headers["Authorization"];

    //token 이 헤더로들어오고 토큰이 존재하면
    if (!token) {
      return res.status(401).send("인증 이 필요합니다");
    }

    const accessTokenData = isAuthorized(req);
    //accesstokendata verify 결과
    console.log(accessTokenData, "accesstoken data");
    const userInfo = await User.findOne({ email: accessTokenData.email });

    console.log(userInfo, "sdfasefas");

    //user가 있다면 게시판 작성
    Board.insertMany({
      user_id: userInfo._id,
      description: description,
      crew: crew,
      title: title,
      shorts_description: shorts_description,
    }).then((data) => {
      return res.status(201).send(data);
    });

    // console.log(token);
  },
  listControl: async (req, res) => {
    //모두가 볼수있다.
    console.log(req.headers);
    const boardList = await Board.find();

    res.status(200).send(boardList);
  },
  editControl: async (req, res) => {
    const { email, description, crew, shorts_description, title } = req.body;

    Board.updateOne({ description: description });
  },
  deleteControl: async (req, res) => {
    Board.DeleteOne();
    return res.send("delete ok!");
  },
};
