import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Header2 from "../../components/common/Header2";
import EditButton from "../../components/CrewBoard/EditButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display:flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
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
const ContentsBoxTitle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 14px;
  border: none;
  border-bottom: solid gray 1px;
`
const ContentsBoxWriterBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px 0px 0px;
`
const ContentsBoxWriter = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto 0px auto;
  border: none;
  color: #448B76;
`

const ContentsBoxContents = styled.textarea`
  width: 80%;
  height: 10vh;
  margin: 15px auto 40px auto;
  border: none;
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



export default function FreeBoardEdit() {
  return (
    <>
      <Wrapper>
        <Header2 componentName="글 수정하기"/>  
        <ContentsBox>
          <ContentsBoxTitleBox>
            <ContentsBoxTitle placeholder="수정할 글 제목.">
            </ContentsBoxTitle>
          </ContentsBoxTitleBox>
          <ContentsBoxWriterBox>
            <ContentsBoxWriter>글 작성자</ContentsBoxWriter>
          </ContentsBoxWriterBox>
          <ContentsBoxContents placeholder="수정할 글 내용들.">
          </ContentsBoxContents>
          <ContentsBoxImgBox>
            수정할 이미지 자리
            <Img src="https://cdn.notefolio.net/img/6f/97/6f9787b975c70fbda92d195bba79cd3490c57a4beebe2da510a1579fc542fa48_v1.jpg"/>
          </ContentsBoxImgBox>
        </ContentsBox>
        <EditButton/>
      </Wrapper>
    </>
  );
}
