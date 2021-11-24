import React, { useState } from "react";
import { Route } from "react-router-dom";
import "../App.css";
import "../css/Reset.css";

import DevHeader from "./DevHeader";
import DevFooter from "./DevFooter";
import MainPage from "./Pages/Main/MainPage";

import RecruiterSignUp from "./Pages/Sign/RecruiterSignUp";
import SignUp from "./Pages/Sign/SignUp";
import SignIn from "./Pages/Sign/Sign";
import UserSignUp from "./Pages/Sign/UserSignUp";

import MaillWrite from "./Pages/MyPage/MaillWrite";
import MaillWriteCheck from "./Pages/MyPage/MaillWriteCheck";
import RecruiterDelete from "./Pages/MyPage/RecruiterDelete";
import RecruiterEdit from "./Pages/MyPage/RecruiterEdit";
import RecruiterMyPage from "./Pages/MyPage/RecruiterMyPage";
import RecruiterPasswordCheck from "./Pages/MyPage/RecruiterPasswordCheck";
import SeeRecruiter from "./Pages/MyPage/SeeRecruiter";
import UserDelete from "./Pages/MyPage/UserDelete";
import UserEdit from "./Pages/MyPage/UserEdit";
import UserEditPasswordCheck from "./Pages/MyPage/UserEditPasswordCheck";
import UserMaill from "./Pages/MyPage/UserMaill";
import UserMyPage from "./Pages/MyPage/UserMyPage";

import FreeBoardContents from "./Pages/FreeBoard/FreeBoardContents";
import FreeBoardCreate from "./Pages/FreeBoard/FreeBoardCreate";
import FreeBoardDelete from "./Pages/FreeBoard/FreeBoardDelete";
import FreeBoardEdit from "./Pages/FreeBoard/FreeBoardEdit";
import FreeBoardList from "./Pages/FreeBoard/FreeBoardList";

import CrewBoardContents from "./Pages/CrewBoard/CrewBoardContents";
import CrewBoardCreate from "./Pages/CrewBoard/CrewBoardCreate";
import CrewBoardDelete from "./Pages/CrewBoard/CrewBoardDelete";
import CrewBoardEdit from "./Pages/CrewBoard/CrewBoardEdit";
import CrewBoardList from "./Pages/CrewBoard/CrewBoardList";

export default function App() {
  const [isDevHeader, setIsDevHeader] = useState(false);

  const handleDevHeader = () => {
    setIsDevHeader(!isDevHeader);
  };

  return (
    <div>
      {isDevHeader ? <DevHeader /> : null}
      <Route exact path="/" component={MainPage} />
      {/* Sign */}
      <Route exact path="/RecruiterSignUp" component={RecruiterSignUp} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/UserSignUp" component={UserSignUp} />
      {/* MyPage */}
      <Route exact path="/MaillWrite" component={MaillWrite} />
      <Route exact path="/MaillWriteCheck" component={MaillWriteCheck} />
      <Route exact path="/RecruiterDelete" component={RecruiterDelete} />
      <Route exact path="/RecruiterEdit" component={RecruiterEdit} />
      <Route exact path="/RecruiterMyPage" component={RecruiterMyPage} />
      <Route
        exact
        path="/RecruiterPasswordCheck"
        component={RecruiterPasswordCheck}
      />
      <Route exact path="/SeeRecruiter" component={SeeRecruiter} />
      <Route exact path="/UserDelete" component={UserDelete} />
      <Route exact path="/UserEdit" component={UserEdit} />
      <Route
        exact
        path="/UserEditPasswordCheck"
        component={UserEditPasswordCheck}
      />
      <Route exact path="/UserMaill" component={UserMaill} />
      <Route exact path="/UserMyPage" component={UserMyPage} />
      {/* FreeBoard */}
      <Route exact path="/FreeBoardContents" component={FreeBoardContents} />
      <Route exact path="/FreeBoardCreate" component={FreeBoardCreate} />
      <Route exact path="/FreeBoardDelete" component={FreeBoardDelete} />
      <Route exact path="/FreeBoardEdit" component={FreeBoardEdit} />
      <Route exact path="/FreeBoardList" component={FreeBoardList} />
      {/* CrewBoard */}
      <Route exact path="/CrewBoardContents" component={CrewBoardContents} />
      <Route exact path="/CrewBoardCreate" component={CrewBoardCreate} />
      <Route exact path="/CrewBoardDelete" component={CrewBoardDelete} />
      <Route exact path="/CrewBoardEdit" component={CrewBoardEdit} />
      <Route exact path="/CrewBoardList" component={CrewBoardList} />
      ㅎㅇㅇ~
      <DevFooter handleDevHeader={handleDevHeader} isDevHeader={isDevHeader} />
    </div>
  );
}
