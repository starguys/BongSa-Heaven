import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router";

const DeleteBoxTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: red;

  @media screen and (min-width: 37.5rem) {
    font-size: 20px
  }

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
  width: 100px;
  padding: 20px 0px 20px 0px;
  margin-right: 20px;
  margin-bottom: 300px;
  border-radius: 20px;

  @media screen and (min-width: 37.5rem) {
    width: 150px;
    font-size: 20px
  }
`
const CancelButton = styled.div`
  background-color : white;
  color: black;
  border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 20px 0px 20px 0px;
  margin-left: 20px;
  margin-bottom: 300px;
  border-radius: 20px;

  @media screen and (min-width: 37.5rem) {
    width: 150px;
    font-size: 20px
  }
`


export default function DeleteCheck(props) {

  const history = useHistory();
  const Delete = (url) => history.push(url);
  const Cancel = (url) => history.push(url);

  return (
    <>
     <DeleteBoxTitleBox>
        해당 {props.contents}을 삭제하시겠습니까?
      </DeleteBoxTitleBox>
      <SelectBox>
        <DeleteButton onClick={() => Delete(props.delete)}>
          삭제
        </DeleteButton>
        <CancelButton onClick={() => Cancel(props.cancel)}>
          취소
        </CancelButton>
      </SelectBox>
    </>
  );
}
