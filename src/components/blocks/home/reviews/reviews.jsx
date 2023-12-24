import SectionTitle from "../../../UI/titles/section-title/section-title";
import ReviewCard from "../../../UI/cards/review-card/review-card";
import RoundIndicator from "../../../UI/slider/slider-elements/round-indicator/round-indicator";
import Filter from "../../../UI/button/filter/filter";



function Reviews({ reviews, sectionTitle, allBtnText, allBtnLink }){
  let key = -1;
  const cards = reviews.map(review => {
    key += 1;
    return (
        <ReviewCard src={review.avatarSrc}
                    key={key}
                    name={review.name}
                    text={review.text}
        />
    )
  })
  return (
      <section className="reviews">
        <div className="container">
          <SectionTitle title={sectionTitle} classNames="mb-32" />

          <div className="carousel-wrapper relative w-full mb-16">
            <div className="relative background w-[748px] h-[454px] bg-template-black rounded-6xl mx-auto">

              <div className="reviews-indicators absolute bottom-8 left-0 flex justify-center items-center gap-2 w-full">
                <RoundIndicator isActive="true"/>
                <RoundIndicator/>
                <RoundIndicator/>
              </div>
            </div>
            <div className="slides absolute top-16 left-0 z-10 flex justify-center items-center gap-8 w-full">
              {cards}
            </div>
          </div>

          <Filter title={allBtnText} link={allBtnLink} classNames="py-4 px-10 mx-auto block review-more w-48 text-center"/>
        </div>
      </section>
  )
}

export default Reviews;