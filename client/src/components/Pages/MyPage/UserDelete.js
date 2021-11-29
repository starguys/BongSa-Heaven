import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function UserDelete() {
  const HeaderContainer = styled.div`
    background-color: rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
  `;

  const HeaderLeftIcon = styled.div`
    height: 15%;
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  const HeaderRightIcon = styled.div`
    height: 15%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const HeaderText = styled.div`
    height: 15%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  `;

  const DeleteTextContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: red;
  `;

  const DeleteBtnContainer = styled.div`
    height: 20%;
    width: 100%;
    display: flex;

    align-items: center;
  `;

  const DeleteBtnYes = styled.button`
    background-color: rgb(128, 128, 128);
    color: white;
    margin-left: 15%;
    border: 0;
    height: 33%;
    width: 35%;
  `;
  const DeleteBtnNo = styled.button`
    background-color: white;
    margin-left: 10%;
    height: 33%;
    width: 23%;
    border: solid 1px rgb(0, 0, 0, 0.4);
  `;

  return (
    <>
      <HeaderContainer>
        <HeaderLeftIcon></HeaderLeftIcon>
        <HeaderText>회원탈퇴</HeaderText>
        <HeaderRightIcon>
          <FontAwesomeIcon icon={faTimes} className="HeaderIcon" />
        </HeaderRightIcon>
      </HeaderContainer>
      <DeleteTextContainer>회원탈퇴를 하시겠습니까?</DeleteTextContainer>
      <DeleteBtnContainer>
        <DeleteBtnYes>회원탈퇴</DeleteBtnYes>
        <DeleteBtnNo>취소</DeleteBtnNo>
      </DeleteBtnContainer>
    </>
  );
}
