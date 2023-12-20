import Icon from "../../icons/icon/icon"

function ArrowButton({ id, isNeedToRotate, classNames, svgClassNames}){
  return (
      <div className={classNames}>
        <Icon id={id} classNames={svgClassNames}/>
      </div>
  )
}

export default ArrowButton;