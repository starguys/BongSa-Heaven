import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  background: #ffffff;

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
export default function Header3(props: any) {
  const history = useHistory();

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
