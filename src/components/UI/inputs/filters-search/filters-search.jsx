import StandardButton from "../../button/standard-button/standard-button";

function FiltersSearch(props){
  return (
    <div className={`w-[1216px] h-20 bg-white rounded-full mx-auto overflow-hidden flex justify-between`}>
      <div className="inputs-wrapper h-full">
        <input className="w-80 h-full border-r-template-lightGray border py-3 pr-11 pl-16 outline-0"
               placeholder={"Where do you want to go?"}/>
        <input className="w-80 h-full border-r-template-lightGray border py-3 pr-11 pl-16 outline-0"
               placeholder={"What do you want to see?"}/>
        <input className="w-80 h-full py-3 pr-11 pl-16 outline-0" placeholder={"When do you want to go?"}/>
      </div>
      <StandardButton slot="Search"
                      classNames={"btn py-1 px-12 text-s max-h-14 self-stretch mt-[12px] justify-self-end mr-6"}/>
    </div>
  )
}

export default FiltersSearch;