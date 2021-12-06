import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";


  const MainCrewBoardContainer = styled.div`
    @media screen and (max-width: 37.5rem) {
    }
    @media screen and (min-width: 37.5rem) {
      width: 1080px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
    }
  `;

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
  const CrewBoardImageMore = styled.img`
    @media screen and (min-width: 37.5rem) {
      width: 165px;
      height: 138px;
      border-radius: 10px;
      margin: 0px 5px;
    }
    @media screen and (max-width: 37.5rem) {
      display: none;
    }
  `;

  const CrewBoardMoreBtnContainer = styled.div`
    @media screen and (min-width: 37.5rem) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
    cursor: pointer;
    @media screen and (min-width: 37.5rem) {
      width: 100%;
      border: 0;
    }
  `;
  export default function BestCrew() {
    const history = useHistory();

  const GoCrewBoardList = () => {
    history.push("/CrewBoardList");
  };
  return (
    <>
      <MainCrewBoardContainer>
        <CrewBoardBestTitle>Best Top 10</CrewBoardBestTitle>
        <CrewBoardImageContainer>
          <CrewBoardImage src="/image-dummy/vol1.jpeg" />
          <CrewBoardImage src="/image-dummy/vol2.jpeg" />
          <CrewBoardImageMore src="/image-dummy/vol2.jpeg" />
          <CrewBoardImageMore src="/image-dummy/vol2.jpeg" />
          <CrewBoardImageMore src="/image-dummy/vol2.jpeg" />
          <CrewBoardImageMore src="/image-dummy/vol2.jpeg" />
        </CrewBoardImageContainer>
        <CrewBoardMoreBtnContainer>
          <CrewBoardMoreBtn onClick={GoCrewBoardList}>
            더 많은 봉사단 보기
          </CrewBoardMoreBtn>
        </CrewBoardMoreBtnContainer>
      </MainCrewBoardContainer>
    </>
  );
}
