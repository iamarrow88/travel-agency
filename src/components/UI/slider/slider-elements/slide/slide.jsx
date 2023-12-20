function Slide(props){
  return (
      <div className="w-full flex-grow h-full">
        <img className="w-[1440px] h-full object-cover" src={props.src} alt={props.alt}/>
      </div>
  )
}

export default Slide;