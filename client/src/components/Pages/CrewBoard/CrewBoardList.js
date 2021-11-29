import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
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
  background-color: #FFD4D4;
`
const HeaderText = styled.div`
  width: 80%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`
const IconBox = styled.div`
  right: 5vw;
`

const LoadingAniBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`
const circleAnimation = keyframes`
  from {
    transform:translate(-50%, -50%) rotate(0);
  }
  to {
    transform:translate(-50%, -50%) rotate(360deg);
  }
`

const Circle = styled.div`
    position: fixed; 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%); 
    width: 40px; 
    height: 40px; 
    border:10px solid #fff; 
    border-top: 10px solid #FF7676; 
    border-radius: 30px; 
    transition: all .2s;
    animation-name: ${circleAnimation};
    animation-duration: .8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`
const Dim = styled.div`
  position:fixed;
  left: 0; 
  top: 0;
  width: 100%; 
  height: 100%;
  background:rgba(0,0,0,0.3);
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
  border: solid 1px black;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`

const Describe = styled.div`
  display:flex;
  flex-direction: column;
  width: 90%;
  height: 35%;
  background-color: white;
  border: solid 1px black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const SayHello = styled.div`
  height: 30%;
  display: flex;
  font-size: 14px;
  align-items: flex-end;
`
const VolunteersName = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  color: #448B76;
`
const PublishedDate = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  opacity: 0.5;
  font-size: 12px;
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
    
        <Wrapper>
          <Header>
            <HeaderText>
            봉사단 소개 리스트
            </HeaderText>
            <IconBox>
              <FontAwesomeIcon icon={faTimes} />
            </IconBox>
          </Header>
          {isLoading ? 
          <>
          <LoadingAniBox>
            <Dim/>
            <Circle/>
          </LoadingAniBox>
          </>
          :
          <>
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
          </>
          }
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
  );
}
