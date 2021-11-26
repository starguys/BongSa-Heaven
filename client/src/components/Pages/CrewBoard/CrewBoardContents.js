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
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0px 20px 0px;
`
const HeaderText = styled.div`
  width: 80%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`
const IconBox = styled.div`
  right: 5vw;
`

const ContentsBox = styled.div`
  background-color: white;
  width: 80%;
  display:flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 0px 20px 0px;
`
const ContentsBoxTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentsBoxTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 20px;
  border-bottom: solid gray 1px;
`
const ContentsBoxWriterBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px 0px 0px;
`
const ContentsBoxWriter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  margin: 0px 5px 0px 18px;
`

const ContentsBoxAdjustBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
`

const ContentsBoxAdjust = styled.div`
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
`
const ContentsBoxContents = styled.div`
  width: 80%;  
  margin: 15px auto 40px auto;
`
const ContentsBoxImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0 30px 0;
`
const Img = styled.img`
  width: 80%;
  object-fit: cover;
  opacity: 0.5;
`

const ContentsBoxDeleteBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
const ContentsBoxDeleteButton = styled.div`
  opacity: 0.5;
  padding-right: 25px;
`

const ListBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
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
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
`
const CommentList = styled.div`
  flex-direction: column;
  align-items: center;
  width: 80%;
  border-radius: 20px;
  background-color: white;
  padding: 10px 0px 15px 0px;
`
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: dashed gray 1px;
  padding: 20px 0px;
`
const CommentWriter = styled.span`
  margin-left: 25px;
  font-size: 18px;
`

const CommentDate = styled.span`
  margin-left: 30px;
  font-size: 15px;
  opacity: 0.5;
`

const CommentContents = styled.div`
  display:flex;
  align-items: center;
  margin: 10px 0px 0px 25px;
`

const CommentInputBox = styled.div`
  margin-top: 8px;
  width: 80%;
  display: flex;
  margin: 30px 0px 60px 0px;
`
const CommentInput = styled.div`
  width: 70%;
  height: 90%;
  margin: 30px 0px 30px 0px;
`
const CommentInputContents = styled.input`
  width: 100%;
  height: 90%;
  display: flex;
`

const CommentInputButton = styled.div`
  background-color : gray;
  width: 22%;
  height: 90%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin: 30px 0px 30px 20px;
`


export default function CrewBoardContents() {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderText>
          </HeaderText>
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
            <ContentsBoxWriter>작성자A</ContentsBoxWriter>
            <FontAwesomeIcon icon={faPaperPlane} />
            <ContentsBoxAdjustBox>
              <ContentsBoxAdjust>
                수정하기
              </ContentsBoxAdjust>
            </ContentsBoxAdjustBox>
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
        <CommentInputBox>
          <CommentInput> 
            <CommentInputContents placeholder="내용을 입력하세요.">
            </CommentInputContents>
          </CommentInput>
          <CommentInputButton>댓 글<br /><br />달 기</CommentInputButton>
        </CommentInputBox>
      </Wrapper>
    </>
  );
}
