/* global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
export default function Map() {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(
        37.49654994092021,
        127.02477114170603
      ),
      level: 2,
    };

    let map = new window.kakao.maps.Map(container, options);
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      console.log("hi", "위도", latlng.getLat(), "경도", latlng.getLng());

      //   var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
      //   message += "경도는 " + latlng.getLng() + " 입니다";

      //   var resultDiv = document.getElementById("clickLatlng");
      //   resultDiv.innerHTML = message;
    });
  }, []);

  const KakaoMapContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 80%;
  `;

  const KakaoMap = styled.div`
    width: 100%;
    height: 100%;
  `;
  return (
    <>
      <Header2 componentName={"지도"} />
      <KakaoMapContainer>
        <KakaoMap id="map"></KakaoMap>
      </KakaoMapContainer>
    </>
  );
}
