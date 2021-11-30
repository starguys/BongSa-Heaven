import React from "react";
import styled from "styled-components";

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
`;

const CommentDate = styled.span`
  margin-left: 30px;
  font-size: 14px;
  opacity: 0.5;
`

const CommentContents = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 25px;
  font-size: 12px;
`

const CommentInputBox = styled.div`
  margin-top: 8px;
  width: 80%;
  height: 100px;
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
  font-size: 17px;
  margin: 30px 0px 30px 20px;
`



export default function Comment() {
  return (
    <>
      <CommentList>

        <CommentBox>
          <CommentWriter>
            작성자A
            <CommentDate>2021.11.21</CommentDate>
          </CommentWriter>
          <CommentContents>정말 좋은 봉사단인것 같아요!</CommentContents>
        </CommentBox>

        <CommentBox>
          <CommentWriter>
            작성자A
            <CommentDate>2021.11.21</CommentDate>
          </CommentWriter>
          <CommentContents>정말 좋은 봉사단인것 같아요!</CommentContents>
        </CommentBox>
        
        <CommentBox>
          <CommentWriter>
            작성자A
            <CommentDate>2021.11.21</CommentDate>
          </CommentWriter>
          <CommentContents>정말 좋은 봉사단인것 같아요!</CommentContents>
        </CommentBox>

        <CommentBox>
          <CommentWriter>
            작성자A
            <CommentDate>2021.11.21</CommentDate>
          </CommentWriter>
          <CommentContents>정말 좋은 봉사단인것 같아요!</CommentContents>
        </CommentBox>

      </CommentList>

      <CommentInputBox>
        <CommentInput> 
          <CommentInputContents placeholder="내용을 입력하세요.">
          </CommentInputContents>
        </CommentInput>
        <CommentInputButton>댓 글<br />달 기</CommentInputButton>
      </CommentInputBox>
    </>
  );
}