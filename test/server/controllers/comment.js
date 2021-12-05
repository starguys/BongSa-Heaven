require("dotenv").config();
const Freeboard = require("../models/Freeboard");
const { isAuthorized } = require("../middlewares/token");

module.exports = {
  // free board commnt
  fbregisterControl: async (req, res) => {
    // 1. token userData 인증
    // 2. post_id => req.body로 받아와 => freecomment 배열 안에 넣자
    // 3. 보낼땐 다줘야하나? 뭘 뭐야하지
    try {
      const userData = await isAuthorized(req, res);
      if (!userData) {
        return res.send({ message: "싸장님 회원 맞아?? 빨리 가입 해" });
      }
      if (userData) {
        console.log("===userData===", userData);
        await Freeboard.findById(req.body.freeboard_id).then((doc) => {
          console.log("===doc===", doc);
          if (doc === null) {
            return res.status(404).send({ message: "싸장님 잘못된 경로야!" });
          } else {
            const fbcomment = {
              user_id: userData.user_id,
              freeboard_id: req.body.freeboard_id,
              comment: req.body.comment,
            };
            doc.freecomments.push(fbcomment);
            doc.save();
            res.status(200).send({ message: "싸장님 댓글 등록 완료!" });
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
        return res.send({ message: "싸장님 회원 맞아?? 빨리 가입 해" });
      }
      if (userData) {
        console.log("===userData===", userData);
        Freeboard.findById(req.body.freeboard_id)
          .find({ freecomment_id: req.body.freecomment_id })
          .then((doc) => {
            console.log("===doc===", doc);
            //   const fbchildcomment = {
            //     user_id: userData.user_id,
            //     freeboard_id: req.body.freeboard_id,
            //     freecomment_id: req.body.freecomment_id,
            //     childcomment: req.body.childcomment,
          });
        //   doc.freechildcomments.push(fbchildcomment);
        //   doc.save();
        res.status(200).send({ message: "싸장님 댓글 등록 완료!" });
        // }};
      }
    } catch {
      return res.send("err");
    }
  },

  fblistControl: async (req, res) => {
    return res.send("info ok!");
  },
  fbeditControl: async (req, res) => {
    return res.send("edit ok!");
  },
  fbdeleteControl: async (req, res) => {
    return res.send("delete ok!");
  },

  // crew board comment
  cbregisterControl: async (req, res) => {
    return res.send("register ok!");
  },
  cblistControl: async (req, res) => {
    return res.send("info ok!");
  },
  cbeditControl: async (req, res) => {
    return res.send("edit ok!");
  },
  cbdeleteControl: async (req, res) => {
    return res.send("delete ok!");
  },
};
