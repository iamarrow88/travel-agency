import ArrowButton from "../../button/arrow-button/arrow-button";
import RoundIndicator from "../slider-elements/round-indicator/round-indicator";
import Slide from "../slider-elements/slide/slide";

import mainBg from './home-main-section.webp';

function MainSlider(props){
  return (
    <div className="w-full relative">
      <div className="slider-wrapper overflow-hidden w-full h-[860px]">
        <div className="slide-inner flex justify-center items-center w-300">
          <Slide src={mainBg} alt="slide"/>
          <Slide src={mainBg} alt="slide"/>
          <Slide src={mainBg} alt="slide"/>
        </div>
      </div>
      <div className="buttons absolute top-2/4 left-16 w-[1296px] mx-auto flex justify-between items-center">

        <ArrowButton id='arrow-right' isNeedToRotate={true} />
        <ArrowButton id='arrow-right' isNeedToRotate={false}/>


      </div>
      <div className="indicators absolute bottom-20 w-full flex justify-center items-center gap-2">
        <RoundIndicator isActive={true}/>
        <RoundIndicator />
        <RoundIndicator />
      </div>
    </div>
  )
}

export default MainSlider;