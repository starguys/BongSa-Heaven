import React, { useState } from "react";
import axios from "axios";
import kakaologo from "./kakaologo.png";
import google from "./google.png";
import "../App.css";

axios.defaults.withCredentials = true;
export default function App() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    nickname: "",
    password: "",
    sex: "",
    want_region: "",
    want_vol: "",
    age: "",
  });

  const [imag, setImge] = useState("");
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignUp = () => {
    const email = userinfo.email;
    const nickname = userinfo.nickname;
    const password = userinfo.password;
    const sex = userinfo.sex;
    const want_region = userinfo.want_region;
    const want_vol = userinfo.want_region;
    const age = userinfo.age;
    console.log("Im UserInfo", userinfo);
    axios
      .post(
        "http://localhost:8080/auth/signup",
        {
          email: email,
          nickname: nickname,
          password: password,
          sex: sex,
          want_region: want_region,
          want_vol: want_vol,
          age: age,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("res");
      })
      .catch((err) => {
        console.log("err");
      });
  };

  const handleSignIn = () => {
    console.log("handleSignIn");
    const email = userinfo.email;
    const password = userinfo.password;

    console.log("Im UserInfo", userinfo);
    axios
      .post(
        "http://localhost:8080/auth/signin",
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        const accessToken = res.data.accessToken;
        console.log("===res.data===", res.data);
        console.log(accessToken);
        handleResponseSuccess(accessToken);
      })
      .catch((err) => {
        console.log("err");
      });
  };

  const handleResponseSuccess = (accessToken) => {
    isAuthenticated(accessToken);
  };

  const isAuthenticated = (accessToken) => {
    axios
      .get(
        "http://localhost:8080/user/info",
        { accessToken },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("res");
      })
      .catch((err) => {
        console.log("err");
      });
  };
  // email, nickname, password, sex, want_region, want_vol, age(young/adult/old)

  return (
    <div className="test_box">
      <div className="test_box_box">
        <input
          type="email"
          placeholder="email"
          onChange={handleInputValue("email")}
        />
        <input
          type="text"
          placeholder="nickname"
          onChange={handleInputValue("nickname")}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleInputValue("password")}
        />
        <input
          type="text"
          placeholder="sex"
          onChange={handleInputValue("sex")}
        />
        <input
          type="text"
          placeholder="want_region"
          onChange={handleInputValue("want_region")}
        />
        <input
          type="text"
          placeholder="want_vol"
          onChange={handleInputValue("want_vol")}
        />
        <input
          type="text"
          placeholder="age"
          onChange={handleInputValue("age")}
        />
        <button onClick={handleSignUp}>Auth/SignUp[Post]</button>
      </div>
      <div className="test_box_box">
        <input
          type="email"
          placeholder="email"
          onChange={handleInputValue("email")}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleInputValue("password")}
        />
        <button onClick={handleSignIn}>Auth/SignIn[Post]</button>
      </div>
      <div className="google">
        <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=111205615579-0h1irsj18ef04oeggsv09f39vg68lf1e.apps.googleusercontent.com&redirect_uri=http://localhost:8080/auth/google&response_type=code&prompt=consent&scope=https://www.googleapis.com/auth/userinfo.email">
          <img src={google} alt="google" width="300"></img>
        </a>
      </div>
      <div className="kakao">
        <a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=498bc95ff9c33f89e4cff4ef0775b24b&redirect_uri=http://localhost:3000/auth/kakao">
          <img src={kakaologo} alt="kakao"></img>
        </a>
      </div>
      <button className="multer">이미지를 올려보자!</button>
    </div>
  );
}
