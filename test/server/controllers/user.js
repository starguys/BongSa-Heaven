require("dotenv").config();
const crypto = require("crypto");
const qs = require("qs");
const User = require("../models/User");
const axios = require("axios");
const {
  generateAccessToken,
  generateRefreshToken,
  isAuthorized,
  checkRefreshToken,
} = require("../middlewares/token");

module.exports = {
  infoControl: async (req, res) => {
    // 1. 토큰을 받아서 유저 아이디를 찾는다
    // 2. 유저 정보를 보내준다.
    const userData = isAuthorized(req, res);
    if (!userData) {
      res.status(401).send({ message: "싸장님 가입부터 해주세요!" });
    }
    if (userData) {
      const query = { user_id: userData.user_id };
      const userInfo = await User.findOne(query);
      if (!userInfo) {
        return res
          .status(404)
          .send({ message: "싸장님 일치하는 정보 없어요!" });
      }
      if (userInfo) {
        return res.status(200).send({ data: userInfo });
      }
    } else {
      return res.status(500).send({ message: "싸장님 서버 이상해!" });
    }
  },

  editControl: async (req, res) => {
    // 1. 토큰으로 user_id 확인
    // 2. req.body로 받는 정보들?
    // 3. 업데이트
    const {
      email,
      password,
      nickname,
      sex,
      want_region,
      want_vol,
      age,
      company,
    } = req.body;
    const userData = isAuthorized(req, res);
    if (!userData) {
      res.status(401).send({ message: "싸장님 가입부터 해주세요!" });
    }
    if (userData) {
      await User.save({
        email: email,
        password: password,
        nickname: nickname,
        sex: sex,
        want_region: want_region,
        want_vol: want_vol,
        age: age,
        company: company,
      }),
        res.staus(200).send({ message: "싸장님 정보 변경 완료!" });
    } else {
      res.status(500).send({ message: "서버 이상해!" });
    }
  },
  passwordControl: async (req, res) => {
    // 1. 유저확인
    // 2. 맞으면 패스워드 체킹!
    const userData = isAuthorized(req, res);
    if (!userData) {
      res.status(401).send({ message: "싸장님 가입부터 해주세요!" });
    }
    if (userData) {
      const checkPassword = req.body.password;
      const checkUser = await User.findOne({ user_id: req.body.user_id });
      if (!checkUser) {
        return res.status(404).send("확인되지 않은 싸장님이네요");
      }
      if (checkUser) {
        return res.status(200);
      }
    }
  },
  withdrawalControl: async (req, res) => {
    return res.send("withdrawal ok!");
  },
  imageControl: async (req, res) => {
    return res.send("image ok!");
  },
  nickcheckControl: async (req, res) => {
    // 1. 닉네임을 받는다
    const query = { nickname: req.body.nickname };
    // 2. db에서 닉네임을 검색한다
    const existNick = await User.find(query);
    // 3. 있으면 돌려보낸다. 없으면 괜찮다고 메세지!
    if (existNick) {
      return res.status(409).send({ message: "싸장님 닉네임 이미 있어" });
    } else {
      return res.status(200).send({ message: "싸장님 좋은 닉네임!" });
    }
  },
};
