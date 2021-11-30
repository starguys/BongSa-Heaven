import React from "react";
import { useHistory } from "react-router";
import kakaologo from "./kakaologo.png";
import KakaoLogin from "./KakaoLogin";
import axios from "axios";
import qs from "qs";

const KakaoTest = async (req, res) => {
  const history = useHistory();
  const GoHome = () => history.push("/");
  const url = window.location.href;
  const arr = url.split("=");
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
  return (
    <>
      <button onClick={GoHome}>삼보 후퇴 일보 전진</button>
      <KakaoLogin />
      <h3>{url}</h3>
      <h3>{arr}</h3>
      <h3>{arr[1]}</h3>
    </>
  );
};

export default KakaoTest;
