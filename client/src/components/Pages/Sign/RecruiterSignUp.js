import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
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



const SignUpWhiteBox = styled.div`
  background-color: white;
  width: 90%;
  display:flex;
  justify-content: center;
  border-radius: 20px;
  padding: 15px 0px 15px 0px;
  margin: 8px 0px 8px 0px;
`
const SignUpWhiteInput = styled.input`
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
`
const PossibleOrNot = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
  margin-left: 5vw;
`

const CheckingPossibleOrNotButton = styled.div`
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  border-radius: 20px;
`



const CompleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px 0px 30px 0px;
`
const CompleteButton = styled.div`
  background-color : gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  font-size: 18px;
`




export default function RecruiterSignUp() {
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
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="아이디">
          </SignUpWhiteInput>
        </SignUpWhiteBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="닉네임">
          </SignUpWhiteInput>
        </SignUpWhiteBox>
        <CheckingPossibleOrNotBox>
          <PossibleOrNot>사용 가능</PossibleOrNot>
          <CheckingPossibleOrNotButton>중복 확인</CheckingPossibleOrNotButton>
        </CheckingPossibleOrNotBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="비밀번호">
          </SignUpWhiteInput>
        </SignUpWhiteBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="비밀번호 확인">
          </SignUpWhiteInput>
        </SignUpWhiteBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="봉사 활동 지역">
          </SignUpWhiteInput>
        </SignUpWhiteBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="봉사 활동 종류">
          </SignUpWhiteInput>
        </SignUpWhiteBox>
        <SignUpWhiteBox>
          <SignUpWhiteInput placeholder="기관명/ 봉사 모집 단체 이름">
          </SignUpWhiteInput>
        </SignUpWhiteBox>
      
        <CompleteBox>
          <CompleteButton>회원가입 완료</CompleteButton>
        </CompleteBox>
      </Wrapper>
    </>
  );
}
