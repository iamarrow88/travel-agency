import SectionTitle from "../../../UI/titles/section-title/section-title";
import SuggestTitle from "../../../UI/cards/suggest-title/suggest-title";

const directions = [
  {
    "direction": "usa",
    "imageSrc": "./usa.png",
    "link": "https://www.google.com/search?q=usa"
  },
  {
    "direction": "canada",
    "imageSrc": "./usa.png",
    "link": "https://www.google.com/search?q=usa"
  },
  {
    "direction": "europe",
    "imageSrc": "./usa.png",
    "link": "https://www.google.com/search?q=usa"
  },
  {
    "direction": "asia",
    "imageSrc": "./usa.png",
    "link": "https://www.google.com/search?q=usa"
  },
  {
    "direction": "latin america",
    "imageSrc": "./usa.png",
    "link": "https://www.google.com/search?q=usa"
  },
  {
    "direction": "australia",
    "imageSrc": "./usa.png",
    "link": "https://www.google.com/search?q=usa"
  },
  {
    "direction": "africa",
    "imageSrc": "./usa.png",
    "link": "https://www.google.com/search?q=usa"
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
        <SuggestTitle name={direction.direction} key={key} />
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