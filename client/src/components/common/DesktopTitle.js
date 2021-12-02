import React from "react";
import styled from "styled-components";


const Title = styled.div`
  display: none;
  
  @media screen and (min-width: 37.5rem) {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 24px;

  }
`


export default function DesktopTitle(props) {


  return (
    <>
      <Title>{props.title}</Title>
    </>
  );
}