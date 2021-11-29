import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function UserMyPageMain() {
  const history = useHistory();

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

  const handleMaillBox = () => {
    console.log("hi");
    history.push("/UserMaill");
  };

  return (
    <>
      <MyNameContainer>
        <MyNameText>로켓봉사단님 어서오세요.</MyNameText>
        <MynameMaill onClick={handleMaillBox}>
          <FontAwesomeIcon icon={faEnvelope} className="MyPageIcon" />
          <MynameMaillSpan>쪽지함</MynameMaillSpan>
        </MynameMaill>
      </MyNameContainer>
    </>
  );
}
