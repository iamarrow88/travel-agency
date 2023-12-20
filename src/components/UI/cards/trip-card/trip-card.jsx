import StarsRate from "../../icons/stars-rate/stars-rate";
import Icon from "../../icons/icon/icon";
import StandardButton from "../../button/standard-button/standard-button";

function TripCard({src, destinationName, minPrice, rating, duration, places, countries, description, classNamesToImgBlock }){
  const actualRating = rating.toFixed(1);
  const durationText = duration > 1 ? ' Days' : ' Day';
  const placesText = places > 1 ? ' Places' : ' Place';
  const countriesText = countries > 1 ? ' Countries' : ' Country';

  return (
      <div className="trip-card w-full h-full pb-10">
        <div className={`${classNamesToImgBlock} image-block relative mb-8 overflow-hidden w-full rounded-6xl`}>
          <img src={src} alt={destinationName} className="rounded-6xl overflow-hidden object-cover"/>
          <span className="badge absolute bottom-0 right-0 w-48 h-11 bg-green-template
          flex justify-center items-center rounded-tl-6xl rounded-br-6xl">From {minPrice}$</span>
        </div>

        <div className="text-block w-full pl-6 pr-5">
          <h4 className="card-title mb-2.5">{destinationName}</h4>
          <div className="rating flex justify-start gap-4 items-center mb-4">
            <StarsRate />
            <div>{actualRating}</div>
          </div>

          <div className="more flex justify-start items-center gap-4 mb-6">
            <div className="days card-icons">
              <Icon id="calendar" classNames="w-6 h-6 fill-template-gray"/>
              <span>{duration}</span>
              <span>{durationText}</span>
            </div>

            <div className="places card-icons">
              <Icon id="pin" classNames="w-6 h-6 fill-template-gray stroke-template-gray"/>
              <span>{places}</span>
              <span>{placesText}</span>
            </div>

            <div className="countries card-icons">
              <Icon id="globe" classNames="w-6 h-6 fill-template-gray"/>
              <span>{countries}</span>
              <span>{countriesText}</span>
            </div>

          </div>

          <div className="card-description mb-8">
            {description}
          </div>
        </div>

        <StandardButton slot="View details" classNames="btn block mx-auto py-3 px-14"/>

      </div>
  )
}

export default TripCard;