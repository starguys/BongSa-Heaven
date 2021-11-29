import React from "react";
import styled from 'styled-components'



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



export default function SignInInput() {
  return (
    <>
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
        
    </>
  );
}