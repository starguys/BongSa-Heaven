import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const HeaderContainer = styled.div`
    background-color: rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  `;

  const LogoImg = styled.img`
    width: 50%;
  `;

  return (
    <>
      <HeaderContainer>
        <FontAwesomeIcon icon={faBars} className="HeaderIcon" />
        <LogoImg src="/image/logo.png" />
        <FontAwesomeIcon icon={faUserCircle} className="HeaderIcon" />
      </HeaderContainer>
    </>
  );
}
