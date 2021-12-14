import {useState, useEffect} from "react";
import {useHistory} from "react-router";
import styled from "styled-components";
import axios from "axios";
import Loading from "../../components/common/Loading";

const MainCrewBoardContainer = styled.div`
  @media screen and (max-width: 37.5rem) {
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
  width: 133px;
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

const CrewBoardImageContainer = styled.div`
  margin-top: 21px;
  width: 100%;
  height: 138px;
  display: flex;
  justify-content: center;
`;

const CrewBoardMoreBtnContainer = styled.div`
  @media screen and (min-width: 37.5rem) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CrewBoardMoreBtn = styled.button`
  width: 340px;
  height: 55px;
  background: #f7f7f7;
  border-radius: 4px;
  margin: 31px 0px 0px 17px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  cursor: pointer;
  @media screen and (min-width: 37.5rem) {
    width: 100%;
    border: 0;
  }
`;
export default function BestCrew() {
  const [isLoading, CheckLoading] = useState(true);
  const [crewBoardinfo, setcrewBoardinfo] = useState<any[]>([]);
  const history = useHistory();

  const loadingHandler = () => {
    CheckLoading(false);
  };
  const GoCrewBoardList = () => {
    history.push("/CrewBoardList");
  };

  const rankArray = new Array();
  let rankArrayCopy = new Array();
  const getCrewBoardList = () => {
    axios
      .get("http://localhost:8080/board/cblist")
      .then(res => {
        setcrewBoardinfo(res.data.data);
        crewBoardinfo.forEach(board => rankArray.push(board.like_count));
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  };

  const GetTop10 = () => {
    rankArrayCopy = rankArray.slice();
    rankArrayCopy.sort((a, b) => b - a);
    console.log(crewBoardinfo);
    console.log(rankArray);
    console.log(rankArrayCopy);
  };

  useEffect(() => {
    getCrewBoardList();
    setTimeout(() => GetTop10(), 200);
    setTimeout(() => loadingHandler(), 1000);
  }, []);

  return (
    <>
      <MainCrewBoardContainer>
        <CrewBoardBestTitle>Best Top 10</CrewBoardBestTitle>
        <CrewBoardImageContainer>
          {/* {isLoading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              <CrewBoardImage
                src={
                  crewBoardinfo[rankArray.indexOf(rankArrayCopy[0])].images[0]
                }
              />
              <CrewBoardImage
                src={
                  crewBoardinfo[rankArray.indexOf(rankArrayCopy[1])].images[0]
                }
              />
              <CrewBoardImageMore
                src={
                  crewBoardinfo[rankArray.indexOf(rankArrayCopy[2])].images[0]
                }
              />
              <CrewBoardImageMore
                src={
                  crewBoardinfo[rankArray.indexOf(rankArrayCopy[3])].images[0]
                }
              />
              <CrewBoardImageMore
                src={
                  crewBoardinfo[rankArray.indexOf(rankArrayCopy[4])].images[0]
                }
              />
              <CrewBoardImageMore
                src={
                  crewBoardinfo[rankArray.indexOf(rankArrayCopy[5])].images[0]
                }
              />
            </>
          )} */}
        </CrewBoardImageContainer>
        <CrewBoardMoreBtnContainer>
          <CrewBoardMoreBtn onClick={GoCrewBoardList}>
            더 많은 봉사단 보기
          </CrewBoardMoreBtn>
        </CrewBoardMoreBtnContainer>
      </MainCrewBoardContainer>
    </>
  );
}
