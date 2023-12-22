function ListItem({ link, itemName, classNames }){
  return (
      <li className={`whitespace-nowrap cursor-pointer ${classNames}`}>
        <a href={link}>{itemName}</a>
      </li>
  )
}

export default ListItem;