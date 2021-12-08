require('dotenv').config();
const User = require('../models/User');
const Mail = require('../models/Mail');
const {isAuthorized} = require('../middlewares/token');

module.exports = {
  mailregisterControl: async (req, res) => {
    // 1. 보내는 유저 인증
    // 2. 닉네임 체크되서 온 것을 찾아서 쪽지 받을 유저 정보 접근
    // 3. 받는 유저에 보내는 유저 아디 userData_id 와 text 등록
    const userData = isAuthorized(req, res);
    if (!userData) {
      return res.status(401).send({message: '싸장님 회원 맞아?? 빨리 가입 해'});
    }
    if (userData) {
      const receiver = await User.findOne({nickname: req.body.nickname});
      if (!receiver) {
        return res.status(404).send({message: '쪽지 보내는 대상이 존재하지 않습니다!'});
      }
      if (receiver) {
        console.log('===receiver_id===', receiver._id);
        const mailBox = {
          writer_id: userData.user_id,
          writer_nickname: userData.nickname,
          text: req.body.text,
          receiver_id: receiver._id,
        };
        console.log('===mailBox===', mailBox);
        const insertMail = new Mail(mailBox).save();
        if (!insertMail) {
          return res.status(500).send({message: '싸장님 서버 이상해'});
        } else {
          return res.status(201).send({message: '싸장의 소중한 쪽지 전송완료!'});
        }
      }
    } else {
      return res.status(500).send({message: '서버 이상해!'});
    }
  },

  maillistControl: async (req, res) => {
    // 1. 토큰으로 본인인증
    // 2. 메일 컬렉션에서 메일 조회
    // 3. 전송!
    const userData = isAuthorized(req, res);
    if (!userData) {
      return res.send({message: '싸장님 회원 맞아?? 빨리 가입 해'});
    }
    if (userData) {
      const mailInfo = await Mail.find({receiver_id: userData.user_id}).sort({
        createdAt: -1,
      });
      console.log('===mailInfo===', mailInfo);
      return res.status(200).send({data: mailInfo, message: '쪽지 조회~'});
    } else {
      return res.status(500).send({message: '서버 이상해!'});
    }
  },

  maildeleteControl: async (req, res) => {
    // 1. 토큰으로 본인인증
    // 2. req.body로 받은 쪽지 id조회해서 지우자(받은 사람이)
    const userData = isAuthorized(req, res);
    if (!userData) {
      return res.staus(401).send({message: '싸장님 회원 맞아?? 빨리 가입 해'});
    }
    if (userData) {
      const deleteMail = await Mail.findOne({
        _id: req.body.mail_id,
        receiver_id: userData.user_id,
      }).exec();
      console.log('===deleteMail===', deleteMail);
      if (deleteMail === null) {
        return res.status(400).send({message: '쪽지가 존재하지 않아요!'});
      }
      if (deleteMail) {
        deleteMail.remove();
        return res.status(200).send({message: '쪽지 삭제 완료!'});
      }
    } else {
      return res.status(500).send({message: '서버 이상해!'});
    }
  },
};
