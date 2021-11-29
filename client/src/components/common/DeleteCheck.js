import React from "react";
import styled from 'styled-components'

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


export default function DeleteCheck(props) {
  return (
    <>
     <DeleteBoxTitleBox>
        해당 {props.contents}을 삭제하시겠습니까?
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
