import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import FreeBoardList from "./FreeBoardList";

export default function FreeBoard() {
  const history = useHistory();
  const MainFreeBoardContianer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 37.5rem) {
      width: 1080px;
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const FreeBoardTitleContainer = styled.div`
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

  const FreeBoardTittle = styled.span`
    cursor: pointer;
  `;

  const GoFreeBoradList = () => {
    history.push("/FreeBoardList");
  };

  return (
    <>
      <MainFreeBoardContianer>
        <FreeBoardTitleContainer>
          <FreeBoardTittle onClick={GoFreeBoradList}>
            자유게시판
          </FreeBoardTittle>
        </FreeBoardTitleContainer>
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
        <FreeBoardList />
      </MainFreeBoardContianer>
    </>
  );
}
