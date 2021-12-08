import React from 'react';
import styled from 'styled-components';

const MaillContentsComponent = styled.div`
  margin-top: 21px;
  margin-left: 8px;
  width: 359px;
  height: 168px;
  @media screen and (min-width: 37.5rem) {
    width: 100%;
  }
`;
const MaillContentsUserName = styled.div`
  margin-top: 12px;
  margin-left: 50px;
  width: 270px;
  height: 18px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #000000;
`;
const MaillContentsMain = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
const MaillContentsMainInput = styled.input`
  margin-left: 16px;
  width: 14px;
  height: 14px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
`;
const MaillCOntentsMainText = styled.div`
  @media screen and (min-width: 37.5rem) {
    margin-left: 10px;
    width: 90%;
    height: 100px;
    background: #ffffff;
    box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    padding: 12px;
    box-sizing: border-box;
    color: #000000;
  }
  @media screen and (max-width: 37.5rem) {
    margin-left: 10px;
    width: 280px;
    height: 100px;
    background: #ffffff;
    box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    padding: 12px;
    box-sizing: border-box;
    color: #000000;
  }
`;
export default function MaillList(list) {
  console.log(list.list.writer_nickname);
  console.log(list.list.text);

  return (
    <>
      <MaillContentsComponent>
        <MaillContentsUserName>{list.list.writer_nickname}</MaillContentsUserName>
        <MaillContentsMain>
          <MaillContentsMainInput type="checkbox" />
          <MaillCOntentsMainText>{list.list.text}</MaillCOntentsMainText>
        </MaillContentsMain>
      </MaillContentsComponent>
    </>
  );
}
