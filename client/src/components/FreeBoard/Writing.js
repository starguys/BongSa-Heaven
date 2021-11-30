import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from "react-router";

const ContentsBox = styled.div`
  background-color: white;
  width: 80%;
  display:flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px 0px 20px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 30px;
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


export default function Writing() {

  const history = useHistory();

  const Gotoedit = () => history.push("/FreeBoardEdit");
  const Gotodelete = () => history.push("/FreeBoardDelete");

  return (
    <>
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
            <ContentsBoxAdjust onClick={Gotoedit}>
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
          <ContentsBoxDeleteButton onClick={Gotodelete}>삭제</ContentsBoxDeleteButton>
        </ContentsBoxDeleteBox>
      </ContentsBox>
    </>
  );
}