import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";
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
const DeleteButton = styled.div`
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

export default function Check(props) {
  const history = useHistory();
  const Delete = (url) => history.push(url);
  const Cancel = (url) => history.push(url);

  const userWithdrawalHandler = () => {
    // 회원탈퇴시 모든 정보 삭제, 쿠키, 토큰 삭제

    axios
      .delete(
        "http://localhost:8080/user/withdrawal",

        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "applicaton/json",
          },
        }
      )
      .then((res) => {
// 쿠키삭제, accesstoken삭제
  const deleteCookie = function(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}
deleteCookie('name');
        localStorage.clear()
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <DeleteBoxTitleBox>{props.contents}</DeleteBoxTitleBox>
      <SelectBox>
        <DeleteButton userWithdrawalHandler={userWithdrawalHandler}>
          {props.leftBtn}
        </DeleteButton>
        <CancelButton onClick={() => Cancel(props.cancel)}>취소</CancelButton>
      </SelectBox>
    </>
  );
}
