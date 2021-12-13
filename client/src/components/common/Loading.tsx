import React from "react";
import styled, { keyframes } from "styled-components";

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

export default function Loading() {

return (
  <>
    <LoadingAniBox>
      <Dim/>
      <Circle/>
    </LoadingAniBox>
  </>
  );
}
