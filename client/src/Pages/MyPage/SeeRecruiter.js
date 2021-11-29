import React from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import Recruiters from "../../components/Mypages/Recruiters";

export default function SeeRecruiter() {
  const TopSpace = styled.div`
    height: 43px;
  `;

  return (
    <>
      <Header2 componentName={"봉사 모집자 보기"} />
      <TopSpace></TopSpace>
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
