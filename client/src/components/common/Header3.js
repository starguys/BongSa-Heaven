import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header3(props) {
  const history = useHistory();
  const HeaderContainer = styled.div`
    width: 100%;
    height: 64px;
    background: #ffd5d5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 37.5rem) {
      display: none;
    }
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

  const GoBack = () => history.goBack();

  return (
    <>
      <HeaderContainer>
        <HeaderLogIconLeft>
          <HeaderText></HeaderText>
        </HeaderLogIconLeft>
        <HeaderText>{props.componentName}</HeaderText>
        <HeaderLogIconRight onClick={GoBack}>
          <FontAwesomeIcon icon={faTimes} className="HeaderIcon" />
        </HeaderLogIconRight>
      </HeaderContainer>
    </>
  );
}
