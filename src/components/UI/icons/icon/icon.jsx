import Icons from "./sprite.svg";
function Icon({ id, classNames }){
  return (
      <svg className={classNames}>
        <use href={Icons + "#" + id}></use>
      </svg>
  )
}
export default Icon;