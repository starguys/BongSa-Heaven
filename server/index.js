require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const DB = require("./config/config");
const boardRouter = require("./routes/board");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const mapRouter = require("./routes/map");
const imageRouter = require("./routes/image");

//use modules
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());
DB();

//routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/board", boardRouter);
app.use("/map", mapRouter);
app.use("/image", imageRouter);
//server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`      🚀 Server is starting on ${PORT}`);
});

module.exports = app;
