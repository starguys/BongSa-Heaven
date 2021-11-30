import React from "react";
import styled from 'styled-components'
import Header2 from "../../components/common/Header2";
import Writing from "../../components/FreeBoard/Writing";
import List from "../../components/common/List";
import Comment from "../../components/common/Comment";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display:flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

export default function FreeBoardContents() {
  return (
    <>
      <Wrapper>
       <Header2 componentName="게시글 보기"/>
       <Writing/>
        <List backtoList="/FreeBoardList"/>
       <Comment/>
      </Wrapper>
    </>
  );
}
