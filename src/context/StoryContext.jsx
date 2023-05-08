import React, {useState} from 'react';

const StoryContext = React.createContext("");

const StoryContextProvider = ({children}) =>{
  const [storyList, setStoryList] = useState([
    {id:1, title:"가장 작지만 강력한 스피커 '액톤 Ⅲ(ACOTN Ⅲ)'", text:"오늘 소개해 드릴 제품은 마샬 홈 스피커 라인업에서 가장 작은 사이즈의 블루투스 스피커인 마샬 액톤 Ⅲ 블루투스 스피커(ACTON Ⅲ)입니다. 마샬 액톤Ⅲ(ACTON Ⅲ) 블루투스 스피커는 한층 몰입감 높은 감상을 위해 이전 제품보다 훨씬 더 폭넓은 음장을 제공하며 가정용 스피커에서 기대할 수 있는 생활 공간을 가득 채우는 Marshall 시그니처 사운드를 제공합니다.", image:"/img/stanmore-ii-black-hover.jpg"},
    {id:2, title:"마샬 포터블 스피커 라인업 모델 ' 엠버튼 2(EMBERTON II) ' 출시", text:"마샬 포터블 스피커 라인업 모델인 ‘엠버튼’의 새로운 모델인 ‘엠버튼2(Emberton II)’ 가 출시되었습니다!! 마샬 엠버튼2(EMBERTON II)는 야외에서의 사용이 편리하도록 내구성이 좋고 사용이 편리하도록 디자인되어 있습니다.  마샬 엠버튼2(EMBERTON II)의 최고 수준의 방진 및 방수 등급(IP67)은 야외 활동 시 비, 흙, 모래, 먼지 등으로부터 안전하게 음악 감상을 할 수 있도록 도와줍니다. ​​​", image:"/img/slideshow-01.jpg"},
    {id:3, title:"'구글 어시스턴트'를 품은 마샬 블루투스 스피커 '억스브릿지 보이스'", text:"마샬 스피커가 '구글 어시스턴트(Google Assistant)'를 품었습니다. '구글 어시스턴트'가 내장된 '마샬 억스브릿지 보이스'는 일반 블루투스 연결 뿐만 아니라 무선 인터넷 연결을 통해 다양한 음성 제어가 가능합니다. 음성만으로 원하는 내용을 말해보세요. 음악 재생 및 조절은 물론 오늘의 날씨, 뉴스 등 일상 속 궁금한 것들이 있다면 언제든 '억스브릿지 보이스'에게 물어보세요. 신속하게 검색해주어 간편하게 정보를 얻을 수 있습니다.", image:"/img/fabcad3908b2fd0d11835974b5472376.jpg"},
    {id:4, title:"퍼포먼스의 최강자 마샬 워번Ⅱ(WOBURNⅡ) 블루투스 스피커", text:"오늘 소개해 드릴 제품은 마샬의 가장 대형 스피커이며, 웅장한 사운드를 제공하면서도 깨끗한 고음에 선명한 사운드를 뿜어내는 마샬 워번Ⅱ 블루투스 스피커(WOBURN Ⅱ Bluetooth)입니다.마샬 워번2(WOBURN Ⅱ) 블루투스 스피커는 라이브 음악을 듣는 듯한 생생함과 강력함을 전달합니다.", image:"/img/kilburn-ii-black-hover.png"},
    {id:5, title:"홈 스피커 라인업에서 가장 주목을 받는 모델 '스탠모어 Ⅲ(STANMORE Ⅲ)'", text:"오늘 소개해 드릴 제품은 마샬 홈 스피커 라인업에서 가장 주목을 받는 모델인 마샬 스탠모어 Ⅲ 블루투스 스피커(STANMORE Ⅲ)입니다. 마샬 스탠모어Ⅲ(STANMORE Ⅲ) 블루투스 스피커는 이전 모델보다 훨씬 더 넓은 사운드 스테이지를 제공하여 보다 몰입감 있는 경험을 위해 재설계된 가정을 가득 채우는 Marshall 시그니처 사운드를 제공합니다.", image:"/img/Untitled-1.jpg"},
    {id:6, title:"마샬 신제품 휴대용 소형 블루투스 스피커 '윌렌(WILLEN)' 출시", text:"마샬 새로운 포터블 스피커 라인업 모델인 ‘윌렌(WILLEN)’이 출시되었습니다!! 마샬 윌렌(WILLEN)은 어디서나 휴대할 수 있는 소형 사이즈의 트랜디한 휴대용 스피커이며 캠핑, 운동, 여행 등 야외 활동 시 어디에서나 사용 가능한 견고한 내구성과 최고 수준의 방진 및 방수 등급(IP67) 및 활용도 높은 고정 스트랩이 결합된 스피커입니다.", image:"/img/minor-iii-slideshow-02.jpeg"},
  ].map(story => {
    return {
      ...story,
      title: story.title,
      text : story.text,
      // image : story.image
      image : process.env.PUBLIC_URL + story.image
    };
  }));

  const value = {
    state : {storyList},
    action : {setStoryList}
  }

  return (
    <StoryContext.Provider value={value}>
      {children}
    </StoryContext.Provider>
  )

}

export { StoryContextProvider };
export default StoryContext;
