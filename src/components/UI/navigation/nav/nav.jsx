import Logo from "../../logo/logo";
import ListItem from "../list-item/list-item";

function Nav(props) {
  let id = -1;
  const listItems = props.itemNames.map(name => {
    id += 1;
    return <ListItem itemName={name} key={id}/>
  })
  return (
      <nav className="flex justify-center items-center w-2/4 gap-x-16 mr-12 h-8 py-8">
        <Logo/>

        <ul className="w-32and flex justify-center items-center gap-8 font-bold">
          {listItems}
        </ul>
      </nav>
  )
}

export default Nav;