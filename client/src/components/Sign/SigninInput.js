import React from "react";
import styled from 'styled-components'

import  { useState, useRef, useEffect } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
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


  //이벤트 클릭햇을시 반응하도록
  //이메일 입력 , 패스워드 입력
  const [email,setEmail] = useState('')
  const [password,setPassword] =useState('')

  //로그인 버튼을 클릭햇을때
  const handleLogin = () =>{
  
  }
  const handleEmail = (e) =>{
 
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const handlePassword =(e) =>{
    e.preventDefault();
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  return (
    <>
        <InputBox>
          <SignInWhiteBox>
            <SignInWhiteInput type='email' placeholder="아이디(이메일)" onChange = {handleEmail} >
            </SignInWhiteInput>
          </SignInWhiteBox>
          <SignInWhiteBox>
            <SignInWhiteInput  type='password' placeholder="비밀번호" onChange ={handlePassword}>
            </SignInWhiteInput>
          </SignInWhiteBox>
        </InputBox>
        <CheckingPossibleOrNotBox>
          <PossibleOrNot>로그인에 실패하였습니다.</PossibleOrNot>
        </CheckingPossibleOrNotBox>
        
    </>
  );
}