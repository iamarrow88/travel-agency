import SectionTitle from "../../../UI/titles/section-title/section-title";
import TripCard from "../../../UI/cards/trip-card/trip-card";
import barcelona from "./barcelona.png";

const incomingData = [
  {
    "name": "barcelona",
    "title": "Barcelona",
    "minPrice": 2256,
    "rate": 5,
    "tripDuration": 11,
    "placesCount": 1,
    "countries": 1,
    "description": "The one that gives you the best of Spanish culture, from beaches to palaces to tapas",
    "imageSrc": "./assets/images/recently-viewed/barcelona.webp"
  },
  {
    "name": "scandinavia",
    "title": "Scandinavia",
    "minPrice": 1900,
    "rate": 5,
    "tripDuration": 12,
    "placesCount": 9,
    "countries": 3,
    "description": "From colourful Copenhagen to sophisticated Stockholm, this trip gives you 12 days of pure Scandinavian magic.",
    "imageSrc": "./assets/images/recently-viewed/scandinavia.webp"
  },
  {
    "name": "yellowstone",
    "title": "Yellowstone and Grand Tetons",
    "minPrice": 995,
    "rate": 5,
    "tripDuration": 1,
    "placesCount": 9,
    "countries": 1,
    "description": "From the peaks of the Grand Tetons to Yellowstone, for 2 days of adventure in the world's oldest National Park",
    "imageSrc": "./assets/images/recently-viewed/yellowstone.webp"
  },
]




function Recent(props){
  let key = -1;

  const cards = incomingData.map(card => {
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
        <SectionTitle title={"Recently viewed trips"} classNames="mb-16"/>
        <a href="https://google.com" className="absolute top-0 right-0 link">View all trips</a>

        <div className="cards-wrapper grid grid-cols-recentCards gap-8 w-full">
          {cards}
        </div>
      </div>


    </section>
  )
}

export default Recent;