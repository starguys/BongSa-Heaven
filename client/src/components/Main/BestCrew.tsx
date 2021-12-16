import {useEffect} from "react";
import {useHistory} from "react-router";
import styled from "styled-components";

const MainCrewBoardContainer = styled.div`
  @media screen and (max-width: 37.5rem) {
    width: 100%;
  }
  @media screen and (min-width: 37.5rem) {
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
  }
`;

const CrewBoardBestTitle = styled.div`
  cursor: pointer;
  height: 24px;
  margin-top: 64px;
  margin-left: 18px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  letter-spacing: -0.495238px;
  color: #000000;
`;

const CrewBoardTop3Container = styled.div`
  margin-top: 21px;
  width: 100%;
  height: 138px;
  display: flex;
  justify-content: center;
  border: black solid 1px;
  @media screen and (min-width: 37.5rem) {
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    height: 250px;
  }
`;
const CrewBoardTop3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin: auto;

  }
`;
const CrewBoardTop3Image = styled.img`
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
`;

const CrewBoardMoreBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 37.5rem) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CrewBoardMoreBtn = styled.button`
  width: 100%;
  height: 55px;
  background: #f7f7f7;
  border-radius: 4px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;
  border: 0;
  @media screen and (min-width: 37.5rem) {
    width: 100%;
  }
`;
export default function BestCrew({
  crewBoardinfo,
  GoToCrewBoardContent,
  Top3crewBoardinfo,
}: any) {
  console.log("Top3crewBoardinfo", Top3crewBoardinfo);
  const history = useHistory();

  const GoCrewBoardList = () => {
    history.push("/CrewBoardList");
  };

  useEffect(() => {}, [crewBoardinfo]);
  return (
    <>
      <MainCrewBoardContainer>
        <CrewBoardBestTitle>Best Top 3 봉사단</CrewBoardBestTitle>
        <CrewBoardTop3Container>
          {Top3crewBoardinfo.length === 0 ? (
            <></>
          ) : (
            <>
              <CrewBoardTop3>
                <CrewBoardTop3Image
                  src={Top3crewBoardinfo[0].images}
                  onClick={() => GoToCrewBoardContent(Top3crewBoardinfo[0]._id)}
                />
                {Top3crewBoardinfo[0].title}
              </CrewBoardTop3>

              <CrewBoardTop3>
                <CrewBoardTop3Image
                  src={Top3crewBoardinfo[1].images}
                  onClick={() => GoToCrewBoardContent(Top3crewBoardinfo[1]._id)}
                />
                {Top3crewBoardinfo[1].title}
              </CrewBoardTop3>

              <CrewBoardTop3>
                <CrewBoardTop3Image
                  src={Top3crewBoardinfo[2].images}
                  onClick={() => GoToCrewBoardContent(Top3crewBoardinfo[2]._id)}
                />
                {Top3crewBoardinfo[2].title}
              </CrewBoardTop3>
            </>
          )}
        </CrewBoardTop3Container>
        <CrewBoardMoreBtnContainer>
          <CrewBoardMoreBtn onClick={GoCrewBoardList}>
            더 많은 봉사단 보기
          </CrewBoardMoreBtn>
        </CrewBoardMoreBtnContainer>
      </MainCrewBoardContainer>
    </>
  );
}
