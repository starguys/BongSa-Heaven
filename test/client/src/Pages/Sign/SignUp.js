import React, { useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import Header2 from "../../components/common/Header2";
import axios from "axios";
const Header = styled.div`
  display: flex;
  background-color: #ffd4d4;
  align-items: center;
  width: 100%;
  padding: 30px 0px 20px 0px;
`;
const HeaderText = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const IconBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackIcon = styled.img`
  width: 30%;
  object-fit: cover;
`;

const SignupSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: red;
`;
const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
`;
const GeneralButton = styled.div`
  background-color: #4af197;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  height: 20vh;
`;
const GeneralButtonTitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
`;
const GeneralButtonSubtitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const RecruiterButton = styled.div`
  background-color: #bb7bfc;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  height: 20vh;
  margin-top: 10vh;
`;
const RecruiterButtonTitle = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
`;
const RecruiterButtonSubtitle = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default function SignUp() {
  const history = useHistory();
  const movetToUserSignUp = () => {
    history.push("/UserSignUp");
  };
  const movetToRecruiterSignUp = () => {
    history.push("/RecruiterSignUp");
  };

  return (
    <>
      <Header2 componentName={"회원가입"} />

      <SignupSpace></SignupSpace>
      <SelectBox>
        <GeneralButton>
          <GeneralButtonTitle onClick={movetToUserSignUp}>
            일반 회원
          </GeneralButtonTitle>
          <GeneralButtonSubtitle>봉사를 희망하는 회원</GeneralButtonSubtitle>
        </GeneralButton>

        <RecruiterButton>
          <RecruiterButtonTitle onClick={movetToRecruiterSignUp}>
            봉사 모집자
          </RecruiterButtonTitle>
          <RecruiterButtonSubtitle>봉사자를 찾는 회원</RecruiterButtonSubtitle>
        </RecruiterButton>
      </SelectBox>
    </>
  );
}
