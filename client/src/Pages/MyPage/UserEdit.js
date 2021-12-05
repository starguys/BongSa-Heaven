import React, { useState, userEffect, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Header3 from "../../components/common/Header3";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffd4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  @media screen and (min-width: 37.5rem) {
    background-color: white;
  }
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 37.5rem) {
    margin-top: 65px;
    width: 1080px;
  }
`;

const LogoBox = styled.div`
  width: 80%;
  margin: 10px 0px 50px 0px;
  background-color: #ffd4d4;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 37.5rem) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 60%;
  object-fit: cover;
`;
const EditEmaill = styled.div`
  @media screen and (min-width: 37.5rem) {
    font-size: 36px;
    margin-bottom: 5%;
  }
`;

const SignUpWhiteBox = styled.div`
  background-color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 15px 0px 15px 0px;
  margin: 8px 0px 8px 0px;
`;
const SignUpWhiteInput = styled.input`
  width: 90%;
  border: none;
  @media screen and (min-width: 37.5rem) {
    border: solid 1px black;
    width: 40%;
    height: 40px;
  }

  ::placeholder {
  }
`;
const CheckingPossibleOrNotBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 37.5rem) {
    width: 35%;
  }
`;
const PossibleOrNot = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.5;
  margin-left: 5vw;
  @media screen and (min-width: 37.5rem) {
    margin: 0;
  }
`;

const CheckingPossibleOrNotButton = styled.div`
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  border-radius: 20px;
`;

const SelectSexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 30px 0px 15px 0px;
  @media screen and (min-width: 37.5rem) {
    width: 40%;
    justify-content: space-between;
    /* background-color: yellow; */
  }
`;
const SelectSexButton = styled.div`
  background-color: #ffb1b1;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  height: 17vh;
  border-radius: 50%;
  @media screen and (min-width: 37.5rem) {
    width: 140px;
    height: 140px;
    justify-content: space-between;
    /* background-color: yellow; */
  }
`;
const SexImageBox = styled.img`
  margin: 1vh 0vh 0.5vh 0vh;
  width: 70%;
  height: 70%;
  object-fit: cover;
  @media screen and (min-width: 37.5rem) {
    margin: 10;

    /* background-color: yellow; */
  }
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 15px 0px 15px 0px;
  @media screen and (min-width: 37.5rem) {
    justify-content: center;
  }
`;
const AgeButton = styled.div`
  background-color: #ffb1b1;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 8vh;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  @media screen and (min-width: 37.5rem) {
    margin: 0px 15px;
    width: 20%;
    height: 45px;
  }
`;

const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 10px 0px 30px 0px;
`;
const CompleteButton = styled.div`
  margin-bottom: 15px;
  background-color: #ff7676;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  width: 110px;
`;
const DeleteBtn = styled.div`
  margin-bottom: 15px;
  background-color: #448b76;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 80px 20px 80px;
  border-radius: 5px;
  width: 110px;
  opacity: 0.6;
  height: 5px;
`;

export default function UserEdit() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
    imgUrl: "",
    want_region: "",
    want_vol: "",
    gender: "",
    age: "",
  });

  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  //errorMessage
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passErrorMessage, setPassErrorMessage] = useState("");
  const [passCheckErrorMessage, setPassCheckErrorMessage] = useState("");
  const [nickCheckErrorMessage, setNickCheckErrorMessage] = useState("");

  const history = useHistory();
  const GoMyPage = () => {
    history.push("/UserMyPage");
  };
  const GoUserDelete = () => {
    history.push("/UserDelete");
  };

  //비밀번호를 바꾸는경우
  //정보를 바꾸는 경우
  const userInfoEditHandler = (key) => (e) => {
    //onChange에 의해 변하는값.
    setUserInfo({ ...userInfo, [key]: e.target.value });

    //password ===passwordcheck가 되어야함

    //닉네임만 바꾸는경우
    //비밀번호만 바꾸는경우
    //성별, 나이, 봉사희망지역, 희망 봉사

    //바꾸는 값

    //password가 존재하지 않는다.
    //password를 입력하지 않으면 비밀번호를 변경하지 않겠다.

    axios
      .patch("http://localhost:8080/user/edit", {
        password: userInfo.password,
        passwordCheck: userInfo.passwordCheck,
        nickname: userInfo.nickname,
        want_region: userInfo.want_region,
        wnat_vol: userInfo.want_vol,
        age: userInfo.age,
        sex: userInfo.sex,
      })
      .then((res) => {
        console.log(res.data.data);
      });
  };
  const validateNickname = (nickname) => {
    //닉네임은 자릿수 제한만 두기로 한다.
    //닉네임 중복 체크
    const max = 8;
    const min = 2;
    console.log("validate", nickname.length);

    if (nickname.length < min || nickname.length > max) {
      console.log("1이하, 9이상");
      setNickCheckErrorMessage("닉네임은 2~8 자 입력해주세요");
      return false;
    } else {
      setNickCheckErrorMessage("");
      console.log("2이상 8이하");

      return true;
      //2->1 로갈때 가 문제
      //9->7까지 문제
      //1->0 일때 문제 x
    }
  };
  const userInfoHandler = () => {
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
    userInfoHandler();
  }, []);
  return (
    <>
      <Header3 />
      <Wrapper>
        <MainContainer>
          <LogoBox>
            <Logo src="./image/logo2.png"></Logo>
          </LogoBox>
          <EditEmaill>현재 이메일 : {userInfo.email}</EditEmaill>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              value={userInfo.nickname}
              placeholder="닉네임"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <CheckingPossibleOrNotBox>
            <PossibleOrNot>사용 가능</PossibleOrNot>
            <CheckingPossibleOrNotButton>중복 확인</CheckingPossibleOrNotButton>
          </CheckingPossibleOrNotBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput placeholder="비밀번호"></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput placeholder="비밀번호 확인"></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              value={userInfo.want_region}
              placeholder="희망 봉사 지역"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              value={userInfo.want_vol}
              placeholder="희망 봉사 활동"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SelectSexBox>
            <SelectSexButton>
              <SexImageBox src="./image/young-man.png"></SexImageBox>
            </SelectSexButton>
            <SelectSexButton>
              <SexImageBox src="./image/young-woman.png"></SexImageBox>
            </SelectSexButton>
          </SelectSexBox>
          <SelectBox>
            <AgeButton>청소년</AgeButton>
            <AgeButton>청년</AgeButton>
            <AgeButton>장년</AgeButton>
          </SelectBox>
          <CompleteBox>
            <CompleteButton onClick={GoMyPage}>수정완료 완료</CompleteButton>
          </CompleteBox>
        </MainContainer>
      </Wrapper>
    </>
  );
}
