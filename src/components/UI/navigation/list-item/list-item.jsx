function ListItem(props){
  return (
      <li className="whitespace-nowrap cursor-pointer">
        <a href={props.link}>{props.itemName}</a>
      </li>
  )
}

export default ListItem;