import Icon from "../../icons/icon/icon";

function ReasonCard({ svgID, title, description, isActive }){
  let classNames = "reason-card";
  classNames += isActive ? ' bg-template-green' : "";
  return (
      <div className={`${classNames} reason-card py-8 px-[70px] flex flex-col justify-center items-center gap-2 text-center hover:bg-green-template cursor-pointer`}>
        <Icon id={svgID} classNames="w-[72px] h-[72px] fill-template-black stroke-template-black" />
        <div className="reason-card-title">{title}</div>
        <div className="reason-card-description overflow-ellipsis">{description}</div>
      </div>
  )
}

export default ReasonCard;