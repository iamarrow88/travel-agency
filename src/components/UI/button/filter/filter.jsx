function Filter({ title, classNames, link }){
  return (
      <a href={link} className={`${classNames} filter`}>{title}</a>
  )
}

export default Filter;