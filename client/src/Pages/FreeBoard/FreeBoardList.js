import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

  width: 100%;
  padding: 40px 0px 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default function FreeBoardList() {
  const [isLoading, CheckLoading] = useState(true);

  const loadingHandler = () => {
    CheckLoading(false);
  };

  useEffect(() => {
    setTimeout(() => loadingHandler(), 1000);
  });

  return (
    <>
      <Header>
        <FontAwesomeIcon icon={faBars} className="HeaderIcon" />
        <HeaderText>
          <LogoBox>
            <Logo src="./image/logo2.png"></Logo>
          </LogoBox>
        </HeaderText>
        <IconBox>
          <MypageIcon src="./image/Mypage.png"></MypageIcon>
        </IconBox>
      </Header>
      <Headerspace></Headerspace>


      <>
        <Header2 componentName="자유 게시판"/>
        <Headerspace>
        </Headerspace>

        {isLoading ? 
        <>
        <Loading/>
        </>
      ) : (
        <>

        <Contents/>
        <Contents/>
        <Contents/>
        <Contents/>
        <Contents/>
        <Contents/>
        <Contents/>
        </>
        }

        <Pagination/>
      </>
  );
}
