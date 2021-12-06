import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Header2 from "../../components/common/Header2";
import UserMyPageMain from "../../components/Mypages/UserMyPageMain";
import axios from 'axios'

const SeeRecruiterBtn = styled.button`
  margin-left: 24px;
  margin-bottom: 14px;
  width: 327px;
  height: 29px;
  background: #ff7676;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  border: 0;
  @media screen and (min-width: 37.5rem) {
    width: 760px;
    height: 71px;
    cursor: pointer;
  }
`;
const InfoEditBtn = styled.button`
  margin-bottom: 24px;
  margin-left: 24px;
  width: 327px;
  height: 29px;
  background: #ff7676;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  border: 0;
  @media screen and (min-width: 37.5rem) {
    width: 760px;
    height: 71px;
    cursor: pointer;
  }
`;

const HiddenVolContainer = styled.div`
  margin-left: 24px;
  margin-bottom: 30px;
  width: 325px;
  height: 29px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 37.5rem) {
    width: 760px;
    height: 71px;
    align-items: flex-start;
  }
`;

const HiddenVolToogleInput = styled.input``;
const HiddenVolToogleLabel = styled.label``;
const HiddenVolToogleBall = styled.span``;
const WebContainer = styled.div`
  @media screen and (min-width: 37.5rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function UserMyPage() {
 
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(true);
  const handleSwitch = () => {
    if (isChecked) {
      setTimeout(setIsChecked(false), 100);
    } else {
      setTimeout(setIsChecked(true), 100);
    }
  };
  const [userInfo, setUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
    imgUrl: "",
    want_region: "",
    want_vol: "",
    age: "",
    sex: "",
  });
  const GoSeeRecruiter = () => {
    history.push("/SeeRecruiter");
  };
  const GoUserEditPasswordCheck = () => {
    history.push("/UserEditPasswordCheck");
  };

  const getUserInfoHandler = () => {
    console.log(localStorage.getItem("accessToken"));
    //비밀번호, 닉네임, 등등 바꾸는 경우

    axios
      .get("http://localhost:8080/user/info", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "applicaton/json",
        },
      })

      .then((res) => {
        console.log(res.data.data.email);

        setUserInfo({
          email: res.data.data.email,
          nickname: res.data.data.nickname,
          password: res.data.data.password,
          want_region: res.data.data.want_region,
          want_vol: res.data.data.want_vol,
          gender: res.data.data.gender,
          age: res.data.data.age,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfoHandler();
  }, []);

  return (
    <>
      <Header2 componentName={"마이페이지"} />
      <WebContainer>
        <UserMyPageMain userInfo={userInfo} />
        <SeeRecruiterBtn onClick={GoSeeRecruiter}>
          봉사모집자 보기
        </SeeRecruiterBtn>
        <InfoEditBtn onClick={GoUserEditPasswordCheck}>
          회원정보 수정하기
        </InfoEditBtn>
        <HiddenVolContainer>
          <span>봉사희망정보 숨기기</span>
          {/* 개인정보숨기기를 닫으면 개인정보가 recruiter한테 안보여짐 
          on =true, off = false*/}
          <HiddenVolToogleLabel

            className="switch-button"
            onClick={handleSwitch}
          >
            <HiddenVolToogleInput type="checkbox" checked={isChecked} />
            <HiddenVolToogleBall className="onoff-switch" />
          </HiddenVolToogleLabel>
        </HiddenVolContainer>
      </WebContainer>
    </>
  );
}
