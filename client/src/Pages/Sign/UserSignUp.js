import React from "react";
import styled from "styled-components";

import Header3 from "../../components/common/Header3";
import { useState, useRef, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
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

const SignUpWhiteBox = styled.div`
  background-color: white;
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 15px 0px 15px 0px;
  margin: 8px 0px 8px 0px;
  @media screen and (min-width: 37.5rem) {
    padding: 1px 0px 1px 0;
  }
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

export default function UserEdit() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNicname] = useState("");
  const [want_region, setWant_region] = useState("");
  const [want_vol, setWant_vol] = useState("");
  const [sex, setSex] = useState("남자");
  const [age, setAge] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passErrorMessage, setPassErrorMessage] = useState("");
  const [passCheckErrorMessage, setPassCheckErrorMessage] = useState("");
  const [nickCheckErrorMessage, setNickCheckErrorMessage] =
    useState("닉네임은 2~8 자 입력해주세요");

  const [signUp, setIsSignUp] = useState(false);

  //청소년 청년 장년 클릭시 해당 정보를 가져온다.
  const teenInput = useRef();
  const adultInput = useRef();
  const seniorInput = useRef();

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handlePasswordCheck = (e) => {
    console.log(e.target.value);
    setPasswordCheck(e.target.value);
  };

  const handleNickname = (e) => {
    //setName적용된후

    setNicname(e.target.value);

    // validateNickname(e.target.vlaue)
  };

  const handleWantReigon = (e) => {
    console.log(e.target.value);
    setWant_region(e.target.value);
  };
  const handleWantVol = (e) => {
    console.log(e.target.value);
    setWant_vol(e.target.value);
  };
  //성별을 다룬다.
  const handleMan = () => {
    setSex("남자");
    console.log(sex);
  };
  const handleWoman = () => {
    setSex("여자");
    console.log(sex);
  };
  // 나이를 다룬다.
  const handleTeen = () => {
    setSex(teenInput.current.textContent);
    console.log(teenInput.current.textContent);
  };
  const handleAdult = () => {
    setSex(adultInput.current.textContent);
    console.log(adultInput.current.textContent);
  };
  const handleSenior = () => {
    setSex(seniorInput.current.textContent);
    console.log(seniorInput.current.textContent);
  };
  //이메일 검증
  const validateEmail = (email) => {
    //이메일 형식어야한다.
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (!regEmail.test(email)) {
      setEmailErrorMessage("이메일 형식이 아닙니다");
    } else {
      setEmailErrorMessage("");
    }
  };
  // 비밀번호 검증
  const validatePassword = (password, passwordCheck) => {
    //8자이상 16자이하 의 숫자, 문자, 특수문자 조합
    //동일한 비밀번호 입력

    const regPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]/;

    if (password !== passwordCheck) {
      setPassCheckErrorMessage("동일한 비밀번호를 입력해주세요");
    }
    const min = 8;
    const max = 16;
    if (password.length > min || password.length < max) {
      setPassErrorMessage("8~16자 입력해주세요");
    }
    if (regPassword.test(password)) {
      setPassErrorMessage(
        "영문,특수문자(1개이상),숫자(1개이상) 조합하여 입력해주세요"
      );
    } else {
      setPassErrorMessage("");
    }
  };
  //닉네임 검증
  const validateNickname = (nickname) => {
    //닉네임은 자릿수 제한만 두기로 한다.
    //닉네임 중복 체크
    const max = 8;
    const min = 2;
    console.log("validate", String(nickname).length);

    if (nickname.length < min || nickname.length > max) {
      console.log("2이상 8이하");
      setNickCheckErrorMessage("닉네임은 2~8 자 입력해주세요");
    } else {
      setNickCheckErrorMessage("");
      //2->1 로갈때 가 문제
      //9->7까지 문제
      //1->0 일때 문제 x
      console.log("1이하, 9이상");
    }
  };
  //닉네임 중복체크를 해야한다.
  const handleNicknameCheck = () => {
    validateNickname(nickname);
    //버튼을 눌럿을시 내가 입력한 handlenick과
    //db에 있는 nick과 일치하는지 확인
    if (nickname) {
      // validateNickname(nickname);
      axios
        .post(
          "http://localhost:8080/auth/nickcheck",
          {
            nickname: nickname,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (nickname !== res.data.data && validateNickname(nickname)) {
            setNickCheckErrorMessage("사용 가능한 닉네임 입니다.");
          } else {
          }
        })
        .catch(() => {
          setNickCheckErrorMessage("중복된 닉네임 입니다.");
        });
    }
  };
  //최종 회원가입을 눌렀을때
  const handleSignUpRequest = async () => {
    console.log("클릭했어");
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password, passwordCheck);
    // const validNickname =validateNickname(nickname)

    //모든 유효성 검사 통과가 되었다면 회원가입 가능
    if (validEmail && validPassword) {
      axios
        .post(
          "http://localhost:8080/auth/signup",
          {
            email: email,
            password: password,
            nickname: nickname,
            want_vol: want_vol,
            want_region: want_region,
            age: age,
            sex: sex,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          setIsSignUp(true);
          history.push("/SignIn");
        })
        .catch((err) => {
          console.log(err);
          setIsSignUp(false);
          setEmailErrorMessage("이메일 중복됩니다.");
        });
    }
  };

  return (
    <>
      <Header3 />
      <Wrapper>
        <MainContainer>
          <LogoBox>
            <Logo src="./image/logo2.png"></Logo>
          </LogoBox>

          <SignUpWhiteBox>
            <SignUpWhiteInput
              onChange={handleEmail}
              placeholder="아이디(이메일)"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              onChange={handleNickname}
              placeholder="닉네임"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <CheckingPossibleOrNotBox>
            <PossibleOrNot>{nickCheckErrorMessage}</PossibleOrNot>
            <CheckingPossibleOrNotButton onClick={handleNicknameCheck}>
              중복 확인
            </CheckingPossibleOrNotButton>
          </CheckingPossibleOrNotBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              onChange={handlePassword}
              placeholder="비밀번호"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              onChange={handlePasswordCheck}
              placeholder="비밀번호 확인"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              onChange={handleWantReigon}
              placeholder="희망 봉사 지역"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SignUpWhiteBox>
            <SignUpWhiteInput
              onChange={handleWantVol}
              placeholder="희망 봉사 활동"
            ></SignUpWhiteInput>
          </SignUpWhiteBox>
          <SelectSexBox>
            <SelectSexButton value={sex} onClick={handleMan}>
              <SexImageBox src="./image/young-man.png"></SexImageBox>
            </SelectSexButton>

            <SelectSexButton defaultValue="여자" onClick={handleWoman}>
              <SexImageBox src="./image/young-woman.png"></SexImageBox>
            </SelectSexButton>
          </SelectSexBox>

          <SelectBox>
            <AgeButton onClick={handleTeen} ref={teenInput}>
              청소년
            </AgeButton>
            <AgeButton onClick={handleAdult} ref={adultInput}>
              청년
            </AgeButton>
            <AgeButton onClick={handleSenior} ref={seniorInput}>
              장년
            </AgeButton>
          </SelectBox>

          <CompleteBox>
            <CompleteButton onClick={handleSignUpRequest}>
              회원가입
            </CompleteButton>
          </CompleteBox>
        </MainContainer>
      </Wrapper>
    </>
  );
}
