import React from 'react'
import Map from '../components/Map'
import '../css/about.css'
import MapTest from '../components/MapTest'

export default function AboutStore() {
    return (
        <div className='store_wrap'>
            <p>주변 판매매장을 찾아보세요!</p>
            {/* <Map/> */}
            <MapTest />
            <div className="hand_img_R"><img src={`${process.env.PUBLIC_URL}/new-marshall-tufton-usp01-desktop@1.41x.png`} alt="이미지" /></div>
            <div className="hand_img_L"><img src={`${process.env.PUBLIC_URL}/marshall-tufton-usp07-mobile@5x.png`} alt="이미지" /></div>
        </div>
    )
}
