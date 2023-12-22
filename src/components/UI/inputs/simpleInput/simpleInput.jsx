function SimpleInput({ placeholderSlot, btnSlot }){
  return (
      <div className="simple-input w-[520px]">
        <input type="text" placeholder={placeholderSlot} className="w-4/6 border border-skyDark rounded-l-full py-3 pl-6 outline-none"/>
        <button className="w-2/6 bg-green-template rounded-r-full px-6 py-3">{btnSlot}</button>
      </div>
  )
}

export default SimpleInput;