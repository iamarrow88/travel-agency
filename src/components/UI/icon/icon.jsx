import Icons from "../icon/sprite.svg";
function Icon({ id, width, height, isNeedToRotate }){
  const additionalOptions = isNeedToRotate ? 'rotate-180' : 'rotate-0';
  return (
      <svg className={`svg-icon w-${width} h-${height} flex justify-center items-center ${additionalOptions}`}>
        <use href={Icons + "#" + id}></use>
      </svg>
  )
}
export default Icon;