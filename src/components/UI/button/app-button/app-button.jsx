import Icon from "../../icons/icon/icon";

function AppButton({ id, slot1, slot2, link }){
  return (
      <a href={link} className="app-button rounded-md flex justify-start items-center gap-2 px-5 cursor-pointer">
        <div className="flex justify-center items-center w-8 h-full">
          <Icon id={id} classNames="fill-white stroke-white w-full h-8" />
        </div>

        <div className="text-white font-body text-xs flex flex-col">
          <span>{slot1}</span>
          <span className="font-semibold text-xl">{slot2}</span>
        </div>
      </a>
  )
}

export default AppButton;