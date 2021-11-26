import React from "react";
import MyPageHeader from "./MyPageHeader";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function SeeRecruiter() {
  const TopSpace = styled.div`
    width: 100%;
    height: 15%;
  `;

  const SeeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 5%;
  `;

  const SeeContainerBox = styled.div`
    background-color: rgb(122, 122, 122, 04);
    width: 90%;
    height: 200px;
  `;

  const SeeContainerBoxTop = styled.div`
    background-color: white;
    width: 94%;
    height: 30%;
    margin-left: 3%;
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
  `;

  const SeeContainerBoxTopUser = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
  `;
  const SeeContainerBoxTopSend = styled.div`
    width: 45%;
    padding-left: 1%;
    display: flex;
    align-items: center;
  `;

  const SeeContainerBoxTopSendBtn = styled.button`
    border: 0;
    background-color: rgb(0, 0, 0, 0.4);
    margin: 5%;
  `;

  const SeeContainerBoxBottom = styled.div`
    background-color: white;
    width: 94%;
    height: 40%;
    margin-left: 3%;
    margin-top: 5%;
  `;

  const SeeContainerBoxBottomColumn = styled.div`
    width: 100%;
    height: 25%;

    display: flex;
  `;
  const SeeContainerBoxBottomColumnLeft = styled.div`
    background-color: rgb(0, 0, 0, 0.2);
    width: 50%;
    border-bottom: solid 1px rgb(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
  `;
  const SeeContainerBoxBottomColumnRight = styled.div`
    width: 50%;
    border-bottom: solid 1px rgb(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  `;

  return (
    <>
      <MyPageHeader componentName={"봉사 희망자 보기"} />
      <TopSpace></TopSpace>
      <SeeContainer>
        <SeeContainerBox>
          <SeeContainerBoxTop>
            <SeeContainerBoxTopUser>매화시인님</SeeContainerBoxTopUser>
            <SeeContainerBoxTopSend>
              <FontAwesomeIcon icon={faPaperPlane} />
              <SeeContainerBoxTopSendBtn>쪽지 보내기</SeeContainerBoxTopSendBtn>
            </SeeContainerBoxTopSend>
          </SeeContainerBoxTop>
          <SeeContainerBoxBottom>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                희망 봉사 지역
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                서울
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                희망 봉사 종류
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                유기견/유기묘
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                성별
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                남성
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                나이대
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                장년
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
          </SeeContainerBoxBottom>
        </SeeContainerBox>
      </SeeContainer>
      <SeeContainer>
        <SeeContainerBox>
          <SeeContainerBoxTop>
            <SeeContainerBoxTopUser>매화시인님</SeeContainerBoxTopUser>
            <SeeContainerBoxTopSend>
              <FontAwesomeIcon icon={faPaperPlane} />
              <SeeContainerBoxTopSendBtn>쪽지 보내기</SeeContainerBoxTopSendBtn>
            </SeeContainerBoxTopSend>
          </SeeContainerBoxTop>
          <SeeContainerBoxBottom>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                희망 봉사 지역
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                서울
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                희망 봉사 종류
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                유기견/유기묘
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                성별
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                남성
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                나이대
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                장년
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
          </SeeContainerBoxBottom>
        </SeeContainerBox>
      </SeeContainer>
      <SeeContainer>
        <SeeContainerBox>
          <SeeContainerBoxTop>
            <SeeContainerBoxTopUser>매화시인님</SeeContainerBoxTopUser>
            <SeeContainerBoxTopSend>
              <FontAwesomeIcon icon={faPaperPlane} />
              <SeeContainerBoxTopSendBtn>쪽지 보내기</SeeContainerBoxTopSendBtn>
            </SeeContainerBoxTopSend>
          </SeeContainerBoxTop>
          <SeeContainerBoxBottom>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                희망 봉사 지역
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                서울
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                희망 봉사 종류
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                유기견/유기묘
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                성별
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                남성
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                나이대
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                장년
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
          </SeeContainerBoxBottom>
        </SeeContainerBox>
      </SeeContainer>
      <SeeContainer>
        <SeeContainerBox>
          <SeeContainerBoxTop>
            <SeeContainerBoxTopUser>매화시인님</SeeContainerBoxTopUser>
            <SeeContainerBoxTopSend>
              <FontAwesomeIcon icon={faPaperPlane} />
              <SeeContainerBoxTopSendBtn>쪽지 보내기</SeeContainerBoxTopSendBtn>
            </SeeContainerBoxTopSend>
          </SeeContainerBoxTop>
          <SeeContainerBoxBottom>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                희망 봉사 지역
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                서울
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                희망 봉사 종류
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                유기견/유기묘
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                성별
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                남성
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
            <SeeContainerBoxBottomColumn>
              <SeeContainerBoxBottomColumnLeft>
                나이대
              </SeeContainerBoxBottomColumnLeft>
              <SeeContainerBoxBottomColumnRight>
                장년
              </SeeContainerBoxBottomColumnRight>
            </SeeContainerBoxBottomColumn>
          </SeeContainerBoxBottom>
        </SeeContainerBox>
      </SeeContainer>
    </>
  );
}
