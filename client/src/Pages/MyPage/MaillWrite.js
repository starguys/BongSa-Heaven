import React, { useEffect } from "react";
import Header2 from "../../components/common/Header2";
import MaillWriteTop from "../../components/Mypages/MaillWriteTop";
import MaillWriteMain from "../../components/Mypages/MaillWriteMain";
import MaillWriteBottom from "../../components/Mypages/MaillWriteBottom";
import { useHistory, useLocation } from "react-router-dom";

export default function UserMaill() {
  return (
    <>
      <Header2 componentName={"쪽지"} />
      <MaillWriteTop />
      <MaillWriteMain />
      <MaillWriteBottom />
    </>
  );
}
