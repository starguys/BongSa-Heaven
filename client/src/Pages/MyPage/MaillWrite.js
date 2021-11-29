import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Header2 from "../../components/common/Header2";
import MaillWriteTop from "../../components/Mypages/MaillWriteTop";
import MaillWriteMain from "../../components/Mypages/MaillWriteMain";
import MaillWriteBottom from "../../components/Mypages/MaillWriteBottom";

export default function UserMaill() {
  const MaillTitleContainer = styled.div`
    margin-top: 27px;
    height: 33px;
    width: 375px;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
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
  `;
  const MaillTitleBtnSpan = styled.span`
    color: #ffffff;
    margin-left: 7px;
  `;
  const MaillNickCheckContainer = styled.div`
    margin-left: 39px;
    margin-top: 10px;
    width: 332px;
    height: 42px;
  `;
  const MaillNickCheckTop = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
  `;
  const MaillNickCheckTopWho = styled.div`
    width: 60px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #000000;
  `;
  const MaillNickCheckTopNameInput = styled.div`
    width: 160px;
    height: 22px;
    background: #ffffff;
    box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
  `;
  const MaillNickCheckTopNameCheckBtn = styled.button`
    margin-left: 14px;
    width: 90px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: #000000;
    border: 0;
  `;

  const MaillNickCheckBottom = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
  `;
  const MaillNickCheckBottomText = styled.div`
    margin-left: 60px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  `;
  const MaillWriteInput = styled.input`
    margin-top: 12px;
    margin-left: 36px;
    background: #ffffff;
    box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    width: 317px;
    height: 196px;
    border: 0;
  `;
  return (
    <>
      <Header2 componentName={"쪽지"} />
      <MaillWriteTop />
      <MaillWriteMain />
      <MaillWriteBottom />
    </>
  );
}
