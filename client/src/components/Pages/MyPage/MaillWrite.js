import React from "react";
import MyPageHeader from "./MyPageHeader";
import styled from "styled-components";
export default function UserMaill() {
  
  const UserMaillContainer = styled.div`
    width: 100%;
  `;
  const UserMaillWhoSend = styled.div`
    width: 100%;
    height: 7%;
    display: flex;
    align-items: center;
  `;
  const UserMaillWhoSendText = styled.div`
    height: 100%;
    width: 23%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const UserMaillWhoSendInput = styled.input`
    margin-right: 3%;
  `;
  const UserMaillWhoSendBtn = styled.button`
    border: 0;
    height: 55%;
    width: 20%;
    font-size: 12px;
  `;

  const UserMaillNickCheckContainer = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const UserMaillNickCheckTextTrue = styled.span``;
  const UserMaillNickCheckTextFalse = styled.span``;

  const UserMaillSend = styled.div`
    border-bottom: solid 1px rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const UserMaillCancleBtn = styled.button`
    border: 0;
    height: 75%;
    width: 20%;
    margin-left: 3%;
  `;
  const UserMaillSendBtn = styled.button`
    border: 0;
    height: 75%;
    width: 20%;
    margin-right: 3%;
  `;

  const UserMaillMessage = styled.div`
    border-bottom: solid 1px rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const UserMaillMessageContents = styled.div`
    width: 75%;
    height: 100%;
  `;
  const UserMaillMessageInput = styled.input`
    width: 80%;
    height: 70%;
  `;

  const UserMaillMessageContentsText = styled.div`
    border: solid 1px black;
    width: 90;
    height: 50%;
    padding-top: 5px;
    padding-left: 5px;
  `;
  return (
    <>
      <MyPageHeader componentName={"쪽지"} />
      <span>PRpls..</span>
    </>
  );
}
