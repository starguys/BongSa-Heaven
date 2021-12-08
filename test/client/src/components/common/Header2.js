import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle as LoginIcon } from "@fortawesome/free-solid-svg-icons";



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
  
  export default function Header2(props) {
    const history = useHistory();
    const isLogin = false;
    const isRecruiter = false;

  const GoBack = () => {
    history.goBack();
    console.log("hi");
  };

  const GoMyPage = () => {
    console.log("hi");
    isRecruiter
      ? history.push("/RecruiterMyPage")
      : history.push("/UserMyPage");
  };

  const GoHome = () => {
    history.push("/");
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLogIconLeft onClick={GoBack}>
          <FontAwesomeIcon icon={faChevronLeft} className="HeaderIcon" />
        </HeaderLogIconLeft>
        <HeaderText onClick={GoHome}>{props.componentName}</HeaderText>
        <HeaderLogIconRight>
          {isLogin ? (
            <FontAwesomeIcon icon={LoginIcon} className="HeaderIcon" />
          ) : (
            <FontAwesomeIcon
              icon={faUserCircle}
              className="HeaderIcon"
              onClick={GoMyPage}
            />
          )}
        </HeaderLogIconRight>
      </HeaderContainer>
    </>
  );
}
