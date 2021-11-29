import React from "react";
import MyPageHeader from "./MyPageHeader";
import styled from "styled-components";
import Recruiters from "../../Mypages/Recruiters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function SeeRecruiter() {
  const TopSpace = styled.div`
    height: 43px;
  `;

  return (
    <>
      <MyPageHeader componentName={"봉사 모집자 보기"} />
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
