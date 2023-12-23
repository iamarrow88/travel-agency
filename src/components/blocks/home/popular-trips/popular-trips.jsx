import SectionTitle from "../../../UI/titles/section-title/section-title";
import ArrowButton from "../../../UI/button/arrow-button/arrow-button";
import TripCard from "../../../UI/cards/trip-card/trip-card";
import tripImage from "../../../../images/most-popular/europe.png"
import Filter from "../../../UI/button/filter/filter";

const data = [
  {
    "name": "europe",
    "title": "European whirl",
    "minPrice": 2303,
    "rate": 5,
    "tripDuration": 18,
    "placesCount": 32,
    "countries": 10,
    "description": "Dreaming of your European adventure, but don't know where to start? Welcome to the European Whirl.",
    "imageSrc": "./assets/images/most-popular/europe.webp"
  },
  {
    "name": "greek",
    "title": "Greek Island Hopping",
    "minPrice": 1900,
    "rate": 5,
    "tripDuration": 11,
    "placesCount": 5,
    "countries": 1,
    "description": "You'll be living your best Greek island life on this sun, sea & culture-rich trip in Mykonos, Paros, Santorini, Ios & Athens. Stopping in at each of Greece's most popular islands.",
    "imageSrc": "./assets/images/most-popular/greek.webp"
  },
]

function PopularTrips(){
  let key = -1;

  const cards = data.map(tripsData => {
    key += 1;
    return (
        <TripCard src={tripImage}
                  destinationName={tripsData.title}
                  minPrice={tripsData.minPrice}
                  duration={tripsData.tripDuration}
                  places={tripsData.placesCount}
                  rating={tripsData.rate}
                  countries={tripsData.countries}
                  description={tripsData.description}
                  key={key}
                  classNamesToImgBlock="h-[263px]"
        />
    )
  })
  return (
      <section className="most-popular pt-16">
        <div className="container most-popular__container relative pt-16 pb-32">

          <SectionTitle title="Most popular trips" classNames="mb-20"/>

          <div className="buttons flex justify-end gap-2 absolute top-6 right-16">
             <ArrowButton id="arrow-right" svgClassNames="fill-white w-3 h-3 flex justify-center items-center" classNames="fill-white bg-template-ultraLightGray rounded-full w-8 h-8 rotate-180 flex justify-center items-center cursor-pointer" />
             <ArrowButton id="arrow-right" classNames="bg-template-ultraLightGray rounded-full w-8 h-8 flex justify-center items-center cursor-pointer" svgClassNames="fill-white w-3 h-3"/>
          </div>

          <div className="cards-wrapper grid grid-cols-2 gap-8 mb-16 w-11/12 mx-auto">
            {cards}
          </div>

          <Filter title="All trips" classNames="block mx-auto px-16 py-4"/>

        </div>
      </section>
  )
}

export default PopularTrips;