import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function UserEditPasswordCheck() {
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  `;

  const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
    width: 100%;
    min-height: 12%;
    box-sizing: border-box;
  `;

  const IconBox = styled.div`
    padding-right: 30px;
  `;

  const PassCheckTitle = styled.div`
    width: 80%;
    height: 10%;
    display: flex;
    align-items: center;
    font-size: 34px;
    font-weight: bold;
  `;
  const PassCheckText = styled.div`
    width: 80%;
    height: 20%;
    font-size: 21px;
  `;
  const EmailCheckInput = styled.input`
    width: 80%;
    height: 5%;
  `;
  const PasswordCheckInput = styled.input`
    width: 80%;
    height: 5%;
    margin-top: 2%;
  `;
  const CheckBtn = styled.button`
    width: 82%;
    height: 7%;
    margin-top: 15%;
  `;
  return (
    <>
      <Wrapper>
        <Header>
          <IconBox>
            <FontAwesomeIcon icon={faTimes} />
          </IconBox>
        </Header>
        <PassCheckTitle>비밀번호 재확인</PassCheckTitle>
        <PassCheckText>
          회원의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 입력해
          주시기 바랍니다.
        </PassCheckText>
        <EmailCheckInput placeholder="email" />
        <PasswordCheckInput placeholder="password" />
        <CheckBtn>확인</CheckBtn>
      </Wrapper>
    </>
  );
}
