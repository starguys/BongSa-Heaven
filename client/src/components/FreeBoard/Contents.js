import React from "react";
import styled from "styled-components";
import axios from "axios"
import { useHistory } from "react-router";

const ContentsList = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentsBox = styled.div`
  cursor: pointer;  
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: dashed gray 1px;
  padding: 20px 0px;
`
const ContentsWriter = styled.span`
  margin-left: 25px;
  opacity: 0.5;
`

const ContentsDate = styled.span`
  margin-left: 30px;
  font-size: 12px;
`

const ContentsTitle = styled.div`
  display:flex;
  font-size: 14px;
  align-items: center;
  margin: 0px 0px 10px 20px;
`
export default function Contents( {freeboard_id, title, writer, date, setFBcontent, currentFBcontent} ) {

  const history = useHistory();
  const GotoContents = () => history.push("/FreeBoardContents");

  const GoToFreeBoardContent = (freeboard_id) => {
    axios.post("http://localhost:8080/board/fbinfo",
    {
      freeboard_id: freeboard_id,
    },
    {
      headers: {
        "authorization" : `Bearer ` + localStorage.getItem('accessToken'),
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log("res.data",res.data)
      setFBcontent(res.data)
      console.log("currentFBcontent",currentFBcontent)
      GotoContents()
    })
    .catch((err) => console.log(err))
  }

  return (
    <>
      <ContentsList onClick={() => GoToFreeBoardContent(freeboard_id)}>
        <ContentsBox>
          <ContentsTitle>
          {title}
          </ContentsTitle>
          <ContentsWriter>
            {writer}
            <ContentsDate>{date}</ContentsDate>
          </ContentsWriter>
        </ContentsBox>
      </ContentsList>
    </>
  );
}