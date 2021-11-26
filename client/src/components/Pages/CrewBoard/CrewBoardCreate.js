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

const CreateBox = styled.div`
  background-color: white;
  width: 80%;
  display:flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 0px 20px 0px;
  margin: 10px 0px 10px 0px;
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
  font-size: 20px;
  border: 0px;
  border-bottom: solid gray 1px;
  opacity: 0.5;

`
const CreateBoxintroBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const CreateBoxintro = styled.input`
  display: flex;
  justify-content: flex;
  align-items: center;
  width: 80%;
  font-size: 18px;
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
  font-size: 18px;
  border: 0px;
  opacity: 0.5;

  ::placeholder {
    font-size: 18px;
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


export default function CrewBoardCreate() {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderText>
            글 작성하기
          </HeaderText>
          <IconBox>
           <FontAwesomeIcon icon={faTimes} />
          </IconBox>
        </Header>
        <CreateBox>
          <CreateBoxTitleBox>
            <CreateBoxTitle placeholder="제목">
            </CreateBoxTitle>
          </CreateBoxTitleBox>
        </CreateBox>
        <CreateBox>
          <CreateBoxintroBox>
            <CreateBoxintro placeholder="봉사단 한줄 소개글">
            </CreateBoxintro>
          </CreateBoxintroBox>
        </CreateBox>
        <CreateBox>
          <CreateBoxContentsBox>
            <CreateBoxContents placeholder="내용을 입력하세요.">

            </CreateBoxContents>
          </CreateBoxContentsBox>
        </CreateBox>
        <ImgUploadBox>
          <ImgUploadButton>이미지 업로드</ImgUploadButton>
        </ImgUploadBox>
        <SelectBox>
          <CancelButton>
            취소
          </CancelButton>
          <CompleteButton>
            작성 완료
          </CompleteButton>
        </SelectBox>
      </Wrapper>
    </>
  );
}
