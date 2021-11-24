module.exports = {
  signupControl: async (req, res) => {
    // 1. req.body 제대로 들어왔는지 확인 아니면 돌려보냄
    // 2. 들어왔다면 db에 있는지 조회 있다면 돌려보냄
    // 3. db에 없다면 db에 등록
    const {
      email,
      nickname,
      password,
      sex,
      want_region,
      want_vol,
      age,
      isopen,
    } = req.body;

    if (
      !email ||
      !nickname ||
      !password ||
      !sex ||
      !want_region ||
      !want_vol ||
      !age ||
      !isopen
    ) {
      return res.status(400).send("모든 항목을 입력해주세요");
    }

    return res.send("signup ok!");
  },
  signinControl: async (req, res) => {
    return res.send("signin ok!");
  },
  nickcheckControl: async (req, res) => {
    return res.send("nickcheck ok!");
  },
};
