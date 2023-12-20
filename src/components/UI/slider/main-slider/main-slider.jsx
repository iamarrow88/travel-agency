import ArrowButton from "../../button/arrow-button/arrow-button";
import RoundIndicator from "../slider-elements/round-indicator/round-indicator";
import Slide from "../slider-elements/slide/slide";

import mainBg from './home-main-section.webp';

function MainSlider(props){
  return (
    <div className="w-full relative">
      <div className="slider-wrapper overflow-hidden w-full h-[860px]">
        <div className="slide-inner flex justify-center items-center w-300 h-full">
          <Slide src={mainBg} alt="slide" />
          <Slide src={mainBg} alt="slide" />
          <Slide src={mainBg} alt="slide" />
        </div>
      </div>
      <div className="content absolute top-0 left-0 w-full h-full pt-[309px] pb-20 flex flex-col justify-between">
        <div className="buttons w-11/12 mx-auto flex justify-between">

          <ArrowButton id='arrow-right' classNames={"arrow-btn top-[309px] left-[72px]"} svgClassNames="w-3 h-3 rotate-180"/>
          <div></div>
          <ArrowButton id='arrow-right' svgClassNames="w-3 h-3 rotate-0" classNames={"arrow-btn top-[309px] right-[72px]"}/>


        </div>
        <div className="indicators w-full flex justify-center items-center gap-2">
          <RoundIndicator isActive={true}/>
          <RoundIndicator/>
          <RoundIndicator/>
        </div>
      </div>

    </div>
  )
}

export default MainSlider;