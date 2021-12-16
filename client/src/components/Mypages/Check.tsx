import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router";
import axios from "axios";
import {useSelector} from "react-redux";

const DeleteBoxTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: red;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;
const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0px 15px 0px;
`;
const SpendBtn = styled.div`
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 20px 0px 20px 0px;
  margin-right: 20px;
  margin-bottom: 300px;
  border-radius: 20px;

  @media screen and (min-width: 1024px) {
    width: 150px;
    font-size: 20px;
    cursor: pointer;
  }
`;
const CancelButton = styled.div`
  background-color: white;
  color: black;
  border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 20px 0px 20px 0px;
  margin-left: 20px;
  margin-bottom: 300px;
  border-radius: 20px;

  @media screen and (min-width: 1024px) {
    width: 150px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default function Check({contents, leftBtn}: any) {
  const name = useSelector((state: any) => state.mailWriteName.name);
  const text = useSelector((state: any) => state.mailWriteText.text);
  const history = useHistory();
  const Cancel = () => history.goBack();
  const userWithdrawalHandler = (props: any) => {
    // 회원탈퇴시 모든 정보 삭제, 쿠키, 토큰 삭제
    console.log(name);
    console.log(text);
    axios
      .post(
        `${process.env.REACT_APP_API_URI}/mail/mailregister`,
        {text: text, nickname: name},
        {
          headers: {
            authorization: `Bearer ` + localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
          },
        },
      )
      .then(res => {
        history.push("/");
      })
      .catch(err => {
        console.log("err");
      });
  };

  return (
    <>
      <DeleteBoxTitleBox>{contents}</DeleteBoxTitleBox>
      <SelectBox>
        <SpendBtn onClick={userWithdrawalHandler}>{leftBtn}</SpendBtn>
        <CancelButton onClick={() => Cancel()}>취소</CancelButton>
      </SelectBox>
    </>
  );
}
