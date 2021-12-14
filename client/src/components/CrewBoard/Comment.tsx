import styled from "styled-components";
import axios from "axios";
import {useState, useEffect} from "react";

const CommentList = styled.div`
  flex-direction: column;
  align-items: center;
  width: 80%;
  border-radius: 20px;
  background-color: white;
  padding: 10px 0px 15px 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  @media screen and (min-width: 37.5rem) {
    width: 1080px;
  }
`;
const CommentListBigBox = styled.div`
  display: flex;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-bottom: dashed gray 1px;
  padding: 20px 0px;

  @media screen and (min-width: 37.5rem) {
    padding: 30px 0px;
  }
`;
const CommentWriter = styled.span`
  margin-left: 25px;

  @media screen and (min-width: 37.5rem) {
    font-size: 24px;
  }
`;

const CommentDate = styled.span`
  margin-left: 30px;
  font-size: 14px;
  opacity: 0.5;

  @media screen and (min-width: 37.5rem) {
    font-size: 20px;
  }
`;

const CommentContents = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 25px;
  font-size: 12px;
  @media screen and (min-width: 37.5rem) {
    font-size: 16px;
    margin-top: 20px;
  }
`;

const EditCommentContents = styled.input`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 25px;
  font-size: 12px;
  @media screen and (min-width: 37.5rem) {
    font-size: 16px;
    margin-top: 20px;
  }
`;
const CommentListSmallBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border-bottom: dashed gray 1px;
  padding: 20px 0px;
`;
const CommentDeleteBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
`;
const CommentDeleteButton = styled.img`
  width: 15px;
  cursor: pointer;
  object-fit: cover;
  @media screen and (min-width: 37.5rem) {
    width: 24px;
  }
`;
const CommentEditBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 37.5rem) {
    flex-direction: row;
`;
const CommentEditButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;
  color: #ff7676;
  font-size: 12px;
  margin-top: 20px;
  @media screen and (min-width: 37.5rem) {
    font-size: 16px;
    margin-top: 20px;
  }
`;

const CommentEditButtonCheck = styled.div`
  cursor: pointer;
  background-color: #ff7676;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20px;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: 12px;
  font-size: 12px;

  @media screen and (min-width: 37.5rem) {
    width: 30%;
    height: 25px;
    margin-left: 30px;
    font-size: 20px;
    margin-top: 30px;
  }
`;
const CommentEditButtonCancel = styled.div`
  cursor: pointer;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 20px;
  border: solid black 1px;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: 12px;
  font-size: 12px;

