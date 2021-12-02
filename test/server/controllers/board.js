require("dotenv").config();
const qs = require("qs");
// const { Freecomment } = require("../models/Freecomment");
const Freeboard = require("../models/Freeboard");
const { isAuthorized } = require("../middlewares/token");

module.exports = {
  // free board control
  fbregisterControl: async (req, res) => {
    // 1. 가입된 유저인지 확인한다 => 토큰 검증
    // 2. 유저가 아니라면 돌려보냄
    // 3. 유저라면 free board에 모델 생성하고 req.body로 받은 데이터 등록

    const authorizedUser = isAuthorized(req, res);
    // if (!authorizedUser) {
    //   return res.send({ message: "싸장님 회원 맞아?? 빨리 가입 해" });
    // }
    if (!authorizedUser) {
      const freeContent = {
        // user_id: "61a784f4a06f7614e1574df9",
        title: req.body.title,
        description: req.body.description,
        images: req.body.images,
      };
      const insertDb = new Freeboard(freeContent).save();
      if (!insertDb) {
        return res.status(500).send({ message: "싸장님 서버 이상해" });
      } else {
        return res.status(201).send({ message: "freeboard content 등록완료" });
      }
    }
  },

  fblistControl: async (req, res) => {
    // 1. db상에 존재하는 모든 free board 글들을 찾아서 보내줌 (모두 이용 가능)
    const fbcontents = await Freeboard.find({}).sort({ createdAt: -1 });
    res.status(200).send({ data: fbcontents });
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
