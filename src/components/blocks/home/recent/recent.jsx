import SectionTitle from "../../../UI/titles/section-title/section-title";
import TripCard from "../../../UI/cards/trip-card/trip-card";
import barcelona from "./barcelona.png";





function Recent({ recentTripsData, sectionTitle, bottomBtnText, bottomBtnLink }){
  let key = -1;

  const cards = recentTripsData.map(card => {
    key += 1;
    return (
        <TripCard src={barcelona}
                  destinationName={card.title}
                  minPrice={card.minPrice}
                  rating={card.rate}
                  duration={card.tripDuration}
                  places={card.placesCount}
                  countries={card.countries}
                  description={card.description}
                  key={key}/>
    )
  })
  return (
    <section className="recent">
      <div className="container relative pb-[129px] px-[40px]">
        <SectionTitle title={sectionTitle} classNames="mb-16"/>
        <a href={bottomBtnLink} className="absolute top-0 right-0 link">{bottomBtnText}</a>

        <div className="cards-wrapper grid grid-cols-recentCards gap-8 w-full">
          {cards}
        </div>
      </div>


    </section>
  )
}

export default Recent;