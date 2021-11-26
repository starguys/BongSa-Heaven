import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
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

const LogoBox = styled.img`
  padding: 40px 100px;
  margin: 10px 0px 30px 0px;
  background-color: rgb(0, 0, 0, 0.2);
  display:flex;
  justify-content: center;
  align-items: center;
`
const GrayBox = styled.div`
  background-color: rgb(0, 0, 0, 0.2);
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
  background-color : gray;
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
  background-color : gray;
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
        <LogoBox src="./image/logo.png"></LogoBox>
        <GrayBox>
          <SignInWhiteBox>
            <SignInWhiteInput placeholder="아이디">
            </SignInWhiteInput>
          </SignInWhiteBox>
          <SignInWhiteBox>
            <SignInWhiteInput placeholder="닉네임">
            </SignInWhiteInput>
          </SignInWhiteBox>
        </GrayBox>
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