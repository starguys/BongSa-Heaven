import React from "react";
import { Link } from "react-router-dom";

export default function DevHeader() {
  return (
    <>
      <div className="DevHeader_box">
        <div className="DevHeader_box_btn">
          <Link to="/">Main</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/RecruiterSignUp">RecruiterSignUp</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/SignUp">SignUp</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/SignIn">SignIn</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/UserSignUp">UserSignUp</Link>
        </div>
      </div>
      <div className="DevHeader_box">
        <div className="DevHeader_box_btn">
          <Link to="/MaillWrite">MaillWrite</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/MaillWriteCheck">MaillWriteCheck</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/RecruiterDelete">RecruiterDelete</Link>
        </div>
      </div>
      <div className="DevHeader_box">
        <div className="DevHeader_box_btn">
          <Link to="/RecruiterEdit">RecruiterEdit</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/RecruiterPasswordCheck">RecruiterPasswordCheck</Link>
        </div>
      </div>
      <div className="DevHeader_box">
        <div className="DevHeader_box_btn">
          <Link to="/SeeRecruiter">SeeRecruiter</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/SeeUser">SeeUser</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/UserDelete">UserDelete</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/UserEdit">UserEdit</Link>
        </div>
      </div>
      <div className="DevHeader_box">
        <div className="DevHeader_box_btn">
          <Link to="/UserEditPasswordCheck">UserEditPasswordCheck</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/UserMaill">UserMaill</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/UserMyPage">UserMyPage</Link>
        </div>
      </div>
      <div className="DevHeader_box">
        <div className="DevHeader_box_btn">
          <Link to="/FreeBoardContents">FreeBoardContents</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/FreeBoardCreate">FreeBoardCreate</Link>
        </div>
      </div>
      <div className="DevHeader_box">
        <div className="DevHeader_box_btn">
          <Link to="/FreeBoardDelete">FreeBoardDelete</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/FreeBoardEdit">FreeBoardEdit</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/FreeBoardList">FreeBoardList</Link>
        </div>
      </div>
      <div className="DevHeader_box">
        <div className="DevHeader_box_btn">
          <Link to="/CrewBoardContents">CrewBoardContents</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/CrewBoardCreate">CrewBoardCreate</Link>
        </div>
      </div>
      <div className="DevHeader_box">
        <div className="DevHeader_box_btn">
          <Link to="/CrewBoardDelete">CrewBoardDelete</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/CrewBoardEdit">CrewBoardEdit</Link>
        </div>
        <div className="DevHeader_box_btn">
          <Link to="/CrewBoardList">CrewBoardList</Link>
        </div>
      </div>
      <div className="DevHeader_box_btn">
        <Link to="/RecruiterMyPage">RecruiterMyPage</Link>
      </div>
      <div className="DevHeader_box_btn">
        <Link to="/RecruiterMaill">RecruiterMaill</Link>
      </div>
    </>
  );
}
