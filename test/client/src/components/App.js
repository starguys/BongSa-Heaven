import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
// import kakaologo from "./kakaologo.png";
import google from "./google.png";
import "../App.css";
import Upload from "./uploading";
import KakaoKill from "./KakaoKill";
import KakaoTest from "./KakaoTest";
import Google from "./google";
// import KakaoLogin from "./KakaoLogin";
import googleLogin from "react-google-login";

axios.defaults.withCredentials = true;
export default function App() {
  const [data, setData] = useState(null);

  const history = useHistory();
  const GoKakaoTest = () => {
    history.push("/KakaoTest");
  };
  const url = window.location.href;
  const arr = url.split("=");
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

  useEffect(() => {
    //   //http://~~~~(?#) 전까지 가져온다.

    const url = new URL(window.location.href);
    console.log(url);
    // console.log(url.searchParams.get);
    //   //   //params code를 가져오는 경우
    // const authorizationCode = url.searchParams.get("code");

    // console.log(authorizationCode);
    const hash = url.hash;
    if (hash) {
      const accessToken = hash.split("=")[1].split("&")[0];
      axios
        .post("http://localhost:8080/auth/google", {
          authorization: `token ${accessToken}`,

          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((data) => {
          console.log(data);
          // setData(data);
        })
        .catch((e) => console.log("oAuth token expired"));
    }
    // code를 가지고 accesstoken 요청
    // const accessToken = .split("=")[1].split("&")[0];
    // console.log(accessToken);
    //서버에 코드를 보내고 서버에서 코드를 받아서 accesstoken 발급
  }, []);

  return (
    <div className="test_box">
      <Upload />
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
      <Google />
      <button onClick={GoKakaoTest}>카카오 멸망전</button>
      <Route exact path="/KakaoTest" component={KakaoTest} />
      <Route exact path="/KakoKill" component={KakaoKill} />
    </div>
  );
}
