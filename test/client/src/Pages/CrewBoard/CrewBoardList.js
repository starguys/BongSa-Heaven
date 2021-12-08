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
import CrewBoardListDummy from "../../dummy/CrewBoardListDummy";

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
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

  const [crewBoardinfo, setcrewBoardinfo] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = crewBoardinfo.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
      // 임시 더미 파일 적용
    setcrewBoardinfo(CrewBoardListDummy)
      // 임시 더미 파일 적용
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
          {currentPosts &&
          currentPosts.length > 0 &&
            <>   
            <BigCard>
              <Card
                  key={0}
                  img={currentPosts[0].img}
                  helloMessage={currentPosts[0].helloMessage}
                  writer={currentPosts[0].writer}
                  date={currentPosts[0].date}
                />
            </BigCard>
            <LeftCards>
              {currentPosts.length === 2 ?
              <Card
                  key={1}
                  img={currentPosts[1].img}
                  helloMessage={currentPosts[1].helloMessage}
                  writer={currentPosts[1].writer}
                  date={currentPosts[1].date}
              /> : null
              }
              {currentPosts.length === 3 ?
              <>
              <Card
                key={1}
                img={currentPosts[1].img}
                helloMessage={currentPosts[1].helloMessage}
                writer={currentPosts[1].writer}
                date={currentPosts[1].date}
              />
              <Card
                key={2}
                img={currentPosts[2].img}
                helloMessage={currentPosts[2].helloMessage}
                writer={currentPosts[2].writer}
                date={currentPosts[2].date}
              />
              </>
              : null}
            </LeftCards>
          </>
          }
          </Cards>
        </>
        }
        <Pagination
          postPerPage={postPerPage}
          totalPosts={crewBoardinfo.length}
          paginate={paginate}
        />
      </Wrapper>
    </>
  );
}
