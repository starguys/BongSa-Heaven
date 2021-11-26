import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  display:flex;
  background-color: gray;
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
// const IconBox = styled.div`
//   right: 5vw;
// `
const SignupSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: red;
`
const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
`
const GeneralButton = styled.div`
  background-color : yellow;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  height: 20vh;
`
const GeneralButtonTitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
`
const GeneralButtonSubtitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`


const RecruiterButton = styled.div`
  background-color : blue;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  height: 20vh;
  margin-top: 10vh;
`
const RecruiterButtonTitle = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
`
const RecruiterButtonSubtitle = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export default function SignUp() {
  return (
    <>
      <Header>
        <HeaderText>
          회원 가입
        </HeaderText>
        {/* <IconBox>
          <FontAwesomeIcon icon={faTimes} />
        </IconBox> */}
      </Header>
      <SignupSpace>
      </SignupSpace>
      <SelectBox>
        <GeneralButton>
          <GeneralButtonTitle>
            일반 회원
          </GeneralButtonTitle>
          <GeneralButtonSubtitle>
           봉사를 희망하는 회원
          </GeneralButtonSubtitle>
        </GeneralButton>
        <RecruiterButton>
          <RecruiterButtonTitle>
            봉사 모집자
          </RecruiterButtonTitle>
          <RecruiterButtonSubtitle>
            봉사자를 찾는 회원
          </RecruiterButtonSubtitle>
        </RecruiterButton>
      </SelectBox>
    </>
  )
}
