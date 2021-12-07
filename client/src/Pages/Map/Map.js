/* global kakao */
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Header2 from "../../components/common/Header2";
export default function KakaoMap() {
  const [userInfo, setUserInfo] = {
    wnat_region: "",
    want_volL: "",
    company: "",
  };
  const [isMarkClick, setIsMarkClick] = useState(false);
  const [post, setPost] = useState([]);
  const history = useHistory();

  //getUserInfHandler =>company 정보를 가져와서 마커에 찍을수 있게한다.
  //마커에는 위치 내가찍은 위치도 들어가야한다.
  // const getCompanyInfoHandler =() => {
  // Axios.get('http://localhost:8080/user/info',{headers:{
  //   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  //   'Content-Type':'application/json'
  // }
  // })
  // .then(res =>{
  //   setUserInfo({want_region})
  // })
  // }

  const getLocationHandler = () => {};

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(
        37.49683356605109,
        127.02567025989426
      ),
      level: 2,
    };

    let map = new window.kakao.maps.Map(container, options);
    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    let positions = [
      {
        title: "함께봉사",
        latlng: new kakao.maps.LatLng(37.49659049214025, 127.02474288398093),
        region: "영등포구",
        vol_type: "노인돌봄",
        company_name: "봉사1515",
      },
      {
        title: "지존봉사",
        latlng: new kakao.maps.LatLng(37.49594654435023, 127.02340828615611),
        region: "용산구",
        vol_type: "길거리청소",
        company_name: "드래곤마운틴",
      },
      {
        title: "호수시인",
        latlng: new kakao.maps.LatLng(37.49748253337715, 127.02452831523259),
        region: "전국",
        vol_type: "바른언어길잡이",
        company_name: "언어폭력단",
      },
      {
        title: "함께봉사",
        latlng: new kakao.maps.LatLng(37.49748253337715, 127.02340828615611),
        region: "영등포구",
        vol_type: "노인돌봄",
        company_name: "봉사1515",
      },
    ];

    for (let i = 1; i < positions.length; i++) {
      let imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      let marker = new kakao.maps.Marker({
        position: positions[i].latlng,
        title: positions[i].title,
        image: markerImage,
        clickable: true,
      });
      marker.setMap(map);

      let content = `
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #fff; border: 1px solid #e0dde1; border-radius: 0.313rem; width: 100%;  padding: 10px; margin-bottom: 200px; cursor: pointer;" >
      <span style="font-family: Gmarket Sans TTF; color: #2d2d2d; font-weight: 300; font-size: 1rem; margin-bottom: 5px;">${positions[i].title}</span>
      <span style="font-family: Gmarket Sans TTF; color: #2d2d2d; font-weight: 100; font-size: 0.9rem;margin-bottom: 4px;">봉사활동 : ${positions[i].region}</span>
      <span style="font-family: Gmarket Sans TTF; color: #2d2d2d; font-weight: 100; font-size: 0.9rem;margin-bottom: 4px;">봉사활동 : ${positions[i].vol_type}</span>
      <span style="font-family: Gmarket Sans TTF; color: #2d2d2d; font-weight: 100; font-size: 0.9rem;">기관명 : ${positions[i].company_name}</span>
      <a href=http://localhost:3000/maillwrite>
        <button style="margin-top:5%; border:solid 1px black; background-color:white;" href=http://localhost:3000/maillwrite>쪽지 보내기</button>
        </a>
        </div>
        `;

      let customOverlay = new window.kakao.maps.CustomOverlay({
        position: marker.getPosition(),
        content: content,
        map: map,
        clickable: true,
      });
      customOverlay.setMap(map);

      // kakao.maps.event.addListener(marker, "click", function () {
      //   console.log("hi");
      //   console.log(post);
      //   console.log(...positions);
      // });
    }

    /* 
    let marker = new kakao.maps.Marker({
      positions: map.getCenter(),
      clickable: true,
    });
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
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });*/
  }, []);

  const KakaoMapContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 80%;
  `;

  const MapKakao = styled.div`
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
