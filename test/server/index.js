require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const DB = require("./config/config");
const freeboardRouter = require("./routes/freeboard");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

//use modules
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());
DB();

//routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/freeboard", freeboardRouter);

//server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`      🚀 Server is starting on ${PORT}`);
});

module.exports = app;
