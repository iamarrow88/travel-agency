function Filter({ title, classNames }){
  return (
      <button className={`${classNames} filter`}>{title}</button>
  )
}

export default Filter;