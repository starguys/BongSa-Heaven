import React from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import DesktopTitle from "../../components/common/DesktopTitle";
import Check from "../../components/common/Check";

const ContentsBox = styled.div`
  @media screen and (min-width: 1024px) {
    margin: auto;
    background-color: white;
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 20px 0px 20px 0px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export default function FreeBoardDelete() {
  return (
    <>
      <Header2 componentName="쪽지" />
      <DesktopTitle title="쪽지" />
      <ContentsBox>
        <Check
          contents="쪽지를 전송하시겠습니까?"
          delete="/UserMaill"
          cancel="/MaillWrite"
          leftBtn="확인"
        />
      </ContentsBox>
    </>
  );
}
