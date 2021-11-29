import React from "react";
import Header2 from "../../components/common/Header2";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function UserMyPage() {
  const MyNameContainer = styled.div`
    margin-left: 22px;
    margin-top: 36px;
    margin-bottom: 48px;
    width: 331px;
    height: 135px;
    background: #ffffff;
    box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const MyNameText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  `;

  const MynameMaill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const MynameMaillSpan = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
  `;

  const SeeRecruiterBtn = styled.button`
    margin-left: 24px;
    margin-bottom: 14px;
    width: 327px;
    height: 29px;
    background: #ff7676;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    border: 0;
  `;
  const InfoEditBtn = styled.button`
    margin-bottom: 24px;
    margin-left: 24px;
    width: 327px;
    height: 29px;
    background: #ff7676;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    border: 0;
  `;

  const HiddenVolContainer = styled.div`
    margin-left: 24px;
    margin-bottom: 30px;
    width: 325px;
    height: 29px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const HiddenVolToggle = styled.div`
    width: 65px;
    height: 29px;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 14.5px;
  `;
  return (
    <>
      <Header2 componentName={"마이페이지"} />
      <MyNameContainer>
        <MyNameText>로켓봉사단님 어서오세요.</MyNameText>
        <MynameMaill>
          <FontAwesomeIcon icon={faEnvelope} className="MyPageIcon" />
          <MynameMaillSpan>쪽지함</MynameMaillSpan>
        </MynameMaill>
      </MyNameContainer>
      <SeeRecruiterBtn>봉사모집자 보기</SeeRecruiterBtn>
      <InfoEditBtn>회원정보 수정하기</InfoEditBtn>
      <HiddenVolContainer>
        <span>봉사희망정보 숨기기</span>
        <HiddenVolToggle></HiddenVolToggle>
      </HiddenVolContainer>
    </>
  );
}
