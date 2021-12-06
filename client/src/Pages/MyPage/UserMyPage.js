import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Header2 from "../../components/common/Header2";
import UserMyPageMain from "../../components/Mypages/UserMyPageMain";


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

  const HiddenVolContainer = styled.div`
    margin-left: 24px;
    margin-bottom: 30px;
    width: 325px;
    height: 29px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 37.5rem) {
      width: 760px;
      height: 71px;
      align-items: flex-start;
    }
  `;

  const HiddenVolToogleInput = styled.input``;
  const HiddenVolToogleLabel = styled.label``;
  const HiddenVolToogleBall = styled.span``;
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
    const [isChecked, setIsChecked] = useState(true);
    const handleSwitch = () => {
      if (isChecked) {
        setTimeout(setIsChecked(false), 100);
      } else {
        setTimeout(setIsChecked(true), 100);
      }
    };
  const GoSeeRecruiter = () => {
    history.push("/SeeRecruiter");
  };
  const GoUserEditPasswordCheck = () => {
    history.push("/UserEditPasswordCheck");
  };
  return (
    <>
      <Header2 componentName={"마이페이지"} />
      <WebContainer>
        <UserMyPageMain />
        <SeeRecruiterBtn onClick={GoSeeRecruiter}>
          봉사모집자 보기
        </SeeRecruiterBtn>
        <InfoEditBtn onClick={GoUserEditPasswordCheck}>
          회원정보 수정하기
        </InfoEditBtn>
        <HiddenVolContainer>
          <span>봉사희망정보 숨기기</span>
          <HiddenVolToogleLabel
            className="switch-button"
            onClick={handleSwitch}
          >
            <HiddenVolToogleInput type="checkbox" checked={isChecked} />
            <HiddenVolToogleBall className="onoff-switch" />
          </HiddenVolToogleLabel>
        </HiddenVolContainer>
      </WebContainer>
    </>
  );
}
