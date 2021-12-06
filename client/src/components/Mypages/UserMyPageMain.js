import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const MyNameContainer = styled.div`
  margin-left: 22px;
  margin-top: 36px;
  margin-bottom: 48px;
  width: 331px;
  height: 135px;
  background: #ffffff;
  box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 37.5rem) {
    width: 760px;
    height: 330px;
  }
`;
const MyNameText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  @media screen and (min-width: 37.5rem) {
    font-size: 36px;
  }
`;
const MynameMaill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const MynameMaillSpan = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  @media screen and (min-width: 37.5rem) {
    font-size: 24px;
  }
`;

export default function UserMyPageMain({userInfo}) {
  // const [userInfo, setUserInfo] = useState({
  //   email: "",
  //   nickname: "",
  //   password: "",
  //   passwordCheck: "",
  //   imgUrl: "",
  //   want_region: "",
  //   want_vol: "",
  //   age: "",
  //   sex: "",
  // });
  console.log(userInfo);
  const history = useHistory();

  const handleMaillBox = () => {
    console.log("hi");
    history.push("/UserMaill");
  };

  return (
    <>
      <MyNameContainer>
        <MyNameText>{userInfo.nickname}</MyNameText>
        <MynameMaill onClick={handleMaillBox}>
          <FontAwesomeIcon icon={faEnvelope} className="MyPageIcon" />
          <MynameMaillSpan>쪽지함</MynameMaillSpan>
        </MynameMaill>
      </MyNameContainer>
    </>
  );
}
