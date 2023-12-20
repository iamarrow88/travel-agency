import StandardButton from "../../../UI/button/standard-button/standard-button";
import MainSlider from "../../../UI/slider/main-slider/main-slider";
import FiltersSearch from "../../../UI/inputs/filters-search/filters-search";

function Main(props){
  return (
    <section className="main h-[860px]">
      <div className="container relative w-full h-full">
        <div className="content absolute top-0 left-0 w-full h-full z-10 pt-40 text-center">
          <h1 className={`font-title text-6xl text-white font-black mb-16`}>DREAMY SUMMER HOLIDAYS</h1>
          <StandardButton slot="See trips" classNames={"btn py-2 px-32 mb-40 text-2xl"}/>

          <FiltersSearch/>
        </div>

        <MainSlider/>

      </div>
    </section>
  )
}

export default Main;