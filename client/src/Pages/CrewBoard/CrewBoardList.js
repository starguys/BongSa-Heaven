import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Header2 from "../../components/common/Header2";
import DesktopTitle from "../../components/common/DesktopTitle";
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

const Cards =styled.div`

@media screen and (min-width: 37.5rem) {
  width: 80%;
  margin: auto;
  display: flex;
}
`

const BigCard =styled.div`

@media screen and (min-width: 37.5rem) {
  width: 60%;
  margin: auto;
  font-size: 20px;
}

`

const LeftCards =styled.div`

@media screen and (min-width: 37.5rem) {
  width: 40%;
  margin: auto;
}
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
          <DesktopTitle title="봉사단 게시판"/>
          <Cards>
            <BigCard>
              <Card/>
            </BigCard>
            <LeftCards>
              <Card/>
              <Card/>
            </LeftCards>
          </Cards>
        </>
        }
        <Pagination/>
      </Wrapper>
    </>
  );
}
