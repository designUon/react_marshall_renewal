import React, { useEffect } from 'react'

export default function MapTest() {

    const kakao = window.kakao;

    // 카카오자바스크립트에서 작성된 일은 실행되자마자
    // 출력되어야하기때문에 useEffect에 작성
    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            // center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            center: new kakao.maps.LatLng(35.1673832, 129.1151906), //지도의 중심좌표.
            level: 7 //지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


        const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 마커가 표시될 위치입니다 
        const markerPosition = new kakao.maps.LatLng(35.1763003, 129.0813069);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // -------------------------------------------------------------------------------

        const markerPosition2 = new kakao.maps.LatLng(35.1659953, 129.1677813);

        // 마커를 생성합니다
        const marker2 = new kakao.maps.Marker({
            position: markerPosition2
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker2.setMap(map);

        // -------------------------------------------------------------------------------

        const markerPosition3 = new kakao.maps.LatLng(35.2500438, 129.0907309);

        // 마커를 생성합니다
        const marker3 = new kakao.maps.Marker({
            position: markerPosition3
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker3.setMap(map);


        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);   

    }, [])

    return (
        <div>
            {/* <h3>지도</h3> */}
            {/* <div id="map" style="width:500px;height:400px;"></div> */}
            <div id="map" style={{ width: "1000px", height: "500px" }}></div>
        </div>
    )
}
