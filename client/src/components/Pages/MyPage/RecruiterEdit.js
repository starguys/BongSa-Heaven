import React from "react";
import styled from "styled-components";
import MyPageHeader from "./MyPageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import { faFemale } from "@fortawesome/free-solid-svg-icons";

export default function RecruiterEdit() {
  const EamillTextContainer = styled.div`
    margin-top: 15%;
    margin-left: 8%;

    display: flex;
    align-items: center;
  `;

  const NickanameInputContainer = styled.div`
    margin-top: 5%;
    margin-left: 8%;
    height: 5%;
  `;
  const NicknameInput = styled.input`
    width: 92%;
    height: 100%;
  `;

  const NicknameCheckContainer = styled.div`
    margin-top: 5%;
    margin-left: 8%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const NickNameCheckTextTrue = styled.div``;
  const NickNameCheckTextFalse = styled.div``;
  const NickMameCheckBtn = styled.button`
    margin-right: 5%;
    height: 80%;
    width: 20%;
  `;

  const Password1InputContainer = styled.div`
    margin-top: 5%;
    margin-left: 8%;
    height: 5%;
  `;
  const Password1Input = styled.input`
    width: 92%;
    height: 100%;
  `;

  const Password2InputContainer = styled.div`
    margin-top: 5%;
    margin-left: 8%;
    height: 5%;
  `;
  const Password2Input = styled.input`
    width: 92%;
    height: 100%;
  `;

  const RegionInputContainer = styled.div`
    margin-top: 5%;
    margin-left: 8%;
    height: 5%;
  `;
  const RegionInput = styled.input`
    width: 92%;
    height: 100%;
  `;

  const TypeInputContainer = styled.div`
    margin-top: 5%;
    margin-left: 8%;
    height: 5%;
  `;
  const TypeInput = styled.input`
    width: 92%;
    height: 100%;
  `;

  const SexContainer = styled.div`
    margin-top: 5%;

    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const SexIconCircle = styled.div`
    margin: 7%;
    background-color: yellow;
    border-radius: 100px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const AgeContainer = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const AgeYongInput = styled.input`
    width: 25%;
    height: 55%;
    border: 0;
  `;
  const AgeAdultInput = styled.input`
    width: 25%;
    height: 55%;
    border: 0;
  `;
  const AgeOldInput = styled.input`
    width: 25%;
    height: 55%;
    border: 0;
  `;

  const EditBtnContainer = styled.div`
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const EditBtn = styled.button`
    border: 0;
    height: 70%;
    width: 75%;
  `;

  const DeleteBtnContainer = styled.div`
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const DeleteBtn = styled.button`
    border: 0;
    background-color: rgb(255, 0, 0, 0.6);
    color: white;
    height: 70%;
    width: 75%;
  `;
  return (
    <>
      <MyPageHeader componentName={"회원정보 수정하기"} />
      <EamillTextContainer>kimcoding@codestate.com</EamillTextContainer>
      <NickanameInputContainer>
        <NicknameInput type="text" placeholder="닉네임" />
      </NickanameInputContainer>
      <NicknameCheckContainer>
        <NickNameCheckTextTrue>사용 가능합니다</NickNameCheckTextTrue>
        {/* <NickNameCheckTextFalse>중복됩니다</NickNameCheckTextFalse> */}
        <NickMameCheckBtn>중복확인</NickMameCheckBtn>
      </NicknameCheckContainer>
      <Password1InputContainer>
        <Password1Input type="password" placeholder="비밀번호" />
      </Password1InputContainer>
      <Password2InputContainer>
        <Password2Input type="password" placeholder="비밀번호 확인" />
      </Password2InputContainer>
      <RegionInputContainer>
        <RegionInput type="text" placeholder="봉사활동 지역" />
      </RegionInputContainer>
      <TypeInputContainer>
        <TypeInput type="text" placeholder="봉사활동" />
      </TypeInputContainer>
      <TypeInputContainer>
        <TypeInput type="text" placeholder="기관명/봉사모집단체이름" />
      </TypeInputContainer>

      <EditBtnContainer>
        <EditBtn>수정 완료</EditBtn>
      </EditBtnContainer>
      <DeleteBtnContainer>
        <DeleteBtn>회원탈퇴</DeleteBtn>
      </DeleteBtnContainer>
    </>
  );
}
