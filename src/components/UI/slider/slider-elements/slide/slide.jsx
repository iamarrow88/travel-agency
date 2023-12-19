function Slide(props){
  return (
      <div className="w-full flex-grow">
        <img className="w-[1440px]" src={props.src} alt={props.alt}/>
      </div>
  )
}

export default Slide;