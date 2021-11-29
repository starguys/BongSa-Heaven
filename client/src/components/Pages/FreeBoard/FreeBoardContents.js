import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"; 

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
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
  font-weight: bold;
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
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const ContentsBoxTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentsBoxTitle = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  border-bottom: solid gray 1px;
  font-size: 12px;
`
const ContentsBoxWriterBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px 0px 0px;
`
const ContentsBoxWriter = styled.div`
  color: #448B76;
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
  background-color: #FF7676;
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
  font-size: 12px;
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
  border-radius: 10px;
`

const ContentsBoxDeleteBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
const ContentsBoxDeleteButton = styled.div`
  color: #D80000;
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
  background-color : #FF7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 10px 0 10px 0;
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
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
`

const CommentDate = styled.span`
  margin-left: 30px;
  font-size: 14px;
  opacity: 0.5;
`

const CommentContents = styled.div`
  display:flex;
  align-items: center;
  margin: 10px 0px 0px 25px;
  font-size: 12px;
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
  background-color : #FF7676;
  color: #FFFFFF;
  line-height: 23px;
  width: 22%;
  height: 90%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px 30px 20px;
`


export default function FreeBoardContents() {
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
              안녕하세요 여기가 그 자유로운 게시판인가요?
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
            안녕하세요 여기가 그 자유로운 게시판인가요?
            <br/><br/>
            생각보다 깔끔한 UI에 무릎을 탁! 치게 됩니다. 
            <br/><br/>
            반가워요 여러분
          </ContentsBoxContents>
          <ContentsBoxImgBox>
          <Img src="https://cdn.notefolio.net/img/6f/97/6f9787b975c70fbda92d195bba79cd3490c57a4beebe2da510a1579fc542fa48_v1.jpg"/>
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
             저도 공감합니다!
            </CommentContents>
          </CommentBox>
          <CommentBox>
            <CommentWriter>
              작성자C
              <CommentDate>2021.11.25</CommentDate>
            </CommentWriter>
            <CommentContents>
              모두 좋은 활동 해보아요~
            </CommentContents>
          </CommentBox>
        </CommentList>
        <CommentInputBox>
          <CommentInput> 
            <CommentInputContents placeholder="내용을 입력하세요.">
            </CommentInputContents>
          </CommentInput>
          <CommentInputButton>댓 글<br />달 기</CommentInputButton>
        </CommentInputBox>
      </Wrapper>
    </>
  );
}
