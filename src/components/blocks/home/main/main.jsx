import StandardButton from "../../../UI/button/standard-button/standard-button";
import MainSlider from "../../../UI/slider/main-slider/main-slider";
import FiltersSearch from "../../../UI/inputs/filters-search/filters-search";

function Main(props){
  return (
    <section className="main">
      <div className="container">
        <h1>DREAMY SUMMER HOLIDAYS</h1>
        <StandardButton slot="See trips"/>

        <FiltersSearch />

        <MainSlider />

      </div>
    </section>
  )
}

export default Main;