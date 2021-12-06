import React from "react";
import { useHistory } from "react-router";
import Header2 from "../../components/common/Header2";
import styled from "styled-components";

import RecruiterMyPageMain from "../../components/Mypages/RecruiterMyPageMain";


  const MyNameContainer = styled.div`
    margin-left: 22px;
    margin-top: 36px;
    margin-bottom: 48px;
    width: 331px;
    height: 135px;
    background: #ffffff;
    box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const MyNameText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  `;

  const MynameMaill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const MynameMaillSpan = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
  `;

  const SeeRecruiterBtn = styled.button`
    margin-left: 24px;
    margin-bottom: 14px;
    width: 327px;
    height: 29px;
    background: #ff7676;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    border: 0;
    @media screen and (min-width: 37.5rem) {
      width: 760px;
      height: 71px;
      cursor: pointer;
    }
  `;
  const InfoEditBtn = styled.button`
    margin-bottom: 24px;
    margin-left: 24px;
    width: 327px;
    height: 29px;
    background: #ff7676;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    border: 0;
    @media screen and (min-width: 37.5rem) {
      width: 760px;
      height: 71px;
      cursor: pointer;
    }
  `;
  const WebContainer = styled.div`
    @media screen and (min-width: 37.5rem) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;
  export default function UserMyPage() {
    const history = useHistory();
  const GoSeeUsers = () => {
    history.push("/SeeUser");
  };
  const GoUserEditPasswordCheck = () => {
    history.push("/RecruiterPasswordCheck");
  };

  return (
    <>
      <Header2 componentName={"마이페이지"} />
      <WebContainer>
        <RecruiterMyPageMain />
        <SeeRecruiterBtn onClick={GoSeeUsers}>봉사자 보기</SeeRecruiterBtn>
        <InfoEditBtn onClick={GoUserEditPasswordCheck}>
          회원정보 수정하기
        </InfoEditBtn>
      </WebContainer>
    </>
  );
}
