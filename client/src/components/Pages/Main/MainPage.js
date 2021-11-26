import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function MainPage() {
  const CrewBoardTitle = styled.div`
    position: absolute;
    width: 133px;
    height: 24px;
    left: 18px;
    top: 117px;

    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;
    letter-spacing: -0.495238px;

    color: #000000;
  `;

  const CrewBoardRecommend = styled.div`
    width: 100%;
    height: 30%;
  `;

  const CrewBoardRecommendTop = styled.div`
    width: 100%;
    height: 20%;
  `;

  const CrewBoardRecommendTopText = styled.div`
    background-color: blue;
    color: white;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
  `;

  const CrewBoardRecommendMiddle = styled.div`
    background-color: white;
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const CrewBoardRecommendMiddleImgBox = styled.div`
    background-image: url(${(props) => props.url});
    width: 40%;
    height: 80%;
    display: flex;
    justify-content: start;
    align-items: flex-end;
  `;

  const CrewBoardRecommendMiddleImgBoxText = styled.div`
    background: rgb(0, 0, 255, 0.4);
    color: white;
    width: 70%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  `;

  const CrewBoardRecommendMiddleImg = styled.img`
    width: 100%;
    height: 100%;
    z-index: 0;
  `;

  const CrewBoardRecommendBottom = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
  `;

  const CrewBoardRecommendBottomText = styled.div`
    background-color: blue;
    color: white;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
  `;

  const MainSpaceMiddle = styled.div`
    background-color: rgb(0, 0, 0, 0.7);
    width: 100%;
    height: 15%;
  `;
  const FreeBoardContainer = styled.div`
    width: 100%;
    height: 30%;
  `;

  const FreeBoardHeader = styled.div`
    background-color: orange;
    width: 40%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    margin-bottom: 5%;
  `;

  const FreeBoardList = styled.div`
    border-bottom: solid 1.5px rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 23%;
  `;

  const FreeBoardListTitle = styled.div`
    padding-left: 10%;
    width: 100%;
    height: 50%;
  `;

  const FreeBoardListText = styled.div`
    padding-left: 10%;

    width: 100%;
    height: 50%;
    display: flex;
  `;

  const FreeBoardListTextUser = styled.div`
    font-size: 13px;
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    opacity: 0.4;
  `;

  const FreeBoardListTextDate = styled.div`
    font-size: 13px;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    opacity: 0.4;
  `;
  return (
    <>
      <Header />
      {/* CrewBoard */}
      {/* <CrewBoardTitle>Best Top 10</CrewBoardTitle> */}
      <CrewBoardRecommend>
        <CrewBoardRecommendTop>
          <CrewBoardRecommendTopText>
            Best 봉사단 TOP 10
          </CrewBoardRecommendTopText>
        </CrewBoardRecommendTop>
        <CrewBoardRecommendMiddle>
          <FontAwesomeIcon icon={faCaretLeft} />
          <CrewBoardRecommendMiddleImgBox url="/image-dummy/vol1.jpeg">
            <CrewBoardRecommendMiddleImgBoxText>
              한사랑봉사단
            </CrewBoardRecommendMiddleImgBoxText>
          </CrewBoardRecommendMiddleImgBox>
          <CrewBoardRecommendMiddleImgBox url="/image-dummy/vol2.jpeg">
            <CrewBoardRecommendMiddleImgBoxText>
              다함꼐봉사단
            </CrewBoardRecommendMiddleImgBoxText>
          </CrewBoardRecommendMiddleImgBox>
          <FontAwesomeIcon icon={faCaretRight} />
        </CrewBoardRecommendMiddle>
        <CrewBoardRecommendBottom>
          <CrewBoardRecommendBottomText>
            더 많은 봉사단 보기
          </CrewBoardRecommendBottomText>
        </CrewBoardRecommendBottom>
      </CrewBoardRecommend>
      <MainSpaceMiddle></MainSpaceMiddle>
      {/* FreeBoard */}
      <FreeBoardContainer>
        <FreeBoardHeader>자유게시판</FreeBoardHeader>
        <FreeBoardList>
          <FreeBoardListTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
          </FreeBoardListTitle>
          <FreeBoardListText>
            <FreeBoardListTextUser>작성자A</FreeBoardListTextUser>
            <FreeBoardListTextDate>2021.11.23</FreeBoardListTextDate>
          </FreeBoardListText>
        </FreeBoardList>
        <FreeBoardList>
          <FreeBoardListTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
          </FreeBoardListTitle>
          <FreeBoardListText>
            <FreeBoardListTextUser>작성자A</FreeBoardListTextUser>
            <FreeBoardListTextDate>2021.11.23</FreeBoardListTextDate>
          </FreeBoardListText>
        </FreeBoardList>
        <FreeBoardList>
          <FreeBoardListTitle>
            안녕하세요 여기가 그 자유로운 게시판인가요?
          </FreeBoardListTitle>
          <FreeBoardListText>
            <FreeBoardListTextUser>작성자A</FreeBoardListTextUser>
            <FreeBoardListTextDate>2021.11.23</FreeBoardListTextDate>
          </FreeBoardListText>
        </FreeBoardList>
      </FreeBoardContainer>
    </>
  );
}
