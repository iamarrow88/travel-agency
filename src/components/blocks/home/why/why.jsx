import SectionTitle from "../../../UI/titles/section-title/section-title";
import ReasonCard from "../../../UI/cards/reason-card/reason-card";



function Why({ reasons, sectionTitle }){
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
          <SectionTitle title={sectionTitle} classNames="mb-24"/>

          <div className="cards-wrapper w-full grid grid-cols-recentCards grid-flow-row-dense gap-8">
            {cards}
          </div>

        </div>
      </section>
  )
}

export default Why;