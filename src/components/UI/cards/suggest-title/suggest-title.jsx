function SuggestTitle({ name, image }){
  return (
      <a className="suggest-title relative bg-black" href={`https://www.google.com/search?q=${name}`}>
        {/*<picture className="w-full h-full relative z-10">
          <source srcSet="./directions/usa.jpg"/>
        </picture>*/}
        <img src="./directions/usa.jpg" alt=""/>
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full z-20 text-white text-5xl font-black">{name}</div>
      </a>
  )
}

export default SuggestTitle;