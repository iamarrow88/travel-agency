import SectionTitle from "../../../UI/titles/section-title/section-title";
import Filter from "../../../UI/button/filter/filter";

function PopularSearches ({ titlesList }) {
  let key = -1;
  const filters = titlesList.map(title => {
    key += 1;
    return (
        <Filter title={title} classNames="px-6 py-3" key={key}/>
    )
  })

  return (
    <section className="popular-searches">
      <div className="container pt-[128px] pb-[140px] px-[40px]">
        <SectionTitle title={"Popular searches"} classNames="mb-16"/>

        <div className="filters w-full flex justify-between">
          {filters}
        </div>
      </div>
    </section>
  )
}

export default PopularSearches;