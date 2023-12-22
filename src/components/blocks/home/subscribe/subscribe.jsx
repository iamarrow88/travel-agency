import SimpleInput from "../../../UI/inputs/simpleInput/simpleInput";

function Subscribe(props){
  return (
      <section className="subscribe mb-16">
        <div className="container flex justify-between items-center w-full">
          <h2 className="sub-title">Subscribe to our newsletter</h2>
          <SimpleInput placeholderSlot="Enter your Email" btnSlot="Subscribe"/>
        </div>
      </section>
  )
}

export default Subscribe;