import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";
import Header3 from "../../components/common/Header3";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffd4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  @media screen and (min-width: 37.5rem) {
    background-color: white;
  }
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 37.5rem) {
    margin-top: 65px;
    width: 1080px;
  }
`;

const LogoBox = styled.div`
  width: 80%;
  margin: 10px 0px 50px 0px;
  background-color: #ffd4d4;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 37.5rem) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 60%;
  object-fit: cover;
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
  @media screen and (min-width: 37.5rem) {
    border: solid 1px black;
    width: 40%;
    height: 40px;
  }

  ::placeholder {
  }
`;

const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 10px 0px 30px 0px;
`;
const CompleteButton = styled.div`
  margin-bottom: 15px;
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  width: 110px;
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
      <Header3 />
      <Wrapper>
        <MainContainer>
          <LogoBox>
            <Logo src="./image/logo2.png"></Logo>
          </LogoBox>

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
          <CompleteBox>
            <CompleteButton onClick={moveToSignUP}>로그인</CompleteButton>
            <CompleteButton onClick={moveToSignUP}>구글</CompleteButton>
            <CompleteButton onClick={moveToSignUP}>카카오</CompleteButton>
            <CompleteButton onClick={moveToSignUP}>회원가입</CompleteButton>
          </CompleteBox>
        </MainContainer>
      </Wrapper>
    </>
  );
}
