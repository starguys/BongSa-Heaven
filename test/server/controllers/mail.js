require("dotenv").config();
const User = require("../models/User");
const Mail = require("../models/Mail");
const { isAuthorized } = require("../middlewares/token");

module.exports = {
  mailregisterControl: async (req, res) => {
    // 1. 보내는 유저 인증
    // 2. 닉네임 체크되서 온 것을 찾아서 쪽지 받을 유저 정보 접근
    // 3. 받는 유저에 보내는 유저 아디 userData_id 와 text 등록
    const userData = isAuthorized(req, res);
    if (!userData) {
      return res
        .status(401)
        .send({ message: "싸장님 회원 맞아?? 빨리 가입 해" });
    }
    if (userData) {
      const receiver = await User.findOne({ nickname: req.body.nickname });
      console.log("===receiver_id===", receiver._id);
      const mailBox = {
        writer_id: userData.user_id,
        writer_nickname: userData.nickname,
        text: req.body.text,
        receiver_id: receiver._id,
      };
      console.log("===mailBox===", mailBox);
      const insertMail = new Mail(mailBox).save();
      if (!insertMail) {
        return res.status(500).send({ message: "싸장님 서버 이상해" });
      } else {
        return res
          .status(201)
          .send({ message: "싸장의 소중한 쪽지 전송완료!" });
      }
    }
  },

  maillistControl: async (req, res) => {
    // 1. 토큰으로 본인인증
    // 2. 자신의 메일 포퓰레이트 + 셀렉트 조회
    // 3. 전송!
    const userData = isAuthorized(req, res);
    if (!userData) {
      return res.send({ message: "싸장님 회원 맞아?? 빨리 가입 해" });
    }
    if (userData) {
      const mailInfo = await Mail.find({ receiver_id: userData.user_id }).sort({
        createdAt: -1,
      });
      console.log("===mailInfo===", mailInfo);
      return res
        .status(200)
        .send({ data: mailInfo, message: "쪽지 전송 완료!" });
    }
  },

  maildeleteControl: async (req, res) => {
    // 1. 토큰으로 본인인증

    const userData = isAuthorized(req, res);
    if (!userData) {
      return res.send({ message: "싸장님 회원 맞아?? 빨리 가입 해" });
    }
    if (userData) {
      return res.send("delete ok!");
    }
  },
};
