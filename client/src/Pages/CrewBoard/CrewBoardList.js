import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import axios from "axios"
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import Loading from "../../components/common/Loading";
import CreateLink from "../../components/common/CreateLink";
import CreateLink2 from "../../components/common/CreateLink2";
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

const TitleBox = styled.div`
  @media screen and (min-width: 37.5rem) {
  width: 1080px;
  margin: auto;
  display: flex;
}
`

const Title = styled.div`
display: none;

@media screen and (min-width: 37.5rem) {
  width: 768px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
}
`
const LinkBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media screen and (min-width: 37.5rem) {
    display: none; 
  }
`

const Cards =styled.div`

@media screen and (min-width: 37.5rem) {
  width: 1110px;
  margin: auto;
  margin-bottom: 50px;
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
  const [isLoading, CheckLoading] = useState(true);

  // const [crewBoardinfo, setcrewBoardinfo] = useState([]);

  const loadingHandler = () => {
    CheckLoading(false);
  };

  // const getCrewBoardList = () => {
  //   axios.get("http://localhost:8080/board/info")
  //   .then((res) => setcrewBoardinfo(res.data))
  //   .catch((err) => console.log(err))
  // }

  useEffect(() => {
    setTimeout(() => loadingHandler(), 1000);
  });

  return (
    <>
      <Wrapper>
        <Header2 componentName="봉사단 게시판"/>
        <LinkBox>
          <CreateLink2 create="/CrewBoardCreate"/>
        </LinkBox>
        {isLoading ? 
        <>
        <Loading/>
        </>
        :
        <>
          <TitleBox>
            <Title>봉사단 게시판</Title>
            <CreateLink create="/CrewBoardCreate"/>
          </TitleBox>
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
