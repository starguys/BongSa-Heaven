require("dotenv").config();
const crypto = require("crypto");
const User = require("../models/User");
const { isAuthorized } = require("../middlewares/token");

module.exports = {
  infoControl: async (req, res) => {
    // 1. 토큰을 받아서 유저 아이디를 찾는다
    // 2. 유저 정보를 보내준다.
    const userData = isAuthorized(req, res);
    if (!userData) {
      res.status(401).send({ message: "싸장님 가입부터 해주세요!" });
    }
    if (userData) {
      const userInfo = await User.findById(userData.user_id);
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
      iscompany,
      isopen,
    } = req.body;

    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const salt = buf.toString("base64");
        crypto.pbkdf2(
          password,
          salt,
          110011,
          64,
          "sha512",
          async (err, key) => {
            if (err) {
              console.log(err);
              return;
            } else {
              const newPassword = key.toString("base64");
              const userData = isAuthorized(req, res);
              if (userData) {
                const userInfo = await User.findById(userData.user_id).exec();
                if (!userInfo) {
                  res.status(401).send({ message: "싸장님 정보 없어!" });
                }
                if (userInfo) {
                  const editUser = {
                    email: email,
                    password: newPassword,
                    nickname: nickname,
                    sex: sex,
                    want_region: want_region,
                    want_vol: want_vol,
                    age: age,
                    salt: salt,
                    company: company,
                    iscompany: iscompany,
                    isopen: isopen,
                  };
                  await User.findById(userData.user_id)
                    .updateMany(editUser)
                    .exec();
                  res.status(200).send({ message: "싸장님 정보 변경 완료!" });
                }
              } else {
                res.status(500).send({ message: "서버 이상해!" });
              }
            }
          }
        );
      }
    });
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
      const salt = await User.findById(userData.user_id).exec();
      if (salt === null) {
        return res.status(404).send({ message: "회원정보 등록부터 해주세요!" });
      }
      crypto.pbkdf2(
        checkPassword,
        salt.salt,
        110011,
        64,
        "sha512",
        async (err, key) => {
          const checkedPass = key.toString("base64");
          const query = { user_id: req.body._id, password: checkedPass };
          const userInfo = await User.findOne(query);
          // 3. 없다면 404 돌려보냄
          if (!userInfo) {
            return res.status(404).send({ message: "비밀번호가 다릅니다!!" });
          }
          if (userInfo) {
            return res.status(200).send({ message: "비밀번호 정확합니다!" });
          } else {
            return res.status(500).send({ message: "서버가 이상해요" });
          }
        }
      );
    }
  },
  withdrawalControl: async (req, res) => {
    // 1. 유저정보 확인
    // 2. 없으면 돌려보내고 있으면 삭제
    const userData = isAuthorized(req, res);
    if (!userData) {
      res.status(401).send({ message: "싸장님 가입부터 해야 탈퇴가 가능해!" });
    }
    if (userData) {
      const userInfo = await User.findById(userData.user_id).remove().exec();
      if (!userInfo) {
        res.status(404).send({ message: "탈퇴가 이루어지지 않았어요!" });
      } else {
        res.status(200).send({ message: "봉사천국 안뇽~ 담에 또 봐요~" });
      }
    }
  },
  nickcheckControl: async (req, res) => {
    // 1. 닉네임을 받는다
    // 2. db에서 닉네임을 검색한다
    const query = { nickname: req.body.nickname };
    const existNick = await User.findOne(query);
    // 3. 있으면 돌려보낸다. 없으면 괜찮다고 메세지!
    if (existNick) {
      return res.status(409).send({ message: "싸장님 닉네임 이미 있어" });
    } else {
      return res.status(200).send({ message: "싸장님 좋은 닉네임!" });
    }
  },
};
