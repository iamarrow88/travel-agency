import StandardButton from "../../button/standard-button/standard-button";

function FiltersSearch(props){
  return (
    <div className={`w-[1216px] bg-white rounded-2xl`}>
      <input/>
      <input/>
      <input/>
      <StandardButton slot="Search"/>
    </div>
  )
}

export default FiltersSearch;