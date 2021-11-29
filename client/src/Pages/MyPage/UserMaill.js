import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import MaillList from "../../components/Mypages/MaillList";

export default function UserMaill() {
  const history = useHistory();
  const MaillTitleContainer = styled.div`
    margin-top: 27px;
    height: 21px;
    width: 375px;
    display: flex;
  `;
  const MaillTitleText = styled.div`
    margin-left: 132px;
    width: 111px;
    height: 21px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    text-align: center;
    color: #448b76;
  `;
  const MaillTitleBtn = styled.button`
    margin-left: 22px;
    width: 90px;
    height: 22px;
    background: #f7f7f7;
    border-radius: 4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #000000;
    border: 0;
  `;

  const MaillDeleteContainer = styled.div`
    margin-top: 27px;
    width: 375px;
    height: 40px;
    display: flex;
    align-items: center;
  `;
  const MaillDeleteInput = styled.input`
    margin-left: 24px;
    width: 14px;
    height: 14px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
  `;
  const MaillDeleteBtn = styled.button`
    margin-left: 16px;
    width: 68px;
    height: 39px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    /* identical to box height */

    letter-spacing: -0.495238px;

    color: #ffffff;
    background: #ff7676;
    border-radius: 44px;
    border: 0;
  `;

  const GoMaillWrite = () => {
    history.push("/MaillWrite");
  };

  return (
    <>
      <Header2 componentName={"쪽지"} />
      <MaillTitleContainer>
        <MaillTitleText>받은 쪽지함</MaillTitleText>
        <MaillTitleBtn onClick={GoMaillWrite}>쪽지 쓰기</MaillTitleBtn>
      </MaillTitleContainer>
      <MaillDeleteContainer>
        <MaillDeleteInput type="checkbox" />
        <MaillDeleteBtn>삭제</MaillDeleteBtn>
      </MaillDeleteContainer>
      <MaillList />
      <MaillList />
      <MaillList />
      <MaillList />
    </>
  );
}
