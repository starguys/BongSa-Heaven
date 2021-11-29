import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";


const Header = styled.div`
  display:flex;
  background-color: #FFD4D4;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0px 20px 0px;
`
const HeaderText = styled.div`
  width: 70%;
  display:flex;
  justify-content: center;
  align-items: center;
`
const LogoBox = styled.div`
  width: 15%;
  display:flex;
  justify-content: center;
  align-items: center;

`
const Logo = styled.img`
  width: 100%;
  object-fit: cover;
`

const IconBox = styled.div`
  width: 10%;
  display:flex;
  justify-content: center;
  align-items: center;

`
const MypageIcon = styled.img`
  width: 80%;
  object-fit: cover;
`


  const Headerspace = styled.div`
  background-color: #FFB1B1;
  width: 100%;
  padding: 40px 0px 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

  const ContentsList = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LoadingAniBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
`
const circleAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

const Circle = styled.div`
    position: fixed; 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%); 
    width: 40px; 
    height: 40px; 
    border:10px solid #fff; 
    border-top: 10px 
    solid #FF7676; 
    border-radius: 30px; 
    transition: all .2s;
    animation-name: ${circleAnimation};
    animation-duration: .8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`
const Dim = styled.div`
  position:fixed;
  left: 0; 
  top: 0;
  width: 100%; 
  height: 100%;
  background:rgba(0,0,0,0.3);
`

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: dashed gray 1px;
  padding: 20px 0px;
`
const ContentsWriter = styled.span`
  margin-left: 25px;
  opacity: 0.5;
`

const ContentsDate = styled.span`
  margin-left: 30px;
  font-size: 12px;
`

const ContentsTitle = styled.div`
  display:flex;
  font-size: 14px;
  align-items: center;
  margin: 0px 0px 10px 20px;
`

  const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  a {
    color: black;
    padding: 1rem;
  }
`

export default function FreeBoardList() {

  const [isLoading, CheckLoading] = useState(true)

  const loadingHandler = () => {
    CheckLoading(false)
  };

  useEffect(() => {
    setTimeout(() => loadingHandler(), 1000)})

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
        <Headerspace>
        </Headerspace>

        {isLoading ? 
        <>
        <LoadingAniBox>
          <Dim/>
          <Circle/>
        </LoadingAniBox>
        </>
        :
        <>
        <ContentsList>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox><ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox><ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox><ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          <ContentsBox>
            <ContentsTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
            </ContentsTitle>
            <ContentsWriter>
              작성자A
              <ContentsDate>2021.11.21</ContentsDate>
            </ContentsWriter>
          </ContentsBox>
          </ContentsList>
          </>
          }

        <Pagination>
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">&raquo;</a>
        </Pagination>
      </>
  );
}