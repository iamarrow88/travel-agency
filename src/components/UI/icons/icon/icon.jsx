import Icons from "./sprite.svg";
function Icon({ id, width, height, isNeedToRotate, classNames }){
  const additionalOptions = isNeedToRotate ? 'rotate-180' : 'rotate-0';
  return (
      <svg className={classNames}>
        <use href={Icons + "#" + id}></use>
      </svg>
  )
}
export default Icon;