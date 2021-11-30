import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Header2 from "../../components/common/Header2";
import Loading from "../../components/common/Loading";
import Card from "../../components/CrewBoard/Card";
import Pagination from "../../components/common/Pagination";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: auto;
`


export default function CrewBoardList() {

  const [isLoading, CheckLoading] = useState(true)

  const loadingHandler = () => {
    CheckLoading(false)
  };

  useEffect(() => {
    setTimeout(() => loadingHandler(), 1000)})

  return (
    <>
      <Wrapper>
        <Header2 componentName="봉사단 게시판"/>
        {isLoading ? 
        <>
        <Loading/>
        </>
        :
        <>
          <Card/>
          <Card/>
          <Card/>
        </>
        }
        <Pagination/>
      </Wrapper>
    </>
  );
}
