import SectionTitle from "../../../UI/titles/section-title/section-title";
import Filter from "../../../UI/button/filter/filter";

function PopularSearches (props) {
  return (
    <section className="popular-searches">
      <div className="container pt-[128px] pb-[140px] px-[40px]">
        <SectionTitle title={"Popular searches"} classNames="mb-16"/>

        <div className="filters w-full flex justify-between">
          <Filter title="Trips under 2 weeks" classNames="px-6 py-3"/>
          <Filter title="Best-Selling trips" classNames="px-6 py-3"/>
          <Filter title="Best-Selling trips" classNames="px-6 py-3"/>
          <Filter title="National parks USA" classNames="px-6 py-3"/>
          <Filter title="Trips under 800$" classNames="px-6 py-3"/>
          <Filter title="Scandinavian trio" classNames="px-6 py-3"/>
        </div>
      </div>
    </section>
  )
}

export default PopularSearches;