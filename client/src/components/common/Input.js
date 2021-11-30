import React from "react";
import styled from "styled-components";


const InputBox = styled.div`
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

const InputTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputText = styled.input`
  display: flex;
  justify-content: flex;
  align-items: center;
  width: 80%;
  border: 0px;
  border-bottom: solid gray 1px;
  opacity: 0.5;
`;


export default function Input(props) {
  return (
    <>
      <InputBox>
        <InputTextBox>
          <InputText placeholder={props.text}>
          </InputText>
        </InputTextBox>
      </InputBox>
    </>
  );
}
