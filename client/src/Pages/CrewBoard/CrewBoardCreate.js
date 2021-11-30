import React from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import Input from "../../components/common/Input";
import CreateButton from "../../components/common/CreateButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

const CreateBox = styled.div`
  background-color: white;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 0px 20px 0px;
  margin: 10px 0px 10px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CreateBoxContentsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CreateBoxContents = styled.textarea`
  display: flex;
  justify-content: flex;
  align-items: center;
  width: 80%;
  height: 400px;
  font-size: 12px;
  border: 0px;
  opacity: 0.5;

  ::placeholder {
    font-size: 12px;
  }
`;


export default function CrewBoardCreate() {
  return (
    <>
      <Wrapper>
        <Header2 componentName="글 작성하기"/>
          <Input text="봉사단 이름"/>
          <Input text="봉사단 한줄 소개글"/>
          <CreateBox>
            <CreateBoxContentsBox>
              <CreateBoxContents placeholder="내용을 입력해주세요.">        
              </CreateBoxContents>
            </CreateBoxContentsBox>
          </CreateBox>
        <CreateButton create="/CrewBoardList" cancel="/CrewBoardList"/>
      </Wrapper>
    </>
  );
}
