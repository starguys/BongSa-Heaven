import React from "react";
import MyPageHeader from "./MyPageHeader";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function UserMyPage() {
  const RecruiterPageContainer = styled.div`
    background-color: rgb(0, 0, 0, 0.2);
    height: 63%;
    display: flex;
    flex-direction: column;
  `;

  const RecruiterPageWeleComeBox = styled.div`
    background-color: white;
    margin-top: 8%;
    margin-left: 3%;
    width: 94%;
    height: 25%;
    display: flex;
  `;

  const RecruiterPageWeleComeBoxName = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const RecruiterPageWeleComeBoxMaill = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `;

  const RecruiterPageWeleComeBoxMaillIcon = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `;
  const RecruiterPageWeleComeBoxMaillText = styled.div`
    margin-top: 2%;
    display: flex;
    justify-content: center;
  `;

  const SeeUserBtn = styled.button`
    border: solid 1px black;
    margin-top: 8%;
    margin-left: 3%;
    width: 94%;
    height: 10%;
  `;

  const RecruiterEditBtn = styled.button`
    border: solid 1px black;
    margin-top: 5%;
    margin-left: 3%;
    width: 94%;
    height: 10%;
  `;

  return (
    <>
      <MyPageHeader componentName={"마이페이지"} />
      <RecruiterPageContainer>
        <RecruiterPageWeleComeBox>
          <RecruiterPageWeleComeBoxName>
            봉사종결단님 어서오세요.
          </RecruiterPageWeleComeBoxName>
          <RecruiterPageWeleComeBoxMaill>
            <RecruiterPageWeleComeBoxMaillIcon>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="MyPage_Maill_Icon"
              />
            </RecruiterPageWeleComeBoxMaillIcon>
            <RecruiterPageWeleComeBoxMaillText>
              쪽지함
            </RecruiterPageWeleComeBoxMaillText>
          </RecruiterPageWeleComeBoxMaill>
        </RecruiterPageWeleComeBox>
        <SeeUserBtn>봉사자 보기</SeeUserBtn>
        <RecruiterEditBtn>회원정보 수정하기</RecruiterEditBtn>
      </RecruiterPageContainer>
    </>
  );
}
