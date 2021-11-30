import React from "react";
import { useState } from "react";
import { useEffect } from "react";
<<<<<<< HEAD
import styled from "styled-components";
=======
import styled, { keyframes } from "styled-components";
>>>>>>> 6ef09664267f60b5ab0eea10b8348b50deac7e15
import Header2 from "../../components/common/Header2";
import Loading from "../../components/common/Loading";
import Contents from "../../components/FreeBoard/Contents";
import Pagination from "../../components/common/Pagination";

const Headerspace = styled.div`
<<<<<<< HEAD
  background-color: #FFB1B1;
=======
  background-color: #ffb1b1;
>>>>>>> 6ef09664267f60b5ab0eea10b8348b50deac7e15
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
<<<<<<< HEAD
     <>
        <Header2 componentName="자유 게시판"/>
        <Headerspace>
        </Headerspace>

        {isLoading ? 
=======
    <>
      <Header2 componentName="자유 게시판" />
      <Headerspace></Headerspace>

      {isLoading ? (
>>>>>>> 6ef09664267f60b5ab0eea10b8348b50deac7e15
        <>
          <Loading />
        </>
        : 
        <>
<<<<<<< HEAD
        <Contents/>
        <Contents/>
        <Contents/>
        <Contents/>
        <Contents/>
        <Contents/>
        <Contents/>
        </>
        }
        <Pagination/>
      </>
=======
          <Contents />
          <Contents />
          <Contents />
          <Contents />
          <Contents />
          <Contents />
          <Contents />
        </>
      )}
      <Pagination />
    </>
>>>>>>> 6ef09664267f60b5ab0eea10b8348b50deac7e15
  );
}
