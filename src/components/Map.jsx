import React, { useEffect } from 'react';
const { kakao } = window;

export default function Map() {
    useEffect(() => {
        // HTML5 Geolocation API를 사용하여 현재 위치 정보 가져오기
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Kakao 지도 객체 생성하기
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(lat, lng), // 현재 위치
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);

            // 일렉트로마트 위치 가져오기
            const elctromartPosition = new window.kakao.maps.LatLng(37.5013586, 127.0396017);

            // 마커 추가하기
            const marker = new window.kakao.maps.Marker({
                position: elctromartPosition,
                map: map,
            });

            // 정보 창 추가하기
            const infowindow = new window.kakao.maps.InfoWindow({
                content: '<div style="padding:5px;">일렉트로마트</div>',
            });
            window.kakao.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    }, []);

    return <div id='map'/>;
}
