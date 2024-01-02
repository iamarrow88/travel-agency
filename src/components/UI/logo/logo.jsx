import Icon from "../icons/icon/icon";

function Logo({ link, classNames, imgSrc}){

  return <div className={`${classNames} bg-green-300 cursor-pointer`}>
    <a href={link} className="logo__link flex justify-center items-center text-red-700 w-full h-full">
      <Icon id="logo" />
    </a>
  </div>
}

export default Logo;