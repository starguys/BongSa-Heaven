require("dotenv").config();
const crypto = require("crypto");
const User = require("../models/User");
const Board = require('../models/Board')
const axios = require('axios')
const {
  generateAccessToken,
  generateRefreshToken,
  isAuthorized,
  checkRefreshToken,

  // decryption
} = require("../middlewares/token");

module.exports = {
  signupControl: async (req, res) => {
    // 1. req.body 제대로 들어왔는지 확인 아니면 돌려보냄
    const { email, nickname, password, sex, want_region, want_vol, age } =
      req.body;

    if (
      !email ||
      !nickname ||
      !password ||
      !sex ||
      !want_region ||
      !want_vol ||
      !age
    ) {
      return res.status(400).send("모든 항목을 입력해주세요");
    }

    // 2. 들어왔다면 db에 있는지 조회 있다면 돌려보냄
    const userDb = { email: email };
    const existUser = await User.findOne(userDb);

    if (existUser) {
      return res.status(409).send({ message: "싸장님 이메일 이미 가입했어" });
    }

    // 3. db에 없다면 db에 등록
    // 크립토로 비밀번호 솔트해싱
    
   
        crypto.pbkdf2(password, process.env.SALT, 100000, 64, 'sha512', async (err, key) => {
          console.log(key.toString('base64'));
      
   


      const newUser = {
        email: email,
        password: key.toString('base64'),
        nickname: nickname,
        sex: sex,
        want_region: want_region,
        want_vol: want_vol,
        age: age,
      };
   
      const insertDb = await new User(newUser).save();
     
      
      if (!insertDb) {
        return res.status(500).send({ message: "싸장님 서버 이상해" });
      } else {
        return res.status(201).send({ message: "싸장님 웰캄 투 봉사천국" });
      }

    });

  },

  signinControl: async (req, res) => {
    // 1. 이메일과 패스드가 담긴 바디를 받는다
    const { email, password } = req.body;

        crypto.pbkdf2(password, process.env.SALT, 100000, 64, 'sha512',async (err, key) => {
 
          const hashKey = key.toString('base64')
          console.log(hashKey)
      
   
 
    // 2. 유저db 에서 이메일이 있는지 확인한다
    const query = { email: email, password: hashKey };
    const userInfo = await User.findOne(query);

    // 3. 없다면 404 돌려보냄
    if (!userInfo) {
      return res
        .status(404)
        .send({ message: "싸장님 이메일 및 비밀번호 확인해!" });
    }
    // 4. 있다면 뭐뭐 줄래? => token 전달!{ email, nickname }
    if (userInfo) {
      const { email, nickname } = userInfo;
      const accessToken = generateAccessToken({ email, nickname });
      const refreshToken = generateRefreshToken({ email, nickname });
      // const issueDate = new Date();
      // const accessTokenExpiry = new Date(Date.parse(issueDate) + 1209600000); // +3h
      // const refreshTokenExpiry = new Date(Date.parse(issueDate) + 10800000); // +14d
      res
        .cookie("refreshToken", refreshToken, { httpOnly: true })
        .status(200)
        .send({ accessToken: accessToken });
    } else {
      res.status(500).send("error");
    }

});

  },

  nickcheckControl: async (req, res) => {
    return res.send("nickcheck ok!");
  },

  googleSinginControl: async (req,res) =>{

    const { email, username, profileImage } = req.body // username은 email의 앞부분
    const googleToken = req.headers.authorization //cons
  





   
  
}

}
