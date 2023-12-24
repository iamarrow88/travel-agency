import SectionTitle from "../../../UI/titles/section-title/section-title";
import SuggestTitle from "../../../UI/cards/suggest-title/suggest-title";
import image from "./direction-sprite.png";



function Directions({ directionsArray }){
  let key = -1;

  const titles = directionsArray.map(direction => {
    key += 1;
    return (
        <SuggestTitle name={direction.title} key={key} image={image}/>
    )
  })
  return (
      <section className="directions">
        <div className="container py-32 px-10">

          <SectionTitle title="Where are we go" classNames="mb-12" />

          <div className="titles flex flex-wrap justify-center gap-8">
            {titles}
          </div>

        </div>
      </section>
  )
}

export default Directions;