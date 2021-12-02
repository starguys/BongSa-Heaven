import React from "react";
import styled from "styled-components";
import { useState } from "react";

const CommentList = styled.div`
  flex-direction: column;
  align-items: center;
  width: 80%;
  border-radius: 20px;
  background-color: white;
  padding: 10px 0px 15px 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  @media screen and (min-width: 37.5rem) {
    width: 1080px;
  }
`
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: dashed gray 1px;
  padding: 20px 0px;

  @media screen and (min-width: 37.5rem) {
    padding: 30px 0px;
  }
`
const CommentWriter = styled.span`
  margin-left: 25px;
  
  @media screen and (min-width: 37.5rem) {
    font-size: 24px;
  }
`;

const CommentDate = styled.span`
  margin-left: 30px;
  font-size: 14px;
  opacity: 0.5;

  @media screen and (min-width: 37.5rem) {
    font-size: 20px;
  }
`

const CommentContents = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 25px;
  font-size: 12px;
  @media screen and (min-width: 37.5rem) {
    font-size: 16px;
    margin-top: 20px;
  }
`

const CommentInputBox = styled.div`
  margin-top: 8px;
  width: 80%;
  height: 100px;
  display: flex;
  margin: 30px 0px 60px 0px;

  @media screen and (min-width: 37.5rem) {

    width: 1080px;
    flex-direction: column;
    align-items: flex-end;
    height: 300px;
  }
`
const CommentInput = styled.div`
  width: 70%;
  height: 90%;
  margin: 30px 0px 30px 0px;
  @media screen and (min-width: 37.5rem) {
    width: 100%;
    height: 100%;
  }
  
`
const CommentInputContents = styled.input`
  width: 100%;
  height: 90%;
  display: flex;

  @media screen and (min-width: 37.5rem) {
    ::placeholder {
      font-size: 16px;
    } 
  }
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
  font-size: 16px;
  margin: 30px 0px 30px 20px;
  @media screen and (min-width: 37.5rem) {
   
    margin: 0px 0px 30px 20px;
    width: 15%;
    font-size: 20px;
    height: 80%;
    line-height: 120%;
  }
`



export default function Comment() {

  const [commentValue, setCommentValue] = useState("")

  const makeComment = (e) => {
    setCommentValue(e.target.value)
    console.log(commentValue)
  }

  const saveComment = () => {
    // axios("http://localhost:8080/comment/register",{})
    setCommentValue("")
  }


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
          <CommentInputContents placeholder="내용을 입력하세요." onChange={makeComment} value={commentValue}>
          </CommentInputContents>
        </CommentInput>
        <CommentInputButton onClick={saveComment}>댓 글<br />달 기</CommentInputButton>
      </CommentInputBox>
    </>
  );
}