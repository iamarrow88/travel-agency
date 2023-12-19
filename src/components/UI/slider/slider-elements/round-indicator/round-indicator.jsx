function RoundIndicator({isActive}){
  const additionalOptions = isActive ? "bg-white" : "bg-transparent";
  return (
      <div className={`w-2 h-2 border border-white rounded-full cursor-pointer ${additionalOptions}`}>
      </div>
  )
}

export default RoundIndicator;