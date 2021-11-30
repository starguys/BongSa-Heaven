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
    // 크립토로 비밀번호 솔트해싱 db에 저장
    if (!existUser) {
      crypto.randomBytes(64, (err, buf) => {
        if (err) {
          console.log(err);
          return;
        } else {
          const salt = buf.toString("base64");
          crypto.pbkdf2(password, salt, 110011, 64, "sha512", (err, key) => {
            if (err) {
              console.log(err);
              return;
            } else {
              const hardPass = key.toString("base64");
              const newUser = {
                email: email,
                password: hardPass,
                nickname: nickname,
                sex: sex,
                want_region: want_region,
                want_vol: want_vol,
                age: age,
                salt: salt,
              };
              const insertDb = new User(newUser).save();
              if (!insertDb) {
                return res.status(500).send({ message: "싸장님 서버 이상해" });
              } else {
                return res
                  .status(201)
                  .send({ message: "싸장님 웰캄 투 봉사천국" });
              }
            }
          });
        }
      });
    }
  },

  signinControl: async (req, res) => {
    // 1. 이메일과 패스드가 담긴 바디를 받는다
    // 2. 암호에 소금쳐서 다시 찾아낸다

    const { email, password } = req.body;
    const salt = await User.findOne({ email: email }).select({
      _id: 0,
      salt: 1,
    });
    if (salt === null) {
      return res.status(404).send({ message: "이메일 및 비밀번호 다시 쳐봐" });
    }
    console.log("===salt.salt===", salt.salt);

    // 2. 유저db 에서 이메일이 있는지 확인한다;
    crypto.pbkdf2(
      password,
      salt.salt,
      110011,
      64,
      "sha512",
      async (err, key) => {
        const hardPass = key.toString("base64");
        console.log("===hardPass===", hardPass);
        const query = { email: email, password: hardPass };
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
          return res
            .cookie("refreshToken", refreshToken, { httpOnly: true })
            .status(200)
            .send({ accessToken: accessToken });
        } else {
          return res.status(500).send("error");
        }
      }
    );
  },

  signoutControl: async (req, res) => {
    const accessTokenData = isAuthorized(req, res);
    if (!accessTokenData) {
      return res.status(401).send({ message: "싸장님 토큰 망가졌어" });
    }
    if (accessTokenData) {
      return res
        .clearCookie("refreshToken")
        .status(200)
        .send({ message: "싸장님 또 와" });
    } else {
      return res.status(500).send({ message: "서버 이상해" });
    }
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

  refreshtokenControl: async (req, res) => {
    const refreshTokenData = checkRefreshToken(req);
    if (!refreshTokenData) {
      return res.status(401).send({ message: "유효하지 않은 토큰~" });
    }
    if (refreshTokenData) {
      const userInfo = await User.findOne({ email: refreshTokenData.email });
      if (!userInfo) {
        return res.status(500).send({ message: "뭔가가 이상하다" });
      } else {
        const { email, nickname } = userInfo;
        const accessToken = generateAccessToken({ email, nickname });
        const refreshToken = generateRefreshToken({ email, nickname });
        // const issueDate = new Date();
        // const accessTokenExpiry = new Date(Date.parse(issueDate) + 1209600000); // +3h
        // const refreshTokenExpiry = new Date(Date.parse(issueDate) + 10800000); // +14d
        return res
          .cookie("refreshToken", refreshToken, { httpOnly: true })
          .status(200)
          .send({ accessToken: accessToken });
      }
    }
  },

  imageControl: async (req, res) => {
    return res.send("이미지 잘 와요!");
  },

  kakaoControl: async (req, res) => {
    return res.send();
  },

  kakaocallbackControl: async (req, res) => {
    const { query } = req;
    const { code } = query;
    const url = `https://kauth.kakao.com/oauth/token`;
    console.log(code);
    let tokenResponse;
    try {
      tokenResponse = await axios({
        method: "POST",
        url,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify({
          grant_type: "authorization_code",
          client_id: "498bc95ff9c33f89e4cff4ef0775b24b",
          client_secret: "QjZ2FD3SkoyxD8OpwoujmqL31PWFNX0Z",
          redirect_uri: "http://localhost:8080/auth/kakao/callback",
          code,
        }),
      });
    } catch (error) {
      return res.json(error.data);
    }

    console.info("==== tokenResponse.data ====");
    console.log(tokenResponse.data);

    const { access_token } = tokenResponse.data;

    let userResponse;

    try {
      userResponse = await axios({
        method: "GET",
        url: "https://kapi.kakao.com/v2/user/me",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error) {
      return res.json(error.data);
    }

    console.info("==== userResponse.data ====");
    console.log(userResponse.data);

    const authData = {
      ...tokenResponse.data,
      ...userResponse.data,
    };
    console.log(authData);
    res.redirect("/");
  },

  googleControl: async (req, res) => {
    return res.send();
  },

  kakao: async (req, res) => {
    // console.log(req.body);
    const token = req.body.accessToken;
    let userResponse;
    try {
      userResponse = await axios({
        method: "GET",
        url: "https://kapi.kakao.com/v2/user/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch {
      console.log("err");
    }
    const userNick = userResponse.data.properties.nickname;
    const userKakao = userResponse.data.id;

    const query = { kakao_id: userKakao, nickname: userNick };
    const existUser = await User.findOne(query);

    if (existUser) {
      const accessToken = generateAccessToken({ userKakao, userNick });
      const refreshToken = generateRefreshToken({ userKakao, userNick });
      return res
        .cookie("refreshToken", refreshToken, { httpOnly: true })
        .status(200)
        .send({ accessToken: accessToken, message: "kakao-login 성공!" });
    }
    if (!existUser) {
      const newUser = {
        email: "",
        password: "",
        kakao_id: userKakao,
        nickname: userNick,
        sex: "",
        want_region: "",
        want_vol: "",
        age: "",
        salt: "",
      };
      const insertDb = new User(newUser).save();
      if (!insertDb) {
        return res.status(500).send({ message: "싸장님 서버 이상해" });
      } else {
        const accessToken = generateAccessToken({ userKakao, userNick });
        const refreshToken = generateRefreshToken({ userKakao, userNick });
        return res
          .cookie("refreshToken", refreshToken, { httpOnly: true })
          .status(200)
          .send({ accessToken: accessToken, message: "kakao singup 성공!" });
      }
    }
  },
};
