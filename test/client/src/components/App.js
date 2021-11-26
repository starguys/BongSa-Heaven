import React, { useState } from "react";
import axios from "axios";
import "../App.css";

// import ReactDOM from 'react-dom';
import {GoogleLogin} from 'react-google-login';
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
        console.log("res");
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
    // <script src="https://apis.google.com/js/platform.js" async defer></script>

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

          // 구글로그인
        />  <GoogleLogin
        clientId='288722608551-n6ktb74p9fbe0871dikkoul506eedkgq.apps.googleusercontent.com'
        onSuccess={googleHandler}
        onFailure={(err) => console.log('err', err)}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        render={renderProps => <button onClick={renderProps.onClick}>구글</button>}
    />
  
        <button onClick={handleSignIn}>Auth/SignIn[Post]</button>
      </div>
    </div>
  );
}
