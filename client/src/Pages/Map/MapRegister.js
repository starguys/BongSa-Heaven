import React from "react";
import Header2 from "../../components/common/Header2";
import MapReg from "../../components/Map/MapReg";

export default function MapRegister() {
  //getUserInfHandler =>company 정보를 가져와서 마커에 찍을수 있게한다.
  //data를 가져왔따 mmarker등록시 들어가도록 한다.
  //마커에는 위치 내가찍은 위치도 들어가야한다.
  //위치 찍는ㄴ법

  return (
    <>
      <Header2 componentName={"지도"} />

      <MapReg />
    </>
  );
}
