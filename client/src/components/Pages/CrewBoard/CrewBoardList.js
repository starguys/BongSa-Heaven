import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: auto;
`
const Header = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0px 20px 0px;
`
const HeaderText = styled.div`
  width: 80%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`
const IconBox = styled.div`
  right: 5vw;
`

const Card = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  margin-top: 5vh;
`

const ImageBox = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 65%;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`

const Describe = styled.div`
  display:flex;
  flex-direction: column;
  width: 90%;
  height: 35%;
  background-color: white;
`

const SayHello = styled.div`
  height: 30%;
  display: flex;
  align-items: flex-end;
  opacity: 0.5;
  font-size: 0.8em;
`
const VolunteersName = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 1em;  
`
const PublishedDate = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  opacity: 0.5;
  font-size: 0.5em;
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  a {
    color: black;
    padding: 1rem;
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
    {isLoading ? <Loading>Loading...</Loading> :
      <>
        <Wrapper>
          <Header>
            <HeaderText>
            봉사단 소개 리스트
            </HeaderText>
            <IconBox>
              <FontAwesomeIcon icon={faTimes} />
            </IconBox>
          </Header>
          <Card>
            <ImageBox>
              <Img src="https://dimg.donga.com/wps/NEWS/IMAGE/2019/10/10/97803507.1.jpg"/>
            </ImageBox>
            <Describe>
              <SayHello>
              &nbsp;&nbsp; 힘이필요한 모든 봉사를 찾아가는 봉사단!
              </SayHello>
              <VolunteersName>
              &nbsp; 힘쎈봉사단
              </VolunteersName>
              <PublishedDate>
              &nbsp;&nbsp;&nbsp;&nbsp; 2021.11.21
              </PublishedDate>
            </Describe>
          </Card>

          <Card>
            <ImageBox>
              <Img src="https://dimg.donga.com/wps/NEWS/IMAGE/2019/10/10/97803507.1.jpg"/>
            </ImageBox>
            <Describe>
              <SayHello>
              &nbsp;&nbsp; 힘이필요한 모든 봉사를 찾아가는 봉사단!
              </SayHello>
              <VolunteersName>
              &nbsp; 힘쎈봉사단
              </VolunteersName>
              <PublishedDate>
              &nbsp;&nbsp;&nbsp;&nbsp; 2021.11.21
              </PublishedDate>
            </Describe>
          </Card>
          <Card>
            <ImageBox>
              <Img src="https://dimg.donga.com/wps/NEWS/IMAGE/2019/10/10/97803507.1.jpg"/>
            </ImageBox>
            <Describe>
              <SayHello>
              &nbsp;&nbsp; 힘이필요한 모든 봉사를 찾아가는 봉사단!
              </SayHello>
              <VolunteersName>
              &nbsp; 힘쎈봉사단
              </VolunteersName>
              <PublishedDate>
              &nbsp;&nbsp;&nbsp;&nbsp; 2021.11.21
              </PublishedDate>
            </Describe>
          </Card>

          <Pagination>
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">&raquo;</a>
          </Pagination>
        </Wrapper>
      </>
      }
    </>
  );
}
