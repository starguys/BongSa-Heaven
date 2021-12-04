import React from "react";
import Header2 from "../../components/common/Header2";
import styled from "styled-components";
import Users from "../../components/Mypages/Users";

export default function SeeUsers() {
  const TopSpace = styled.div`
    height: 43px;
  `;
  const SeeContainer = styled.div`
    @media screen and (min-width: 37.5rem) {
      width: 100%;
      display: flex;
      flex-direction: column;

      align-items: center;
    }
  `;

  return (
    <>
      <Header2 componentName={"봉사자 보기"} />
      <TopSpace></TopSpace>
      <SeeContainer>
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
      </SeeContainer>
    </>
  );
}
