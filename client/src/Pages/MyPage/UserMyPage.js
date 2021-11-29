import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Header2 from "../../components/common/Header2";
import UserMyPageMain from "../../components/Mypages/UserMyPageMain";

export default function UserMyPage() {
  const history = useHistory();
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
  `;

  const HiddenVolContainer = styled.div`
    margin-left: 24px;
    margin-bottom: 30px;
    width: 325px;
    height: 29px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const HiddenVolToggle = styled.div`
    width: 65px;
    height: 29px;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 14.5px;
  `;

  const GoSeeRecruiter = () => {
    history.push("/SeeRecruiter");
  };
  const GoUserEditPasswordCheck = () => {
    history.push("/UserEditPasswordCheck");
  };
  return (
    <>
      <Header2 componentName={"마이페이지"} />
      <UserMyPageMain />
      <SeeRecruiterBtn onClick={GoSeeRecruiter}>
        봉사모집자 보기
      </SeeRecruiterBtn>
      <InfoEditBtn onClick={GoUserEditPasswordCheck}>
        회원정보 수정하기
      </InfoEditBtn>
      <HiddenVolContainer>
        <span>봉사희망정보 숨기기</span>
        <HiddenVolToggle></HiddenVolToggle>
      </HiddenVolContainer>
    </>
  );
}
