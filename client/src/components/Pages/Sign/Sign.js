import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFD4D4;
  display:flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`
const Header = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0px 20px 0px;
`
const HeaderText = styled.div`
  width: 80%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`
const IconBox = styled.div`
  right: 5vw;
`

const LogoBox = styled.div`
  width: 80%;
  margin: 10px 0px 50px 0px;
  background-color: #FFD4D4;
  display:flex;
  justify-content: center;
  align-items: center;

`
const Logo = styled.img`
  width: 60%;
  object-fit: cover;
`
const InputBox = styled.div`
  background-color: #FFD4D4;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

const SignInWhiteBox = styled.div`
  background-color: white;
  width: 90%;
  display:flex;
  justify-content: center;
  border-radius: 20px;
  padding: 15px 0px 15px 0px;
  margin: 8px 0px 8px 0px;
`
const SignInWhiteInput = styled.input`
  width: 90%;
  border: none;

  ::placeholder {
    font-size: 15px;
  }
`
const CheckingPossibleOrNotBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`
const PossibleOrNot = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
  margin-left: 5vw;
`

const CompleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 10px 0px 10px 0px;
`
const CompleteButton = styled.div`
  background-color : #FF7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 15px;
  border-radius: 5px;
  font-size: 20px;
`
const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px 0px 100px 0px;
`
const SignUpButton = styled.div`
  background-color : #FF7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 15px;
  border-radius: 5px;
  font-size: 25px;
`


export default function SignIn() {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderText>
          </HeaderText>
          <IconBox>
           <FontAwesomeIcon icon={faTimes} />
          </IconBox>
        </Header>
        <LogoBox>
          <Logo src="./image/logo2.png"></Logo>
        </LogoBox>
        <InputBox>
          <SignInWhiteBox>
            <SignInWhiteInput placeholder="아이디">
            </SignInWhiteInput>
          </SignInWhiteBox>
          <SignInWhiteBox>
            <SignInWhiteInput placeholder="비밀번호">
            </SignInWhiteInput>
          </SignInWhiteBox>
        </InputBox>
        <CheckingPossibleOrNotBox>
          <PossibleOrNot>로그인에 실패하였습니다.</PossibleOrNot>
        </CheckingPossibleOrNotBox>
        
      
        <CompleteBox>
          <CompleteButton>로그인</CompleteButton>
        </CompleteBox>
        <CompleteBox>
          <CompleteButton>카카오</CompleteButton>
        </CompleteBox>
        <CompleteBox>
          <CompleteButton>구글</CompleteButton>
        </CompleteBox>
        <SignUpBox>
          <SignUpButton>회원 가입</SignUpButton>
        </SignUpBox>
      </Wrapper>
    </>
  );
}