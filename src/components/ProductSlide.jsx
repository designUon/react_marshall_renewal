import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../css/product.css";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper";


// Swiper modules
SwiperCore.use([Navigation, Pagination]);



export default function ProductSlide() {

    const [swiper2Id, setSwiper2Id] = useState('swiper2');

    return (
        <>
            <Swiper
                // style={{marginTop:"-80vh"}}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                // pagination={true}
                // modules={[EffectCoverflow, Pagination]}
                modules={[EffectCoverflow]}
                className="mySwiper"
                id={swiper2Id}
                initialSlide={2} // 세 번째 슬라이드를 초기에 보여줍니다.
            >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </>
    );
}
