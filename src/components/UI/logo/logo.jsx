function Logo(props){

  return <div className="h-14 w-24 bg-green-300">
    <a href={props.link} className="logo__link text-red-700">
      logo
    </a>
  </div>
}

export default Logo;