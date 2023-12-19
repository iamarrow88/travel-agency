function Logo(props){

  return <div className="h-14 w-24 bg-green-300 cursor-pointer">
    <a href={props.link} className="logo__link flex justify-center items-center text-red-700 w-full h-full">
      logo
    </a>
  </div>
}

export default Logo;