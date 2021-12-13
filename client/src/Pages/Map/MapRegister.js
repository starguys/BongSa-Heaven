import React, { useEffect, useState } from "react";
import Header2 from "../../components/common/Header2";
import MapReg from "../../components/Map/MapReg";
import axios from "axios";

export default function MapRegister() {
  const [userInfo, setUserInfo] = useState({
    wnat_region: "",
    want_vol: "",
    company: "",
  });

  //getUserInfHandler =>company 정보를 가져와서 마커에 찍을수 있게한다.
  //data를 가져왔따 mmarker등록시 들어가도록 한다.
  //마커에는 위치 내가찍은 위치도 들어가야한다.
  //위치 찍는ㄴ법
  const getCompanyInfoHandler = () => {
    axios
      .get("http://localhost:8080/user/info", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUserInfo({
          want_region: res.data.want_region,
          want_vol: res.data.want_vol,
          company: res.data.company,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header2 componentName={"지도"} />

      <MapReg />
    </>
  );
}
