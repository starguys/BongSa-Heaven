import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import DesktopTitle from "../../components/common/DesktopTitle";
import EditButton from "../../components/common/EditButton";
import EditButton2 from "../../components/common/EditButton2";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

const ContentsBox = styled.div`
  background-color: white;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 0px 20px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 30px;

  @media screen and (min-width: 37.5rem) {
    width: 1080px;
  }
`;
const ContentsBoxTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentsBoxTitle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  border: none;
  border-bottom: solid gray 1px;

  @media screen and (min-width: 37.5rem) {
    font-size: 20px
  }
`;
const ContentsBoxWriterBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px 0px 0px;
`;
const ContentsBoxWriter = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto 0px auto;
  border: none;
  color: #448b76;

  @media screen and (min-width: 37.5rem) {
    font-size: 20px
  }
`;

const ContentsBoxContents = styled.textarea`
  width: 80%;
  height: 10vh;
  margin: 15px auto 40px auto;
  border: none;
  font-size: 12px;

  @media screen and (min-width: 37.5rem) {
    font-size: 16px;

    ::placeholder {
      font-size: 16px;
    }
  }
`;

const ContentsBoxImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0 30px 0;
`;
const Img = styled.img`
  width: 80%;
  object-fit: cover;
  opacity: 0.5;
  border-radius: 10px;
`;

export default function CrewBoardEdit() {

  const [fileImage, setFileImage] = useState("");

  return (
    <>
      <Wrapper>
        <Header2 componentName="글 수정하기"/>
        <DesktopTitle title="글 수정하기"/>
        <EditButton2 
            create="/CrewBoardList" 
            cancel="/CrewBoardList"
            setFileImage={setFileImage}
        />
        <ContentsBox>
          <ContentsBoxTitleBox>
            <ContentsBoxTitle placeholder="수정할 제목"></ContentsBoxTitle>
          </ContentsBoxTitleBox>
          <ContentsBoxWriterBox>
            <ContentsBoxWriter>닉네임자리</ContentsBoxWriter>
          </ContentsBoxWriterBox>
          <ContentsBoxContents placeholder="수정할 글 내용">
          </ContentsBoxContents>
          <ContentsBoxImgBox>
            <Img src={fileImage} alt="수정할 이미지 자리"/>
          </ContentsBoxImgBox>
        </ContentsBox>
        <EditButton 
          edit="/CrewBoardContents" 
          cancel="/CrewBoardContents"
          setFileImage={setFileImage}
        />
      </Wrapper>
    </>
  );
}
