import styled from "styled-components";

const FreeBoardListdiv = styled.div`
  border-bottom: solid 1px #f2f2f2;
  margin-top: 26px;
  margin-left: 17px;
  width: 332px;
  height: 50.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FreeBoardListTitle = styled.div`
  margin-bottom: 9px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
const FreeBoardListTitleBottom = styled.div`
  margin-bottom: 13.5px;
  display: flex;
`;
const FreeBoardListTitleBottomUser = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
`;
const FreeBoardListTitleBottomDate = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
`;
export default function FreeBoardList(
  freeboard_id: any,
  title: any,
  writer: any,
  date: any,
  GoToFreeBoardContent: any,
) {
  return (
    <>
      <FreeBoardListdiv onClick={() => GoToFreeBoardContent(freeboard_id)}>
        <FreeBoardListTitle>{title}</FreeBoardListTitle>
        <FreeBoardListTitleBottom>
          <FreeBoardListTitleBottomUser>{writer}</FreeBoardListTitleBottomUser>
          <FreeBoardListTitleBottomDate>{date}</FreeBoardListTitleBottomDate>
        </FreeBoardListTitleBottom>
      </FreeBoardListdiv>
    </>
  );
}
