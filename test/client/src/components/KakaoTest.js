import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import kakaologo from "./kakaologo.png";
import KakaoLogin from "./KakaoLogin";
import Axios from "axios";

const KakaoTest = () => {
  const { Kakao } = window;
  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/KakaoTest",
    });
  };

  const history = useHistory();
  const GoHome = () => history.push("/");
  const url = window.location.href;
  const arr = url.split("=");
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

  return (
    <>
      <KakaoLogin responseKakao={responseKakao} />
    </>
  );
};

export default KakaoTest;
