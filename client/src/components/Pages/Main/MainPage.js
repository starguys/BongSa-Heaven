import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function MainPage() {
  const CrewBoardBestTitle = styled.div`
    width: 133px;
    height: 24px;
    margin-top: 64px;
    margin-left: 18px;
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

  const CrewBoardImageContainer = styled.div`
    margin-top: 21px;
    width: 100%;
    height: 138px;
    display: flex;
    justify-content: center;
  `;

  const CrewBoardImage = styled.img`
    width: 165px;
    height: 138px;
    border-radius: 10px;
    margin: 0px 5px;
  `;

  const CrewBoardMoreBtn = styled.button`
    width: 340px;
    height: 55px;
    background: #f7f7f7;
    border-radius: 4px;
    margin: 31px 0px 0px 17px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
  `;

  const FreeBoardTitle = styled.div`
    margin-top: 47px;
    margin-left: 18px;
    width: 100%;
    height: 24px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;
    letter-spacing: -0.495238px;
  `;

  const FreeBoardList = styled.div`
    border-bottom: solid 1px #f2f2f2;
    margin-top: 26px;
    margin-left: 17px;
    width: 332px;
    height: 50.5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `;

  const FreeBoardListTitle = styled.div`
    margin-bottom: 9px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  `;
  const FreeBoardListTitleBottom = styled.div`
    margin-bottom: 13.5px;
    display: flex;
  `;
  const FreeBoardListTitleBottomUser = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
  `;
  const FreeBoardListTitleBottomDate = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
  `;

  return (
    <>
      <Header />
      <CrewBoardBestTitle>Best Top 10</CrewBoardBestTitle>
      <CrewBoardImageContainer>
        <CrewBoardImage src="/image-dummy/vol1.jpeg" />
        <CrewBoardImage src="/image-dummy/vol2.jpeg" />
      </CrewBoardImageContainer>
      <CrewBoardMoreBtn>더 많은 봉사단 보기</CrewBoardMoreBtn>
      <FreeBoardTitle>자유게시판</FreeBoardTitle>
      <FreeBoardList>
        <FreeBoardListTitle>
          안녕하세요 여기가 그 자유로운 게시판인가요?
        </FreeBoardListTitle>
        <FreeBoardListTitleBottom>
          <FreeBoardListTitleBottomUser>김봉사</FreeBoardListTitleBottomUser>
          <FreeBoardListTitleBottomDate>
            2021.11.23
          </FreeBoardListTitleBottomDate>
        </FreeBoardListTitleBottom>
      </FreeBoardList>
      <FreeBoardList>
        <FreeBoardListTitle>
          안녕하세요 여기가 그 자유로운 게시판인가요?
        </FreeBoardListTitle>
        <FreeBoardListTitleBottom>
          <FreeBoardListTitleBottomUser>김봉사</FreeBoardListTitleBottomUser>
          <FreeBoardListTitleBottomDate>
            2021.11.23
          </FreeBoardListTitleBottomDate>
        </FreeBoardListTitleBottom>
      </FreeBoardList>{" "}
      <FreeBoardList>
        <FreeBoardListTitle>
          안녕하세요 여기가 그 자유로운 게시판인가요?
        </FreeBoardListTitle>
        <FreeBoardListTitleBottom>
          <FreeBoardListTitleBottomUser>김봉사</FreeBoardListTitleBottomUser>
          <FreeBoardListTitleBottomDate>
            2021.11.23
          </FreeBoardListTitleBottomDate>
        </FreeBoardListTitleBottom>
      </FreeBoardList>{" "}
      <FreeBoardList>
        <FreeBoardListTitle>
          안녕하세요 여기가 그 자유로운 게시판인가요?
        </FreeBoardListTitle>
        <FreeBoardListTitleBottom>
          <FreeBoardListTitleBottomUser>김봉사</FreeBoardListTitleBottomUser>
          <FreeBoardListTitleBottomDate>
            2021.11.23
          </FreeBoardListTitleBottomDate>
        </FreeBoardListTitleBottom>
      </FreeBoardList>
    </>
  );
}
