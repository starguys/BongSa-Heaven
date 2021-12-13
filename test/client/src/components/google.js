import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
// import kakaologo from "./kakaologo.png";
import google from "./google.png";
import "../App.css";
import Upload from "./uploading";
import KakaoKill from "./KakaoKill";
import KakaoTest from "./KakaoTest";

require("dotenv").config();
// import KakaoLogin from "./KakaoLogin"
const Google = () => {
  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=288722608551-n6ktb74p9fbe0871dikkoul506eedkgq.apps.googleusercontent.com&redirect_uri=http://localhost:3000/callback&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email`;
  const googleOauth = async () => {
    console.log(oAuthURL);
    window.location.assign(oAuthURL);
  };
  return (
    <div className="google">
      <button id="oAuthBtn" onClick={googleOauth}>
        {google}
        <div id="comment">구글 OAuth</div>
      </button>
      {/* <img onClick={googleOauth} src={google} alt="google" width="300"></img> */}
    </div>
  );
};
export default Google;
