import React from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import DesktopTitle from "../../components/common/DesktopTitle";
import Writing from "../../components/FreeBoard/Writing";
import List from "../../components/FreeBoard/List";
import Comment from "../../components/FreeBoard/Comment";

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function FreeBoardContents({
  isLogin,
  currentFBcontent,
  userId,
  GoToFreeBoardContent,
}: any) {
  console.log(currentFBcontent);

  return (
    <>
      <Wrapper>
        <Header2 componentName="게시글 보기" />
        <DesktopTitle title="게시글 보기" url="/FreeBoardList" />
        <Writing currentFBcontent={currentFBcontent} userId={userId} />
        <List
          backtoList="/FreeBoardList"
          isLogin={isLogin}
          currentFBcontent={currentFBcontent}
          userId={userId}
          GoToFreeBoardContent={GoToFreeBoardContent}
        />
        <Comment
          isLogin={isLogin}
          currentFBcontent={currentFBcontent}
          GoToFreeBoardContent={GoToFreeBoardContent}
        />
      </Wrapper>
    </>
  );
}
