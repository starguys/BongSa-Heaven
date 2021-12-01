import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const ListBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  display:flex;
  padding: 10px;
`;
const ListButton = styled.div`
  background-color: #FF7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 10px 0 10px 0;
  margin: 10px;
  border-radius: 20px;

  @media screen and (min-width: 1024px) {
    background-color: #FF7676;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    padding: 10px 0 10px 0;
    margin: 10px;
    border-radius: 20px;
    font-size: 24px;
  }

`;



export default function List(props) {

  const history = useHistory();
  const BacktoList = (url) => history.push(url);


  return (
    <>
      <ListBox>
        <ListButton onClick={() => BacktoList(props.backtoList)}>목록</ListButton>
      </ListBox>
    </>
  );
}
