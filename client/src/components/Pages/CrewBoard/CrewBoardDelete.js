import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  display:flex;
  background-color: #FFD4D4;
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

const DeleteBoxTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: red;
`
const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0px 15px 0px;
`
const DeleteButton = styled.div`
  background-color : #FF7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  padding: 20px 0px 20px 0px;
  margin-right: 20px;
  margin-bottom: 300px;
  border-radius: 20px;
`
const CancelButton = styled.div`
  background-color : white;
  color: black;
  border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  padding: 20px 0px 20px 0px;
  margin-left: 20px;
  margin-bottom: 300px;
  border-radius: 20px;
`

export default function CrewBoardDelete() {
  return (
    <>
      <Header>
        <HeaderText>
          글 삭제 확인
        </HeaderText>
        <IconBox>
          <FontAwesomeIcon icon={faTimes} />
        </IconBox>
      </Header>
      <DeleteBoxTitleBox>
        해당 모집글을 삭제하시겠습니까?
      </DeleteBoxTitleBox>
      <SelectBox>
        <DeleteButton>
          삭제
        </DeleteButton>
        <CancelButton>
          취소
        </CancelButton>
      </SelectBox>
    </>
  );
}
