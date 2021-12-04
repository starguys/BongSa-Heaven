import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function MaillWriteTop() {
  const history = useHistory();
  const MaillTitleContainer = styled.div`
    margin-top: 27px;
    height: 33px;
    width: 375px;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
    @media screen and (min-width: 37.5rem) {
      width: 100%;
      justify-content: center;
      border: 0;
    }
  `;
  const MaillTitleContainerDiv = styled.div`
    @media screen and (min-width: 37.5rem) {
      width: 1080px;
      display: flex;
      justify-content: flex-end;
      margin-right: 3%;
    }
    display: flex;
  `;

  const MaillTitleCancle = styled.button`
    margin-left: 36px;
    background: #f7f7f7;
    width: 65px;
    height: 22px;
    border-radius: 4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #000000;
    border: 0;
    @media screen and (min-width: 37.5rem) {
      display: none;
    }
  `;
  const MaillTitleText = styled.div`
    margin-left: 31px;
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
    margin-left: 31px;
    width: 90px;
    height: 22px;
    background: #ff7676;
    border-radius: 4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #000000;
    border: 0;
    cursor: pointer;
  `;
  const MaillTitleBtnSpan = styled.span`
    color: #ffffff;
    margin-left: 7px;
  `;
  const GoBack = () => {
    history.goBack();
  };
  const GoMaillWriteCheck = () => {
    history.push("/MaillWriteCheck");
  };

  return (
    <>
      <MaillTitleContainer>
        <MaillTitleContainerDiv>
          <MaillTitleCancle onClick={GoBack}>취소</MaillTitleCancle>
          <MaillTitleText>쪽지 쓰기</MaillTitleText>
          <MaillTitleBtn onClick={GoMaillWriteCheck}>
            <FontAwesomeIcon icon={faPaperPlane} />
            <MaillTitleBtnSpan>쪽지 보내기</MaillTitleBtnSpan>
          </MaillTitleBtn>
        </MaillTitleContainerDiv>
      </MaillTitleContainer>
    </>
  );
}
