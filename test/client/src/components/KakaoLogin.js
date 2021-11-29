import React from "react";
import KakaoLoin from "react-kakao-login";
import kakaologo from "./kakaologo.png";

export default function Kakao({ responseKakao }) {
  return (
    <KakaoLoin
      token="fc9c0ed012d3c76f1c78904adbf0e0f9"
      onSuccess={responseKakao}
      render={(renderProps) => (
        <img
          src={kakaologo}
          alt="kakao"
          onClick={renderProps.onClick}
          aria-hidden="true"
        />
      )}
    />
  );
}
