require("dotenv").config();
const Freeboard = require("../models/Freeboard");
const Crewboard = require("../models/Crewboard");
const Mongoose = require("mongoose");
const ObjectId = Mongoose.Types.ObjectId;
const {isAuthorized} = require("../middlewares/token");

module.exports = {
  // free board commnt
  fbcommentregisterControl: async (req, res) => {
    // 1. token userData 인증
    // 2. post_id => req.body로 받아와 => freecomment 배열 안에 넣자
    // 3. 보낼땐 다줘야하나? 뭘 뭐야하지
    try {
      const userData = await isAuthorized(req, res);
      if (!userData) {
        return res.send({message: "싸장님 회원 맞아?? 빨리 가입 해"});
      }
      if (userData) {
        // console.log("===userData===", userData);
        await Freeboard.findById(req.body.freeboard_id).then(doc => {
          // console.log("===doc===", doc);
          if (doc === null) {
            return res.status(404).send({message: "싸장님 잘못된 경로야!"});
          } else {
            const fbcomment = {
              user_id: userData.user_id,
              freeboard_id: req.body.freeboard_id,
              comment: req.body.comment,
            };
            doc.freecomments.push(fbcomment);
            doc.save();
            res.status(200).send({message: "싸장님 댓글 등록 완료!"});
          }
        });
      }
    } catch {
      return res.send("err");
    }
  },
  fbchildregisterControl: async (req, res) => {
    // 1. token userData 인증
    // 2. post_id => req.body로 받아와 => freecomment 배열 안에 넣자
    // 3. 보낼땐 다줘야하나? 뭘 뭐야하지

    try {
      const userData = await isAuthorized(req, res);
      if (!userData) {
        return res.send({message: "싸장님 회원 맞아?? 빨리 가입 해"});
      }
      if (userData) {
        // console.log("===userData===", userData);
        await Freeboard.findById(req.body.freeboard_id).then(doc => {
          // console.log("===doc===", doc);
          //   const fbchildcomment = {
          //     user_id: userData.user_id,
          //     freeboard_id: req.body.freeboard_id,
          //     freecomment_id: req.body.freecomment_id,
          //     childcomment: req.body.childcomment,
        });
        //   doc.freechildcomments.push(fbchildcomment);
        //   doc.save();
        res.status(200).send({message: "싸장님 댓글 등록 완료!"});
        // }};
      }
    } catch {
      return res.send("err");
    }
  },

  fbcommenteditControl: async (req, res) => {
    // 1. 토큰 본인인증
    // 2. 게시글의 번호 찾고 freecomments 유저 아이디랑 비교
    // 3. 내용 업데이트
    const userData = await isAuthorized(req, res);
    if (!userData) {
      return res.send({message: "싸장님~ 댓글 수정 권한 없어!"});
    }
    if (userData) {
      // const fbcommentedit = await Freeboard.aggregate([
      //   {
      //     $match: {
      //       "freecomments._id": { req.body.freecomments_id,
      //     },
      //   },
      // ])
      // console.log("===fbcommentedit===", fbcommentedit);
      return res.send("edit ok!");
    }
  },

  fbcommentdeleteControl: async (req, res) => {
    return res.send("delete ok!");
  },

  // crew board comment
  cbcommentregisterControl: async (req, res) => {
    // 1. token userData 인증
    // 2. post_id => req.body로 받아와 => crewcomment 배열 안에 넣자
    // 3. 보낼땐 다줘야하나? 뭘 뭐야하지
    try {
      const userData = await isAuthorized(req, res);
      if (!userData) {
        return res.send({message: "싸장님 회원 맞아?? 빨리 가입 해"});
      }
      if (userData) {
        // console.log("===userData===", userData);
        await Crewboard.findById(req.body.crewboard_id).then(doc => {
          // console.log("===doc===", doc);
          if (doc === null) {
            return res.status(404).send({message: "싸장님 잘못된 경로야!"});
          } else {
            const cbcomment = {
              user_id: userData.user_id,
              crewboard_id: req.body.crewboard_id,
              comment: req.body.comment,
            };
            doc.crewcomments.push(cbcomment);
            doc.save();
            res.status(200).send({message: "싸장님 댓글 등록 완료!"});
          }
        });
      }
    } catch {
      return res.send("err");
    }
  },

  cbcommenteditControl: async (req, res) => {
    // 1. 토큰 본인인증
    // 2. 게시글의 번호 찾고 freecomments 유저 아이디랑 비교
    // 3. 내용 업데이트
    const userData = await isAuthorized(req, res);
    if (!userData) {
      return res.send({message: "싸장님~ 댓글 수정 권한 없어!"});
    }
    if (userData) {
      const cbcotent = await Crewboard.findById(req.body.crewboard_id);
      if (!cbcotent) {
        return res.status(404).send({message: "싸장님 잘못된 경로야!"});
      } else {
        const cbcomment = await Crewboard.findById(req.body.crewboard_id).find({
          __dirname: {$match: new ObjectId(req.body.crewcomment_id)},
        });
      }
    }
    return res.send("edit ok!");
  },

  cbcommentdeleteControl: async (req, res) => {
    return res.send("delete ok!");
  },
};
