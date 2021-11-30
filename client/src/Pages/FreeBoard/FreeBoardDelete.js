import React from "react";
import Header2 from "../../components/common/Header2";
import DeleteCheck from "../../components/common/DeleteCheck";


export default function FreeBoardDelete() {
  return (
    <>
      <Header2 componentName="삭제"/>
      <DeleteCheck contents="게시글" delete="/FreeBoardList" cancel="/FreeBoardContents"/>
    </>
  );
}
