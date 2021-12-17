import React from "react";
import axios from "axios";

export default function DevBtn() {
  const TestRefresh = () => {
    console.log("hi");
    axios
      .get(`${process.env.REACT_APP_API_URI}/auth/refreshtoken`, {
        withCredentials: true,
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.accessToken);
      });
  };
  const ServerTest = () => {
    console.log("tester");
    axios
      .get(
        "http://ec2-52-78-173-210.ap-northeast-2.compute.amazonaws.com:8080/auth/test",
      )
      .then(res => console.log(res));
  };
  return (
    <>
      <div className="DevBtn_btn">
        <button onClick={TestRefresh}>리프레쉬토큰</button>
        <button onClick={ServerTest}>테스트2</button>
      </div>
    </>
  );
}
