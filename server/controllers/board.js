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
const { findOne } = require("../models/User");

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
    const { id, description, crew, shorts_description, title } = req.body;

    //기존에 있던 board값을 새로운 값으로 바꾼다.findAndupdate
    //내가 클릭한 _id
    //어차피 내꺼만 가능

    //board는 내꺼만 수정가능, 1. 내꺼여야한다 2. 내가 클릭한 게시판 이어야한다. _id
    //2개의 아이디를 묶어서 나타냄?
    const accessTokenData = isAuthorized(req);

    if (!accessTokenData) {
      return res.status();
    }
    const BoardId = await User.findOne({ email: accessTokenData.email });
    console.log(BoardId._id);
    //61a8bcb2d817f8342a4fe5cb
    //board의 아이디를 가져올수 있으면 된다.
    Board.findByIdAndUpdate(id, {
      $set: {
        description: description,
        title: title,
        shorts_description: shorts_description,
      },
    })
      .then((data) => {
        if (!data) {
          return res.status(409).send("원래 내용과 같아요");
        }

        return res.status(200).send(data);
      })
      .catch((err) => {
        console.error(err);
      });
    //{바꾸고 싶은값},{바뀌는값}

    //     ).catch(err=>{
    //       console.log(err)
    //     })

    //제목, 글, 다변경 가능
  },
  deleteControl: async (req, res) => {
    Board.DeleteOne();
    return res.send("delete ok!");
  },
};
