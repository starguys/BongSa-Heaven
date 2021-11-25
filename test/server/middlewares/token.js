require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "3h" });
  },
  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: "30d" });
  },
  isAuthorized: (req, res) => {
    const authorization =
      req.headers["Authorization"] || req.headers["authorization"];
    if (!authorization) {
      return res.status(401).send({ message: "싸장님 권한 없어!" });
    }
    const token = authorization.split(" ")[1]; // `Bearer ${Authorization}`
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return res.status(400).send({ message: "싸장님 엑세스 토큰 들고와!" });
    }
  },
  checkRefreshToken: (req) => {
    const refreshToken = req.header.cookie.split("=")[2];
    if (!refreshToken) {
      return res.status(400).send({ message: "싸장님 리프레시 토큰 없어!" });
    }
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      return null;
    }
  },
};
