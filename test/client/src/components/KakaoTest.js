import React from "react";
import { useHistory } from "react-router";
import kakaologo from "./kakaologo.png";
import KakaoLogin from "./KakaoLogin";

const KakaoTest = () => {
  const history = useHistory();
  const GoHome = () => history.push("/");
  const url = window.location.href;
  const arr = url.split("=");

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
