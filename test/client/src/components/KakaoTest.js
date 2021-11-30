import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import kakaologo from "./kakaologo.png";
import KakaoLogin from "./KakaoLogin";
<<<<<<< HEAD
import axios from "axios";
import qs from "qs";

const KakaoTest = async (req, res) => {
=======
import Axios from "axios";

const KakaoTest = () => {
  const { Kakao } = window;
  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/KakaoTest",
    });
  };

>>>>>>> a9de40191e092d88722a5cbe660583a486aa1ccc
  const history = useHistory();
  const GoHome = () => history.push("/");
  const url = window.location.href;
  const arr = url.split("=");
<<<<<<< HEAD
  const code = arr[1];
  const KAKAO_REDIRECT_URI = "http://localhost:3000/KakaoTest";
  const KAKAO_TOKEN_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`;
  let tokenResponse;
  try {
    tokenResponse = await axios({
      method: "POST",
      KAKAO_TOKEN_URL,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_CLIENT_ID,
        client_secret: process.env.KAKAO_CLIENT_SECRET,
        redirect_uri: KAKAO_REDIRECT_URI,
        code,
      }),
    });
  } catch (error) {
    return console.log(error.data);
  }
  console.log(tokenResponse);
=======
  const authorizationCode = arr[1];

  //   useEffect(() => {
  //     getKakaoToken(authorizationCode);
  //     console.log(authorizationCode, "i kill kakao");
  //   });

  const getKakaoToken = () => {
    console.log(authorizationCode);
    Axios.post("http://localhost:8080/auth/kakao", {
      authorizationCode: authorizationCode,
    })
      .then((res) => {
        let token = res.data.token;
        localStorage.setItem("token", token);
        console.log(res);
      })
      .catch((err) => {
        console.log("err");
      });
  };

  const responseKakao = async (response) => {
    const accessToken = response.response.access_token;
    // 서버에 카카오에서 받은 토큰 검증요청
    axios
      .post("http://localhost:8080/auth/kakao", { accessToken })
      .then((res) => {
        console.log(res);
        // 검증 및 로그인 or 회원가입 성공
      })
      .catch((err) => {
        if (err.response.status === 403) {
        }
      });
  };

>>>>>>> a9de40191e092d88722a5cbe660583a486aa1ccc
  return (
    <>
      <button onClick={GoHome}>삼보 후퇴 일보 전진</button>
      <KakaoLogin responseKakao={responseKakao} />
      <button onClick={getKakaoToken}>야 이년아</button>
      <h3>{url}</h3>
      <h3>{arr}</h3>
      <h3>{arr[1]}</h3>
      <h3>{authorizationCode}</h3>
    </>
  );
};

export default KakaoTest;
