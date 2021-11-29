import React from "react";
import styled, { keyframes } from "styled-components";


const ContentsList = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

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
export default function Contents() {

  return (
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
      </ContentsList>
    </>
  );
}