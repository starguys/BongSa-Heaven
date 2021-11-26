import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";



  const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`


  const HeaderContainer = styled.div`
  background-color: rgb(0, 0, 0, 0.4);
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  font-size: 24px;
`;


  const Headerspace = styled.div`
  background-color: gray;
  width: 100%;
  height: 12%;
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


const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: dashed gray 1px;
  padding: 20px 0px;
`
const ContentsWriter = styled.span`
  margin-left: 25px;
  font-size: 15px;
  opacity: 0.5;
`

const ContentsDate = styled.span`
  margin-left: 30px;
  font-size: 12px;
`

const ContentsTitle = styled.div`
  display:flex;
  font-size: 15px;
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
    {isLoading ? <Loading>Loading...</Loading> :
      <>
        <HeaderContainer>
          <FontAwesomeIcon icon={faBars} className="HeaderIcon" />
            자유게시판
          <FontAwesomeIcon icon={faUserCircle} className="HeaderIcon" />
        </HeaderContainer>
        <Headerspace>
        </Headerspace>
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
      }
    </>
  );
}