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
      return null;
    }
    const token = authorization; // `Bearer ${Authorization}`
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
  checkRefreshToken: (req) => {
    const refreshToken = req.header.cookie.split("=")[2];
    if (!refreshToken) {
      return null;
    }
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      return null;
    }
  },
};
