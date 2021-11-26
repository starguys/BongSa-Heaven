import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
const ContentsBoxTitle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 20px;
  border: none;
  border-bottom: solid gray 1px;
`
const ContentsBoxWriterBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px 0px 0px;
`
const ContentsBoxWriter = styled.input`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto 0px auto;
  border: none;
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
`

const ImgUploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px 0px 15px 0px;
`
const ImgUploadButton = styled.div`
  background-color : gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 20px;
`
const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 15px 0px 15px 0px;
`
const CancelButton = styled.div`
  background-color : white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  padding: 20px 0px 20px 0px;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
`
const CompleteButton = styled.div`
  background-color : gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  padding: 20px 0px 20px 0px;
  margin-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
`


export default function CrewBoardEdit() {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderText>
            글 수정하기
          </HeaderText>
          <IconBox>
           <FontAwesomeIcon icon={faTimes} />
          </IconBox>
        </Header>
        <ContentsBox>
          <ContentsBoxTitleBox>
            <ContentsBoxTitle placeholder="수정할 제목">
            </ContentsBoxTitle>
          </ContentsBoxTitleBox>
          <ContentsBoxWriterBox>
            <ContentsBoxWriter placeholder="작성자 닉네임"></ContentsBoxWriter>
          </ContentsBoxWriterBox>
          <ContentsBoxContents placeholder="수정할 글 내용">
          </ContentsBoxContents>
          <ContentsBoxImgBox>
            수정할 이미지 자리
            <Img src="https://dimg.donga.com/wps/NEWS/IMAGE/2019/10/10/97803507.1.jpg"/>
          </ContentsBoxImgBox>
        </ContentsBox>
        <ImgUploadBox>
          <ImgUploadButton>이미지 업로드</ImgUploadButton>
        </ImgUploadBox>
        <SelectBox>
          <CancelButton>
            취소
          </CancelButton>
          <CompleteButton>
            수정 완료
          </CompleteButton>
        </SelectBox>
      </Wrapper>
    </>
  );
}
