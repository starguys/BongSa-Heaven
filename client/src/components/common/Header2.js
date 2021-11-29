import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export default function Header2(props) {
  const HeaderContainer = styled.div`
    width: 100%;
    height: 64px;
    background: #ffd5d5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const HeaderLogIconLeft = styled.div`
    margin-left: 15px;
    width: 24px;
    height: 24px;
  `;

  const HeaderLogIconRight = styled.div`
    margin-right: 15px;
    width: 24px;
    height: 24px;
  `;

  const HeaderText = styled.div`
    height: 15%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  `;

  return (
    <>
      <HeaderContainer>
        <HeaderLogIconLeft>
          <FontAwesomeIcon icon={faChevronLeft} className="HeaderIcon" />
        </HeaderLogIconLeft>
        <HeaderText>{props.componentName}</HeaderText>
        <HeaderLogIconRight>
          <FontAwesomeIcon icon={faUserCircle} className="HeaderIcon" />
        </HeaderLogIconRight>
      </HeaderContainer>
    </>
  );
}
