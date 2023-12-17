import Logo from "../../logo/logo";
import ListItem from "../list-item/list-item";

function Nav(props){
  let id = -1;
  const listItems = props.itemNames.map(name => {
    id += 1;
    return <ListItem itemName={name} key={id}/>
  })
  return (
      <nav>
        <Logo />

        <ul>
          {listItems}
        </ul>
      </nav>
  )
}

export default Nav;