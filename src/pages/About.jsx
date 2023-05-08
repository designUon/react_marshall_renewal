import React, { useContext } from 'react'
import '../css/about.css'

import Map from '../components/Map'
import StoryContext from '../context/StoryContext'

export default function About() {

  const value = useContext(StoryContext);

  return (
    <div className='about_wrap'>

      <div className='store_wrap'>
        <p>주변 판매매장을 찾아보세요!</p>
        {/* <Map/> */}
        <Map />
        <div className="hand_img_R"><img src={`${process.env.PUBLIC_URL}/img/new-marshall-tufton-usp01-desktop@1.41x.png`} alt="이미지" /></div>
        <div className="hand_img_L"><img src={`${process.env.PUBLIC_URL}/img/marshall-tufton-usp07-mobile@5x.png`} alt="이미지" /></div>
      </div>

      <div className='story_wrap'>
        {/* <StoryComp/> */}
        <ul>
          {
            value.state.storyList.map((story) => (
              <li key={story.id} className="story_box">

                <div className='story_img'>
                  <img src={story.image} alt="이미지" />
                </div>

                <div className="story_text">
                  <h4>{story.title}</h4>
                  <p>{story.text}</p>
                </div>

              </li>
            ))
          }
        </ul>
      </div>

    </div>


  )
}