@media screen and (min-width: 37.5rem) {
  width: 30%;
  height: 25px;
  margin-left: 25px;
  font-size: 20px;
  margin-top: 30px;
`;

const CommentInputBox = styled.div`
  margin-top: 8px;
  width: 80%;
  height: 100px;
  display: flex;
  margin: 30px 0px 60px 0px;

  @media screen and (min-width: 37.5rem) {
    width: 1080px;
    flex-direction: column;
    align-items: flex-end;
    height: 300px;
  }
`;
const CommentInput = styled.div`
  width: 70%;
  height: 90%;
  margin: 30px 0px 30px 0px;
  @media screen and (min-width: 37.5rem) {
    width: 100%;
    height: 180px;
  }
`;
const CommentInputContents = styled.input`
  width: 100%;
  height: 90%;
  display: flex;

  @media screen and (min-width: 37.5rem) {
    ::placeholder {
      font-size: 16px;
      box-sizing: border-box;
    }
  }
`;

const CommentInputButton = styled.div`
  cursor: pointer;
  background-color: #ff7676;
  color: #ffffff;
  line-height: 23px;
  width: 22%;
  height: 90%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 30px 0px 30px 20px;

  @media screen and (min-width: 37.5rem) {
    margin: 0px 0px 30px 20px;
    width: 15%;
    font-size: 20px;
    height: 120px;
    line-height: 120%;
  }
`;

export default function Comment({currentCBcontent, GoToCrewBoardContent}: any) {
  const [myId, setMyId] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [isEditMode, setEditMode] = useState(false);
  const [isEditCommentIdx, chosenEditCommentIdx] = useState(Number);

  const getUserInfo = () => {
    axios
      .get("http://localhost:8080/user/info", {
        headers: {
          authorization: `Bearer ` + localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        setMyId(res.data.data._id);
      })
      .catch(err => {
        console.log("응 안돼~", err);
      });
  };

  const makeComment = (e: any) => {
    setCommentValue(e.target.value);
    console.log(commentValue);
  };

  const saveComment = () => {
    if (commentValue.length > 0) {
      axios
        .post(
          "http://localhost:8080/comment/cbcommentregister",
          {
            crewboard_id: currentCBcontent.data._id,
            comment: commentValue,
          },
          {
            headers: {
              authorization: `Bearer ` + localStorage.getItem("accessToken"),
              "Content-Type": "application/json",
            },
          },
        )
        .then(res => {
          console.log(res.data.message);
          setCommentValue("");
          GoToCrewBoardContent(currentCBcontent.data._id);
        })
        .catch(err => console.log(err));
    }
  };

  const editComment = (idx: any) => {
    if (commentValue.length > 0) {
      axios
        .patch(
          "http://localhost:8080/comment/cbcommentedit",
          {
            crewboard_id: currentCBcontent.data._id,
            crewcomment_id: currentCBcontent.data.crewcomments[idx]._id,
            comment: commentValue,
          },
          {
            headers: {
              authorization: `Bearer ` + localStorage.getItem("accessToken"),
              "Content-Type": "application/json",
            },
          },
        )
        .then(res => {
          console.log(res.data.message);
          setEditMode(false);
          setCommentValue("");
          GoToCrewBoardContent(currentCBcontent.data._id);
        })
        .catch(err => console.log(err));
    }
  };
  const deleteComment = (idx: any) => {
    console.log(idx);
    axios
      .delete("http://localhost:8080/comment/cbcommentdelete", {
        data: {
          crewboard_id: currentCBcontent.data._id,
          crewcomment_id: currentCBcontent.data.crewcomments[idx]._id,
        },
        headers: {
          authorization: `Bearer ` + localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
      })
      .then(res => {
        console.log(res.data.message);
        setEditMode(false);
        GoToCrewBoardContent(currentCBcontent.data._id);
      })
      .catch(err => console.log(err));

    alert("댓글이 삭제되었습니다!");
  };
  console.log("currentCBcontent", currentCBcontent);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      getUserInfo();
    }
  }, []);

  return (
    <>
      <CommentList>
        {currentCBcontent.data === undefined
          ? null
          : currentCBcontent.data.crewcomments.map((comment: any, idx: any) => (
              <CommentListBigBox>
                <CommentBox key={idx}>
                  <CommentWriter>
                    {comment.user_id == null
                      ? "회원탈퇴자"
                      : comment.user_id.nickname}
                    <CommentDate>{comment.createdAt.slice(0, 10)}</CommentDate>
                  </CommentWriter>
                  {comment.user_id._id === myId &&
                  isEditMode &&
                  idx === isEditCommentIdx ? (
                    <EditCommentContents
                      onChange={makeComment}
                      defaultValue={comment.comment}
                    />
                  ) : (
                    <CommentContents>{comment.comment}</CommentContents>
                  )}
                </CommentBox>
                <CommentListSmallBox>
                  {comment.user_id._id !== myId ? null : isEditMode &&
                    idx === isEditCommentIdx ? (
                    <>
                      <CommentDeleteBox>
                        <CommentDeleteButton
                          src={"./image/delete-button.png"}
                          onClick={() => deleteComment(idx)}
                        />
                      </CommentDeleteBox>

                      <CommentEditBox>
                        <CommentEditButtonCheck
                          onClick={() => editComment(idx)}
                        >
                          수정
                        </CommentEditButtonCheck>
                        <CommentEditButtonCancel
                          onClick={() => {
                            setEditMode(false);
                          }}
                        >
                          취소
                        </CommentEditButtonCancel>
                      </CommentEditBox>
                    </>
                  ) : (
                    <CommentEditButton
                      onClick={() => {
                        setEditMode(true);
                      }}
                    >
                      수정
                    </CommentEditButton>
                  )}
                </CommentListSmallBox>
              </CommentListBigBox>
            ))}
      </CommentList>

      <CommentInputBox>
        <CommentInput>
          <CommentInputContents
            placeholder="내용을 입력하세요."
            onChange={makeComment}
            value={isEditMode ? "" : commentValue}
          ></CommentInputContents>
        </CommentInput>
        <CommentInputButton onClick={saveComment}>
          댓 글<br />달 기
        </CommentInputButton>
      </CommentInputBox>
    </>
  );
}
