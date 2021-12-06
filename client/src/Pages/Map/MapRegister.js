import React, { useEffect, useState } from "react";
import Header2 from "../../components/common/Header2";
import MapReg from "../../components/Map/MapReg";
export default function MapRegister() {
  return (
    <>
      <Header2 componentName={"지도"} />
      <MapReg />
    </>
  );
}
