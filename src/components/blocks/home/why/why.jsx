import SectionTitle from "../../../UI/titles/section-title/section-title";
import ReasonCard from "../../../UI/cards/reason-card/reason-card";

const reasons = [
  {
    "svgID": "globe",
    "title": "Diverse Destinations",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "dollar-coin",
    "title": "Value for Money",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "pin",
    "title": "Beautiful Places",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "calendar-check",
    "title": "Fast Booking",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "heart",
    "title": "Passionate Travel",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "team",
    "title": "Support Team",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
]

function Why(props){
  let key = -1;

  const cards = reasons.map(reason => {
    key += 1;
    return (
        <ReasonCard title={reason.title}
                    description={reason.description}
                    svgID={reason.svgID}
                    isActive={false}
                    key={key}/>
    )
  })
  return (
      <section className="why py-32 px-10">
        <div className="container">
          <SectionTitle title="Why choose Travel Together" classNames="mb-24"/>

          <div className="cards-wrapper w-full grid grid-cols-recentCards grid-flow-row-dense gap-8">
            {cards}
          </div>

        </div>
      </section>
  )
}

export default Why;