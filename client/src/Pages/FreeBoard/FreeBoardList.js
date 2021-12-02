import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import DesktopTitle from "../../components/common/DesktopTitle";
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
  
    @media screen and (min-width: 37.5rem) {
      display: none;
    }
  }
  `



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
}
`

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
          <DesktopTitle title="자유 게시판"/>
          <ContentsBox>
            <Contents />
            <Contents />
            <Contents />
            <Contents />
            <Contents />
            <Contents />
            <Contents />
          </ContentsBox>
        </>
      }
      <Pagination />
    </>
  );
}