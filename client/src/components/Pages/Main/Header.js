import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const HeaderContainer = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 93.57%;

    background: #ffd5d5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  `;

  const HeaderLogIconLeft = styled.div`
    position: absolute;
    width: 23px;
    height: 15px;
    left: 13px;
    top: 28px;
  `;

  const HeaderLogIconRight = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 337px;
    top: 24px;
  `;

  const LogoImg = styled.img`
    position: absolute;
    width: 34px;
    height: 23px;
    left: 170px;
    top: 23px;
  `;

  return (
    <>
      <HeaderContainer>
        <HeaderLogIconLeft>
          <FontAwesomeIcon icon={faBars} className="HeaderIcon" />
        </HeaderLogIconLeft>
        <LogoImg src="/image/logo2.png" />
        <HeaderLogIconRight>
          <FontAwesomeIcon icon={faUserCircle} className="HeaderIcon" />
        </HeaderLogIconRight>
      </HeaderContainer>
    </>
  );
}
