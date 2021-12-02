import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
import Recruiters from "../../components/Mypages/Recruiters";
import RecruiterDummy from "../../dummy/RecruiterDummy";

export default function SeeRecruiter() {
  const [Recruiter, setRecruiter] = useState([]);
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

  useEffect(() => {
    setRecruiter(RecruiterDummy);
  });

  return (
    <>
      <Header2 componentName={"봉사 모집자 보기"} />
      <TopSpace></TopSpace>
      <SeeContainer>
        {Recruiter.map((ShowRecruiter, idx) => {
          return <Recruiters ShowRecruiter={ShowRecruiter} idx={idx} />;
        })}
      </SeeContainer>
    </>
  );
}
