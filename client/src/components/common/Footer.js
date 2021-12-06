import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


  const LogInOut = styled.div`
    background: #ffd5d5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    color: white;
    height: 64px;
    width: 100%;
    @media screen and (min-width: 37.5rem) {
      display: none;
    }
  `;
  const FooterImg = styled.img`
    width: 34px;
    height: 23px;
  `;
  const FooterTeam = styled.div`
    width: 100%;
    height: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    margin-left: 17px;
    color: #171717;
    @media screen and (min-width: 37.5rem) {
      margin-left: 40%;
    }
  `;

  const FooterTeamName = styled.span`
    margin-left: 8px;
  `;

  const FooterGrid1Span = styled.span`
    margin-bottom: 9px;
    margin-left: 34px;
    @media screen and (min-width: 37.5rem) {
      margin-left: 40%;
    }
  `;
  const FooterGrid3Span = styled.span`
    margin-bottom: 9px;
    margin-left: 24px;
    @media screen and (min-width: 37.5rem) {
      font-size: 24px;
    }
  `;

  const FooterPosition = styled.div``;

  export default function Footer() {

    const history = useHistory();

    const [isLogin, setIsLogin] = useState(false);
    
  const GoSignIn = () => {
    history.push("/SignIn");
  };

  const GoHome = () => {
    history.push("/");
  };

  const LogOut = () => {

    axios
    .post(
      "http://localhost:8080/auth/signout",
      {},
      {
        headers: {
          "authorization" : `Bearer ` + localStorage.getItem('accessToken'),
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      localStorage.removeItem("accessToken");
      setIsLogin(false)
      GoHome()
    })
    .catch((err) => console.log(err))

  }

  useEffect(() => {
    console.log(localStorage.getItem('accessToken'))
    if(localStorage.getItem('accessToken')) {
    
      setIsLogin(true)
    }
  })


  return (
    <>
      <FooterPosition>
        {isLogin ? (
          <LogInOut className="footer_signInOut" onClick={() => {GoHome(); LogOut()}}>
            로그아웃
          </LogInOut>
        ) : (
          <LogInOut className="footer_signInOut" onClick={GoSignIn}>
            로그인
          </LogInOut>
        )}

        <div id="footer_div">
          <div id="footer_leftbox">
            <div className="footer_gitid1 footer_font">
              <FooterTeam>
                <FooterImg src="/image/logo2.png" />
                <FooterTeamName>봉사천국</FooterTeamName>
              </FooterTeam>
              <FooterGrid1Span>
                <FontAwesomeIcon icon={faGithub} /> - changmoolee
              </FooterGrid1Span>
            </div>
            <div className="footer_gitid2 footer_font">
              <FontAwesomeIcon icon={faGithub} /> - dpemdnjem23
            </div>
          </div>
          <div id="footer_rightbox">
            <div className="footer_gitid3 footer_font">
              <FooterGrid3Span>
                <FontAwesomeIcon icon={faGithub} /> - kimvayne
              </FooterGrid3Span>
            </div>
            <div className="footer_gitid4 footer_font">
              <FontAwesomeIcon icon={faGithub} /> - starguys
            </div>
          </div>
        </div>
      </FooterPosition>
    </>
  );
}
