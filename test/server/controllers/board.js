require("dotenv").config();
const qs = require("qs");
const { Freeboard } = require("../models/Freeboard");
const axios = require("axios");
const { isAuthorized } = require("../middlewares/token");

module.exports = {
  // free board control
  fbregisterControl: async (req, res) => {
    // 1. 가입된 유저인지 확인한다 => 토큰 검증
    // 2. 유저가 아니라면 돌려보냄
    // 3. 유저라면 free board에 모델 생성하고 req.body로 받은 데이터 등록

    return res.send("fb register ok!");
  },
  fblistControl: async (req, res) => {
    return res.send("fb info ok!");
  },
  fbeditControl: async (req, res) => {
    return res.send("fb edit ok!");
  },
  fbdeleteControl: async (req, res) => {
    return res.send("fb delete ok!");
  },

  // crew board control
  cbregisterControl: async (req, res) => {
    return res.send("cb register ok!");
  },
  cblistControl: async (req, res) => {
    return res.send("cb info ok!");
  },
  cbeditControl: async (req, res) => {
    return res.send("cb edit ok!");
  },
  cbdeleteControl: async (req, res) => {
    return res.send("cb delete ok!");
  },
};
