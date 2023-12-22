import SectionTitle from "../../../UI/titles/section-title/section-title";
import SuggestTitle from "../../../UI/cards/suggest-title/suggest-title";
import image from "./direction-sprite.png";

const directions = [
  {
    "direction": "usa",
    "imageSrc": "./usa.png",
    "link": "https://www.google.com/search?q=usa"
  },
  {
    "direction": "canada",
    "imageSrc": "./canada.png",
    "link": "https://www.google.com/search?q=canada"
  },
  {
    "direction": "europe",
    "imageSrc": "./europe.png",
    "link": "https://www.google.com/search?q=europe"
  },
  {
    "direction": "asia",
    "imageSrc": "./asia.png",
    "link": "https://www.google.com/search?q=asia"
  },
  {
    "direction": "latin america",
    "imageSrc": "./latin-america.png",
    "link": "https://www.google.com/search?q=latin+america"
  },
  {
    "direction": "australia",
    "imageSrc": "./australia.png",
    "link": "https://www.google.com/search?q=australia"
  },
  {
    "direction": "africa",
    "imageSrc": "./africa.png",
    "link": "https://www.google.com/search?q=africa"
  },
  {
    "direction": "View all places >",
    "imageSrc": "",
    "link": "https://www.google.com/search?q=usa"
  },
]

function Directions(props){
  let key = -1;

  const titles = directions.map(direction => {
    key += 1;
    return (
        <SuggestTitle name={direction.direction} key={key} image={image}/>
    )
  })
  return (
      <section className="directions">
        <div className="container py-32 px-10">

          <SectionTitle title="Where are we go" classNames="mb-12" />

          <div className="titles flex flex-wrap gap-8">
            {titles}
          </div>

        </div>
      </section>
  )
}

export default Directions;