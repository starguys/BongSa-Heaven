import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Header2 from "../../components/common/Header2";
import Loading from "../../components/common/Loading";
import Contents from "../../components/FreeBoard/Contents";
import Pagination from "../../components/common/Pagination";

const Headerspace = styled.div`
  background-color: #FFB1B1;
  width: 100%;
  padding: 40px 0px 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FreeBoardList() {
  const [isLoading, CheckLoading] = useState(true);

  const loadingHandler = () => {
    CheckLoading(false);
  };

  useEffect(() => {
    setTimeout(() => loadingHandler(), 1000);
  });

  return (
    <>
      <Header2 componentName="자유 게시판" />
      <Headerspace></Headerspace>

      {isLoading ? 
        <>
          <Loading />
        </>
        : 
        <>
          <Contents />
          <Contents />
          <Contents />
          <Contents />
          <Contents />
          <Contents />
          <Contents />
        </>
      }
      <Pagination />
    </>
  );
}
