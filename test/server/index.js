require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const fs = require("fs");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

const DB = require("./config/config");
const boardRouter = require("./routes/board");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const commentRouter = require("./routes/comment");
const mapRouter = require("/.routes/map");

//use modules
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
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
app.use("/board", boardRouter);
app.use("/comment", commentRouter);
app.use("/map", mapRouter);

// app.post("/images", controller.imageControl);

//server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`      🚀 Server is starting on ${PORT}`);
});

module.exports = app;
