import Icon from "../icon/icon";

function StarsRate({rate}){
  return (
      <div className="stars-wrapper flex h-6">
        <Icon id="template-star" classNames="stars w-6 h-6"/>
        <Icon id="template-star" classNames="stars w-6 h-6"/>
        <Icon id="template-star" classNames="stars w-6 h-6"/>
        <Icon id="template-star" classNames="stars w-6 h-6"/>
        <Icon id="template-star" classNames="stars-0 w-6 h-6"/>
      </div>
  )
}


export default StarsRate;