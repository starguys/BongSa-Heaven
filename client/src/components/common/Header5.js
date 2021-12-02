import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle as LoginIcon } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const isSignIn = props.isLogin;
  const isUserLogin = props.isUser;
  console.log(isSignIn);
  const history = useHistory();
  const isLogin = false;
  const isRecruiter = false;

  const HeaderContainer = styled.div`
    width: 100%;
    height: 64px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 37.5rem) {
      display: none;
    }
    @media screen and (min-width: 37.5rem) {
      border-bottom: 1px solid #ffd4d4;
      justify-content: center;
    }
  `;

  const HeaderLogIconLeft = styled.div`
    @media screen and (max-width: 37.5rem) {
      margin-left: 15px;
      width: 24px;
      height: 24px;
    }
    @media screen and (min-width: 37.5rem) {
      display: none;
    }
  `;

  const HeaderLogIconRight = styled.div`
    @media screen and (max-width: 37.5rem) {
      margin-right: 15px;
      width: 24px;
      height: 24px;
    }
    @media screen and (min-width: 37.5rem) {
      display: none;
    }
  `;

  const LogoImg = styled.img`
    @media screen and (max-width: 37.5rem) {
      width: 34px;
      height: 23px;
    }
    @media screen and (min-width: 37.5rem) {
      display: none;
    }
  `;
  const WebHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 37.5rem) {
      display: none;
    }
    @media screen and (min-width: 37.5rem) {
      width: 1080px;
      height: 100%;
    }
  `;
  const WebHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
  `;
  const WebHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
  `;
  const WebLogoImg = styled.img`
    @media screen and (max-width: 37.5rem) {
      display: none;
    }
    @media screen and (min-width: 37.5rem) {
      width: 34px;
      height: 23px;
      margin-left: 2%;
      cursor: pointer;
    }
  `;
  const HeaderName = styled.span`
    margin-left: 2%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: #ff7676;
    cursor: pointer;
  `;
  const HeaderSignInOut = styled.button`
    margin-right: 3%;
    border: 0;
    background-color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 27px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #448b76;
    border: solid 2px white;
    &:hover {
      border-bottom: solid 2px #448b76;
      transition: 0.5s;
    }
  `;

  const HeaderSignUpMyPage = styled.button`
    margin-right: 3%;
    border: 0;
    background-color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 27px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #448b76;
    border: solid 2px white;
    &:hover {
      border-bottom: solid 2px #448b76;
      transition: 0.5s;
    }
  `;

  const GoMyPage = () => {
    console.log("hi");
    isRecruiter
      ? history.push("/RecruiterMyPage")
      : history.push("/UserMyPage");
  };
  const GoHome = () => {
    history.push("/");
  };
  const GoSignIn = () => {
    history.push("/SignIn");
  };
  const GoSignUp = () => {
    history.push("/SignUp");
  };
  const GoUserMyPage = () => {
    history.push("/UserMyPage");
  };
  const GoRecruiterMyPage = () => {
    history.push("/RecruiterMyPage");
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLogIconLeft>
          <FontAwesomeIcon icon={faBars} className="HeaderIcon" />
        </HeaderLogIconLeft>
        <LogoImg src="/image/logo2.png" />
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
        <WebHeaderContainer>
          <WebHeaderLeft>
            <WebLogoImg src="/image/logo2.png" onClick={GoHome} />
            <HeaderName onClick={GoHome}>봉사천국</HeaderName>
          </WebHeaderLeft>
          <WebHeaderRight>
            {isSignIn ? (
              <HeaderSignInOut>로그아웃</HeaderSignInOut>
            ) : (
              <HeaderSignInOut onClick={GoSignIn}>로그인</HeaderSignInOut>
            )}
            {isSignIn ? (
              isUserLogin ? (
                <HeaderSignUpMyPage onClick={GoUserMyPage}>
                  마이 페이지
                </HeaderSignUpMyPage>
              ) : (
                <HeaderSignUpMyPage onClick={GoRecruiterMyPage}>
                  마이 페이지
                </HeaderSignUpMyPage>
              )
            ) : (
              <HeaderSignUpMyPage onClick={GoSignUp}>
                회원가입
              </HeaderSignUpMyPage>
            )}
          </WebHeaderRight>
        </WebHeaderContainer>
      </HeaderContainer>
    </>
  );
}
