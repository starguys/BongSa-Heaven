import {useHistory} from "react-router";
import styled from "styled-components";
import axios from "axios";
import {useState, useEffect} from "react";
import Pagination from "../../components/common/Pagination";
import FreeBoardList from "./FreeBoardList";

const MainFreeBoardContianer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 37.5rem) {
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FreeBoardTitleContainer = styled.div`
  margin-top: 47px;
  margin-left: 18px;
  width: 100%;
  height: 24px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  letter-spacing: -0.495238px;
`;

const FreeBoardTittle = styled.span`
  cursor: pointer;
`;

export default function FreeBoard({GoToFreeBoardContent}: any) {
  const history = useHistory();

  const GoFreeBoradList = () => {
    history.push("/FreeBoardList");
  };

  const [freeBoardinfo, setFreeBoardinfo] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = freeBoardinfo.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);
  console.log(freeBoardinfo);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const getFreeBoardList = () => {
    axios
      .get("http://localhost:8080/board/fblist")
      .then(res => {
        // setFreeBoardinfo(res.data.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getFreeBoardList();
  }, []);

  return (
    <>
      <MainFreeBoardContianer>
        <FreeBoardTitleContainer>
          <FreeBoardTittle onClick={GoFreeBoradList}>
            자유게시판
          </FreeBoardTittle>
        </FreeBoardTitleContainer>
        {currentPosts &&
          currentPosts.length > 0 &&
          currentPosts.map((board: any) =>
            board.user_id == null ? (
              <FreeBoardList
                key={board._id}
                freeboard_id={board._id}
                title={board.title}
                writer="회원탈퇴자"
                date={
                  board.createdAt.slice(0, 10) +
                  "  " +
                  board.createdAt.slice(11, 19)
                }
                GoToFreeBoardContent={GoToFreeBoardContent}
              />
            ) : (
              <FreeBoardList
                key={board._id}
                freeboard_id={board._id}
                title={board.title}
                writer={board.user_id.nickname}
                date={
                  board.createdAt.slice(0, 10) +
                  "  " +
                  board.createdAt.slice(11, 19)
                }
                GoToFreeBoardContent={GoToFreeBoardContent}
              />
            ),
          )}
        <Pagination
          postPerPage={postPerPage}
          totalPosts={freeBoardinfo.length}
          paginate={paginate}
        />
      </MainFreeBoardContianer>
    </>
  );
}
