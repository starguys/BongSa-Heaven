import React from "react";
import styled from "styled-components";

export default function BestCrew() {
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

  return (
    <>
      <CrewBoardBestTitle>Best Top 10</CrewBoardBestTitle>
      <CrewBoardImageContainer>
        <CrewBoardImage src="/image-dummy/vol1.jpeg" />
        <CrewBoardImage src="/image-dummy/vol2.jpeg" />
      </CrewBoardImageContainer>
      <CrewBoardMoreBtn>더 많은 봉사단 보기</CrewBoardMoreBtn>
    </>
  );
}
