import React from 'react'
import '../css/about.css'

export default function StoryComp() {

    return (
        <div className='story_wrap'>

            <div className="story_box">
                <div className="story_text">
                    <h4>story title</h4>
                    <p>story text</p>
                </div>
                <div className='story_img'><img src={`${process.env.PUBLIC_URL}/stanmore-ii-black-hover.jpg`} alt="이미지" /></div>
            </div>
            
            <div className="story_box">
                <div className="story_text">
                    <h4>story title</h4>
                    <p>story text</p>
                </div>
                <div className='story_img'><img src={`${process.env.PUBLIC_URL}/slideshow-01.jpg`} alt="이미지" /></div>
            </div>

            <div className="story_box">
                <div className="story_text">
                    <h4>story title</h4>
                    <p>story text</p>
                </div>
                <div className='story_img'><img src={`${process.env.PUBLIC_URL}/fabcad3908b2fd0d11835974b5472376.jpg`} alt="이미지" /></div>
            </div>

            <div className="story_box">
                <div className="story_text">
                    <h4>story title</h4>
                    <p>story text</p>
                </div>
                <div className='story_img'><img src={`${process.env.PUBLIC_URL}/kilburn-ii-black-hover.png`} alt="이미지" /></div>
            </div>

            <div className="story_box">
                <div className="story_text">
                    <h4>story title</h4>
                    <p>story text</p>
                </div>
                <div className='story_img'><img src={`${process.env.PUBLIC_URL}/Untitled-1.jpg`} alt="이미지" /></div>
            </div>

            <div className="story_box">
                <div className="story_text">
                    <h4>story title</h4>
                    <p>story text</p>
                </div>
                <div className='story_img'><img src={`${process.env.PUBLIC_URL}/minor-iii-slideshow-02.jpeg`} alt="이미지" /></div>
            </div>

        </div>
    )
}
