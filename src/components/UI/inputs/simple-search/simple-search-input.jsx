function SimpleSearchInput({ placeholder }) {
  return (
      <div className="input-wrapper relative flex items-center mr-6">
        <input
            type="text"
            placeholder={placeholder}
            className="border-skyDark shadow-md border w-[339px] h-[48px] rounded-full outline-none pl-6 py-3"
        />

        <span className="absolute top-1 right-1 bg-green-template rounded-full w-10 h-10 flex justify-center items-center hover:cursor-pointer">
           <svg className="w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
             <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
           </svg>
        </span>
      </div>
  )
}

export default SimpleSearchInput;