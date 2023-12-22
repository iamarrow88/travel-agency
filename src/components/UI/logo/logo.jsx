function Logo({ link, classNames}){

  return <div className={`${classNames} bg-green-300 cursor-pointer`}>
    <a href={link} className="logo__link flex justify-center items-center text-red-700 w-full h-full">
      logo
    </a>
  </div>
}

export default Logo;