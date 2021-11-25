import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"; 

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  display:flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`
const Header = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  width: 100%;
  min-height: 12%;
	box-sizing: border-box;
`
const IconBox = styled.div`
  padding-right: 30px;
`

const ContentsBox = styled.div`
  background-color: white;
  width: 80%;
  min-height: 70%;
  display:flex;
  flex-direction: column;
  border-radius: 20px;
`
const ContentsBoxTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9%;
`
const ContentsBoxTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  font-size: 20px;
  border-bottom: solid gray 1px;
`
const ContentsBoxWriterBox = styled.div`
  display: flex;
  align-items: center;
  height: 15%
`
const ContentsBoxAdjust = styled.div`
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 60%;
  left: 36%;
  position: relative;
  border-radius: 20px;
`
const ContentsBoxContents = styled.div`
  width: 90%;  
  height: 35%;
  padding: 13px;
`
const ContentsBoxImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28%
`
const Img = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`

const ContentsBoxDeleteBox = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
const ContentsBoxDeleteButton = styled.div`
  opacity: 0.5;
  padding-right: 20px;
`

const ListBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  min-height: 8%;
  display:flex;
  padding: 10px;
`
const ListButton = styled.div`
  background-color : gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 70%;
  border-radius: 20px;
`
const CommentList = styled.div`
  border: black 3px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border-radius: 20px;
  background-color: white;
  padding: 10px;
`
const CommentBox = styled.div`
  border: green 3px solid;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 50%;
  border-bottom: dashed gray 1px;
`
const CommentWriter = styled.span`
  border: blue 3px solid;
  font-size: 18px;
`

const CommentDate = styled.span`
  border: blue 3px solid;
  margin-left: 30px;
  font-size: 18px;
`

const CommentContents = styled.div`
  display:flex;
  align-items: center;
  margin-top: 8px;
`



export default function CrewBoardContents() {
  return (
    <>
      <Wrapper>
        <Header>
          <IconBox>
           <FontAwesomeIcon icon={faTimes} />
          </IconBox>
        </Header>
        <ContentsBox>
          <ContentsBoxTitleBox>
            <ContentsBoxTitle>
              힘쎈봉사단
            </ContentsBoxTitle>
          </ContentsBoxTitleBox>
          <ContentsBoxWriterBox>
            &nbsp;&nbsp;&nbsp;&nbsp;작성자A&nbsp;&nbsp;
            <FontAwesomeIcon icon={faPaperPlane} />
            <ContentsBoxAdjust>
              수정하기
            </ContentsBoxAdjust>
          </ContentsBoxWriterBox>
          <ContentsBoxContents>
            <br/>
            안녕하세요.
            <br/><br/>
            30~40대 남녀로 구성된 봉사단으로써, 연탄나르기, 농어촌 일손 돕기 등의 봉사를 수행하고 있습니다.
            <br/><br/>
            모든 힘이 필요한 곳에 도움을 드리고 싶습니다. 연락 부탁드려요!
          </ContentsBoxContents>
          <ContentsBoxImgBox>
            <Img src="https://dimg.donga.com/wps/NEWS/IMAGE/2019/10/10/97803507.1.jpg"/>
          </ContentsBoxImgBox>
          <ContentsBoxDeleteBox>
            <ContentsBoxDeleteButton>삭제</ContentsBoxDeleteButton>
          </ContentsBoxDeleteBox>
        </ContentsBox>
        <ListBox>
          <ListButton>목록</ListButton>
        </ListBox>
        <CommentList>
          <CommentBox>
            <CommentWriter>
              작성자A
              <CommentDate>2021.11.21</CommentDate>
            </CommentWriter>
            <CommentContents>
              정말 좋은 봉사단인것 같아요!
            </CommentContents>
          </CommentBox>
          <CommentBox>
            <CommentWriter>
              작성자A
              <CommentDate>2021.11.21</CommentDate>
            </CommentWriter>
            <CommentContents>
              정말 좋은 봉사단인것 같아요!
            </CommentContents>
          </CommentBox>
          <CommentBox>
            <CommentWriter>
              작성자A
              <CommentDate>2021.11.21</CommentDate>
            </CommentWriter>
            <CommentContents>
              정말 좋은 봉사단인것 같아요!
            </CommentContents>
          </CommentBox>
          <CommentBox>
            <CommentWriter>
              작성자A
              <CommentDate>2021.11.21</CommentDate>
            </CommentWriter>
            <CommentContents>
              정말 좋은 봉사단인것 같아요!
            </CommentContents>
          </CommentBox>
        </CommentList>
      </Wrapper>
    </>
  );
}
