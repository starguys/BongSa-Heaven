import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Header4 from "../../components/common/Header4";

export default function UserEditPasswordCheck() {
  const history = useHistory();

  const PassCheckTitle = styled.div`
    margin-left: 43px;
    margin-top: 26px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
  `;
  const PassCheckText = styled.div`
    margin-top: 30px;
    margin-left: 43px;
    width: 290px;
    height: 42px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
  `;

  const PasswordCheckInput = styled.input`
    margin-top: 116px;
    margin-left: 28px;
    width: 320px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #000000;
  `;
  const CheckBtn = styled.button`
    margin-left: 27px;
    margin-top: 45px;
    margin-bottom: 140px;
    width: 327px;
    height: 55px;
    background: #f7f7f7;
    border-radius: 4px;
    border: 0;
  `;

  const GoUserEdit = () => {
    history.push("/UserEdit");
  };
  return (
    <>
      <Header4 />
      <PassCheckTitle>비밀번호 재확인</PassCheckTitle>
      <PassCheckText>
        회원의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 입력해 주시기
        바랍니다.
      </PassCheckText>
      <PasswordCheckInput placeholder="password" />
      <CheckBtn onClick={GoUserEdit}>확인</CheckBtn>
    </>
  );
}
