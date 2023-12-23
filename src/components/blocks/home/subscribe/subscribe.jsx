import SimpleInput from "../../../UI/inputs/simpleInput/simpleInput";

function Subscribe({ sectionTitle, inputPlaceholder }){
  return (
      <section className="subscribe mb-16">
        <div className="container flex justify-between items-center w-full">
          <h2 className="sub-title">{sectionTitle}</h2>
          <SimpleInput placeholderSlot={inputPlaceholder} btnSlot="Subscribe"/>
        </div>
      </section>
  )
}

export default Subscribe;