import React from 'react'
import {Link} from 'react-router-dom'
import MainSlide from '../components/MainSlide'

import '../css/home.css'

export default function Home() {
    return (
        <div>
            {/* <VimeoPlayer/> */}
            {/* <div className="main_video"></div> */}
            <MainSlide/>

            <ul className='product_warp'>

                <Link to='/product'>
                    <li>
                        <div className="home_product_img home_speaker"><img src={`${process.env.PUBLIC_URL}/marshall-stanmore-iii-black.png`} alt="이미지" /></div>
                        <div className='home_product_title'>SPEAKER</div>
                    </li>
                </Link>

                <Link to='/product'>
                    <li>
                        <div className="home_product_img home_headphone"><img src={`${process.env.PUBLIC_URL}/plp-diamond-jubilee-monitor-ii-anc-v2.png`} alt="이미지" /></div>
                        <div className='home_product_title'>HEADPHONE</div>
                    </li>
                </Link>

                <Link to='/product'>
                    <li>
                        <div className="home_product_img home_earphone"><img src={`${process.env.PUBLIC_URL}/plp-diamond-jubilee-motif-anc-v2.png`} alt="이미지" /></div>
                        <div className='home_product_title'>EARPHONE</div>
                    </li>
                </Link>

                <Link to='/product'>
                    <li>
                        <div className="home_product_img home_accessory"><img src={`${process.env.PUBLIC_URL}/speaker-audio-cable-35mm-black.png`} alt="이미지" /></div>
                        <div className='home_product_title'>ACCESSORY</div>
                    </li>
                </Link>

                {/* <Link to='/product'><li><div>HEADPHONE</div></li></Link>
                <Link to='/product'><li><div>EARPHONE</div></li></Link>
                <Link to='/product'><li><div>ACCESSORY</div></li></Link> */}
            </ul>

        </div>
    )
}
