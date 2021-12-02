import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffd4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0px 20px 0px;
`;
const HeaderText = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
const IconBox = styled.div`
  right: 5vw;
`;

const LogoBox = styled.div`
  width: 80%;
  margin: 10px 0px 50px 0px;
  background-color: #ffd4d4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 60%;
  object-fit: cover;
`;
const InputBox = styled.div`
  background-color: #ffd4d4;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const SignInWhiteBox = styled.div`
  background-color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 15px 0px 15px 0px;
  margin: 8px 0px 8px 0px;
`;
const SignInWhiteInput = styled.input`
  width: 90%;
  border: none;

  ::placeholder {
    font-size: 15px;
  }
`;
const CheckingPossibleOrNotBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
const PossibleOrNot = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
  margin-left: 5vw;
`;

const CompleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 10px 0px 10px 0px;
`;
const CompleteButton = styled.div`
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 15px;
  border-radius: 5px;
  font-size: 20px;
`;
const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px 0px 100px 0px;
`;
const SignUpButton = styled.div`
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 15px;
  border-radius: 5px;
  font-size: 25px;
`;

export default function SignIn({ accessToken, handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  //로그인 버튼을 클릭햇을때 메인으로 이동하고 로그인 상태여야하고,

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const onKeyPress = (e) => {
    if (window.event.keyCode == 13) {
      console.log("눌러");
      handleLoginRequest();
    }
  };
  const handleLoginRequest = async (e) => {
    //유효성 검사
    if (!email) {
      setErrorMessage("이메일을 입력해주세요");
    } else if (!password) {
      setErrorMessage("비밀번호 입력해주세요");
    } else if (!email && !password) {
      setErrorMessage("이메일과 비밀번호를 입력하세요.");
    } else if (email && password) {
      axios
        .post(
          "http://localhost:8080/auth/signin",
          { email: email, password: password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          //로컬스토리지에저장,메인으로 복귀
          handleLogin(res.data.accessToken);
          localStorage.setItem("accessToken", res.data.accessToken);
        });
    }
  };
  //로그인창에서 이동
  const moveToSignUP = () => {
    history.push("/signup");
  };

  return (
    <>
      <Wrapper>
        <Header>
          <HeaderText></HeaderText>
          <IconBox>
            <FontAwesomeIcon icon={faTimes} />
          </IconBox>
        </Header>
        <LogoBox>
          <Logo src="./image/logo2.png"></Logo>
        </LogoBox>
        <InputBox>
          <SignInWhiteBox>
            <SignInWhiteInput
              type="email"
              placeholder="아이디(이메일)"
              onChange={handleEmail}
            >
              {/* {errorMessage} */}
            </SignInWhiteInput>
          </SignInWhiteBox>

          <SignInWhiteBox>
            <SignInWhiteInput
              type="password"
              placeholder="비밀번호"
              onChange={handlePassword}
            ></SignInWhiteInput>
          </SignInWhiteBox>
        </InputBox>

        <CheckingPossibleOrNotBox>
          <PossibleOrNot>{errorMessage}</PossibleOrNot>
        </CheckingPossibleOrNotBox>

        <CompleteBox>
          <CompleteButton onClick={handleLoginRequest}>로그인</CompleteButton>
        </CompleteBox>
        <CompleteBox>
          <CompleteButton>카카오</CompleteButton>
        </CompleteBox>
        <CompleteBox>
          <CompleteButton>구글</CompleteButton>
        </CompleteBox>
        <SignUpBox>
          <SignUpButton onClick={moveToSignUP} user>
            회원 가입
          </SignUpButton>
        </SignUpBox>
      </Wrapper>
    </>
  );
}
