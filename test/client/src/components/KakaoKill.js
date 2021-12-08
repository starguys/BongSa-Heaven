import React from "react";
import { useHistory } from "react-router";
import KakaoLogin from "./KakaoLogin";

const KakaoKill = () => {
  const history = useHistory();
  const GoBack = () => history.goBack();
  return (
    <>
      <KakaoLogin />
      <button onClick={GoBack}>삼보 후퇴 일보 전진</button>
    </>
  );
};

export default KakaoKill;
