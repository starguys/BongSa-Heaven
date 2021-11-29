import React from "react";
import Header2 from "../../components/common/Header2";
import styled from "styled-components";
import Recruiters from "../../components/Mypages/Recruiters";

export default function SeeUsers() {
  const TopSpace = styled.div`
    height: 43px;
  `;

  return (
    <>
      <Header2 componentName={"봉사자 보기"} />
      <TopSpace></TopSpace>
      <Recruiters />
      <Recruiters />
      <Recruiters />
      <Recruiters />
      <Recruiters />
      <Recruiters />
      <Recruiters />
      <Recruiters />
      <Recruiters />
    </>
  );
}
