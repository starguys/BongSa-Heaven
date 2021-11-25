import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export default function MyPageHeader(props) {
  const MyPageHeaderContainer = styled.div`
    background-color: rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
  `;

  const MyPageHeaderLeftIcon = styled.div`
    height: 15%;
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  const MyPageHeaderRightIcon = styled.div`
    height: 15%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const MyPageHeaderText = styled.div`
    height: 15%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  `;

  return (
    <>
      <MyPageHeaderContainer>
        <MyPageHeaderLeftIcon>
          <FontAwesomeIcon icon={faChevronLeft} className="HeaderIcon" />
        </MyPageHeaderLeftIcon>
        <MyPageHeaderText>{props.componentName}</MyPageHeaderText>
        <MyPageHeaderRightIcon>
          <FontAwesomeIcon icon={faUserCircle} className="HeaderIcon" />
        </MyPageHeaderRightIcon>
      </MyPageHeaderContainer>
    </>
  );
}
