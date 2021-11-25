import React from "react";
import MyPageHeader from "./MyPageHeader";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function UserMyPage() {
  const MyPageContainer = styled.div`
    background-color: rgb(0, 0, 0, 0.2);
    height: 63%;
    display: flex;
    flex-direction: column;
  `;

  const MyPageWeleComeBox = styled.div`
    background-color: white;
    margin-top: 8%;
    margin-left: 3%;
    width: 94%;
    height: 25%;
    display: flex;
  `;

  const MyPageWeleComeBoxName = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const MyPageWeleComeBoxMaill = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `;

  const MyPageWeleComeBoxMaillIcon = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `;
  const MyPageWeleComeBoxMaillText = styled.div`
    margin-top: 2%;
    display: flex;
    justify-content: center;
  `;

  const SeeRecruiterBtn = styled.button`
    border: solid 1px black;
    margin-top: 8%;
    margin-left: 3%;
    width: 94%;
    height: 10%;
  `;

  const UserEditBtn = styled.button`
    border: solid 1px black;
    margin-top: 5%;
    margin-left: 3%;
    width: 94%;
    height: 10%;
  `;

  const VolInfoHidden = styled.div`
    margin-top: 5%;
    margin-left: 3%;
    width: 94%;
    height: 7%;
    display: flex;

    justify-content: space-between;
  `;

  const VolInfoHiddenText = styled.div`
    display: flex;

    align-items: center;
  `;

  const VolInfoHiddenToggle = styled.div`
    border: solid 1px black;
    width: 25%;
    height: 100%;
    border-radius: 50px;
    display: flex;
    align-items: center;
  `;

  const VolInfoHiddenToggleBall = styled.div`
    background-color: blue;
    margin: 5%;
    width: 30%;
    height: 80%;
    border-radius: 100%;
    opacity: 0.6;
  `;

  return (
    <>
      <MyPageHeader componentName={"마이페이지"} />
      <MyPageContainer>
        <MyPageWeleComeBox>
          <MyPageWeleComeBoxName>
            로켓봉사단님 어서오세요.
          </MyPageWeleComeBoxName>
          <MyPageWeleComeBoxMaill>
            <MyPageWeleComeBoxMaillIcon>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="MyPage_Maill_Icon"
              />
            </MyPageWeleComeBoxMaillIcon>
            <MyPageWeleComeBoxMaillText>쪽지함</MyPageWeleComeBoxMaillText>
          </MyPageWeleComeBoxMaill>
        </MyPageWeleComeBox>
        <SeeRecruiterBtn>봉사모집자 보기</SeeRecruiterBtn>
        <UserEditBtn>회원정보 수정하기</UserEditBtn>
        <VolInfoHidden>
          <VolInfoHiddenText>봉사희망정보 숨기기</VolInfoHiddenText>
          <VolInfoHiddenToggle>
            <VolInfoHiddenToggleBall></VolInfoHiddenToggleBall>
          </VolInfoHiddenToggle>
        </VolInfoHidden>
      </MyPageContainer>
    </>
  );
}
