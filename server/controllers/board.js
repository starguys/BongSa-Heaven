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
    // const token = req.headers.authorizaiton;
    const { email, description, crew, shorts_description, title } = req.body;
    //token 이 헤더로들어오고 토큰이 존재하면
    // if (!token) {
    //   res.status(401).send("인증 이 필요합니다");
    // }
    // const accessTokenData = isAuthorized(token);

    //accesstokendata verify 결과
    // const userInfo = await User.findOne({ email: accessTokenData.email });

    // console.log(userInfo);

    //user가 있다면 게시판 작성
    Board.insertMany({
      // user_id: email,
      description: description,
      crew: crew,
      title: title,
    }).then((data) => {
      return res.status(201).send(data);
    });

    // console.log(token);
  },
  listControl: async (req, res) => {
    //모두가 볼수있다.
    const { email, description, crew, shorts_description, title } = req.body;
    const boardList = await Board.find({
      description: description,
      crew: crew,
      shorts_description: shorts_description,
      title: title,
    });

    res.status(200).send(boardList);
  },
  editControl: async (req, res) => {
    return res.send("edit ok!");
  },
  deleteControl: async (req, res) => {
    return res.send("delete ok!");
  },
};
