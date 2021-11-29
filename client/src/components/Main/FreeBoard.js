import React from "react";
import styled from "styled-components";
import FreeBoardList from "./FreeBoardList";

export default function FreeBoard() {
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

  return (
    <>
      <FreeBoardTitle>자유게시판</FreeBoardTitle>
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
    </>
  );
}
