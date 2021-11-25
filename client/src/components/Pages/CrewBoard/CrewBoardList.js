import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  display:flex;
  flex-direction: column;
  overflow: auto;
`
const Header = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 100%;
  min-height: 12%;
	box-sizing: border-box;
`

const Card = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30%;
  max-height: 30%;
	box-sizing: border-box;
  margin-top: 5%;
`

const ImageBox = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 65%;
	box-sizing: border-box;
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
	box-sizing: border-box;
  background-color: white;
`

const SayHello = styled.div`
  margin-top: 1%;
  opacity: 0.5;
  font-size: 15px;
`
const VolunteersName = styled.div`

  margin-top: 2%;
  font-size: 25px;  
`
const PublishedDate = styled.div`
  margin-top: 2%;
  opacity: 0.5;
  font-size: 12px;
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 12%;
  a {
    color: black;
    padding: 1rem;
  }
`
const IconBox = styled.div`
  right: 20px;
  position: absolute;
`



export default function CrewBoardList() {
  return (
    <>
      <Wrapper>
        <Header>
          봉사단 소개 리스트
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
  );
}
