import React from "react";
import styled from 'styled-components' 
import Header2 from "../../components/common/Header2";
import CreateButton from "../../components/FreeBoard/CreateButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display:flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

const CreateBox = styled.div`
  background-color: white;
  width: 80%;
  display:flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 0px 20px 0px;
  margin: 10px 0px 10px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const CreateBoxTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const CreateBoxTitle = styled.input`
  display: flex;
  justify-content: flex;
  align-items: center;
  width: 80%;
  border: 0px;
  border-bottom: solid gray 1px;
  opacity: 0.5;

`

const CreateBoxContentsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
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
`



const ImgUploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px 0px 15px 0px;
`
const ImgUploadButton = styled.div`
  background-color : #FF7676;
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
  border: 1px solid #000000;
`
const CompleteButton = styled.div`
  background-color : #FF7676;
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


export default function FreeBoardCreate() {
  return (
    <>
      <Wrapper>
        <Header2 componentName="글 작성하기"/>
        <CreateBox>
          <CreateBoxTitleBox>
            <CreateBoxTitle placeholder="제목">
            </CreateBoxTitle>
          </CreateBoxTitleBox>
        </CreateBox>
    
        <CreateBox>
          <CreateBoxContentsBox>
            <CreateBoxContents placeholder="내용을 입력하세요.">

            </CreateBoxContents>
          </CreateBoxContentsBox>
        </CreateBox>
        <CreateButton/>
      </Wrapper>
    </>
  );
}
