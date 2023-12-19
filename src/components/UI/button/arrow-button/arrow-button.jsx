/*import {ReactComponent as ArrowRight} from "./arrow-right.svg";
import {ReactComponent as ArrowLeft} from "./arrow-left.svg";*/
import Icon from "../../icon/icon"

function ArrowButton({ id, isNeedToRotate }){
  return (
      <div className="w-[40px] h-[40px] border border-white rounded-full cursor-pointer flex justify-center items-center">
        <Icon id={id} width={"2/5"} height={"2/5"} isNeedToRotate={isNeedToRotate} />
      </div>
  )
}

export default ArrowButton;