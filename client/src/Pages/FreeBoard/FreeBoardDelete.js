import React from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import DesktopTitle from "../../components/common/DesktopTitle";
import DeleteCheck from "../../components/common/DeleteCheck";


const ContentsBox = styled.div`

@media screen and (min-width: 37.5rem) {
  margin: auto;
  background-color: white;
  width: 80%;
  display:flex;
  flex-direction: column;
  padding: 20px 0px 20px 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
}
`


export default function FreeBoardDelete() {
  return (
    <>
      <Header2 componentName="삭제"/>
      <DesktopTitle title="삭제"/>
      <ContentsBox>
        <DeleteCheck contents="게시글" delete="/FreeBoardList" cancel="/FreeBoardContents"/>
      </ContentsBox>
    </>
  );
}
