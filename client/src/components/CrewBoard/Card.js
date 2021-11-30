import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

  const Cardbox = styled.div`
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

export default function Card() {


  const history = useHistory();

  const GotoCard = () => history.push("/CrewBoardContents");

  return (
    <>
      <Cardbox onClick={GotoCard}> 
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
      </Cardbox>
    </>
  )
}