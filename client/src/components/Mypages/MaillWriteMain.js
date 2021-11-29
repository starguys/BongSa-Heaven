import React from "react";
import styled from "styled-components";

export default function MaillWriteMain() {
  const MaillNickCheckContainer = styled.div`
    margin-left: 39px;
    margin-top: 10px;
    width: 332px;
    height: 42px;
  `;
  const MaillNickCheckTop = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
  `;
  const MaillNickCheckTopWho = styled.div`
    width: 60px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #000000;
  `;
  const MaillNickCheckTopNameInput = styled.div`
    width: 160px;
    height: 22px;
    background: #ffffff;
    box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
  `;
  const MaillNickCheckTopNameCheckBtn = styled.button`
    margin-left: 14px;
    width: 90px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: #000000;
    border: 0;
  `;

  const MaillNickCheckBottom = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
  `;
  const MaillNickCheckBottomText = styled.div`
    margin-left: 60px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  `;
  const MaillWriteInput = styled.input`
    margin-top: 12px;
    margin-left: 36px;
    background: #ffffff;
    box-shadow: 0px 2px 11px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    width: 317px;
    height: 196px;
    border: 0;
  `;
  return (
    <>
      <MaillNickCheckContainer>
        <MaillNickCheckTop>
          <MaillNickCheckTopWho>받는 사람</MaillNickCheckTopWho>
          <MaillNickCheckTopNameInput type="text" />
          <MaillNickCheckTopNameCheckBtn>
            닉네임 확인
          </MaillNickCheckTopNameCheckBtn>
        </MaillNickCheckTop>
        <MaillNickCheckBottom>
          <MaillNickCheckBottomText>
            닉네임이 확인 되었습니다.
          </MaillNickCheckBottomText>
        </MaillNickCheckBottom>
      </MaillNickCheckContainer>

      <MaillWriteInput type="text" />
    </>
  );
}
