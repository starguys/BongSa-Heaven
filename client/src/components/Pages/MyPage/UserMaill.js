import React from "react";
import MyPageHeader from "./MyPageHeader";
import styled from "styled-components";
export default function UserMaill() {
  const UserMaillContainer = styled.div`
    width: 100%;
  `;
  const UserMaillHeader = styled.div`
    border-bottom: solid 1px rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;
  const UserMaillHeaderText = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
  `;
  const UserMaillHeaderBtn = styled.button`
    border: 0;
    height: 55%;
    width: 25%;
    font-size: 12px;
  `;

  const UserMaillDeleteHeader = styled.div`
    border-bottom: solid 1px rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center;
  `;
  const UserMaillDeleteHeaderCheckBox = styled.input`
    margin-left: 4%;
    margin-right: 4%;
    height: 15px;
    width: 15px;
  `;
  const UserMaillDeleteHeaderBtn = styled.button`
    border: 0;
    height: 75%;
    width: 15%;
  `;

  const UserMaillMessage = styled.div`
    border-bottom: solid 1px rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
  `;
  const UserMaillMessageCheckBox = styled.input`
    margin-left: 4%;
    margin-right: 4%;
    height: 15px;
    width: 15px;
  `;
  const UserMaillMessageContents = styled.div`
    width: 75%;
    height: 100%;
  `;
  const UserMaillMessageContentsUser = styled.div`
    height: 25%;
    margin-bottom: 4%;
    display: flex;
    align-items: flex-end;
  `;
  const UserMaillMessageContentsText = styled.div`
    border: solid 1px black;
    width: 90;
    height: 50%;
    padding-top: 5px;
    padding-left: 5px;
  `;
  return (
    <>
      <MyPageHeader componentName={"쪽지"} />
      <UserMaillHeader>
        <UserMaillHeaderText></UserMaillHeaderText>
        <UserMaillHeaderText>받은 쪽지함</UserMaillHeaderText>
        <UserMaillHeaderBtn>쪽지쓰기</UserMaillHeaderBtn>
      </UserMaillHeader>
      <UserMaillDeleteHeader>
        <UserMaillDeleteHeaderCheckBox type="checkbox" />
        <UserMaillDeleteHeaderBtn>삭제</UserMaillDeleteHeaderBtn>
      </UserMaillDeleteHeader>
      <UserMaillMessage>
        <UserMaillMessageCheckBox type="checkbox" />
        <UserMaillMessageContents>
          <UserMaillMessageContentsUser>춘향이님</UserMaillMessageContentsUser>
          <UserMaillMessageContentsText>
            아버님 저랑 같이 신나는 유기견 봉사 어떠신 가요?
          </UserMaillMessageContentsText>
        </UserMaillMessageContents>
      </UserMaillMessage>
      <UserMaillMessage>
        <UserMaillMessageCheckBox type="checkbox" />
        <UserMaillMessageContents>
          <UserMaillMessageContentsUser>춘향이님</UserMaillMessageContentsUser>
          <UserMaillMessageContentsText>
            아버님 저랑 같이 신나는 유기견 봉사 어떠신 가요?
          </UserMaillMessageContentsText>
        </UserMaillMessageContents>
      </UserMaillMessage>
      <UserMaillMessage>
        <UserMaillMessageCheckBox type="checkbox" />
        <UserMaillMessageContents>
          <UserMaillMessageContentsUser>춘향이님</UserMaillMessageContentsUser>
          <UserMaillMessageContentsText>
            아버님 저랑 같이 신나는 유기견 봉사 어떠신 가요?
          </UserMaillMessageContentsText>
        </UserMaillMessageContents>
      </UserMaillMessage>
      <UserMaillMessage>
        <UserMaillMessageCheckBox type="checkbox" />
        <UserMaillMessageContents>
          <UserMaillMessageContentsUser>춘향이님</UserMaillMessageContentsUser>
          <UserMaillMessageContentsText>
            아버님 저랑 같이 신나는 유기견 봉사 어떠신 가요?
          </UserMaillMessageContentsText>
        </UserMaillMessageContents>
      </UserMaillMessage>
    </>
  );
}
