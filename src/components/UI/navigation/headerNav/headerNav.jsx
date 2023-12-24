import Logo from "../../logo/logo";
import ListItem from "../list-item/list-item";

function headerNav({links}) {
  let id = -1;

  const listItems = links.map(link => {
    id += 1;
    return <ListItem itemName={link.title} link={link.link} key={id}/>
  })
  return (
      <nav className="flex justify-start items-center gap-x-16 mr-12 h-8 py-8">
        <Logo classNames="h-14 w-20" link="/"/>

        <ul className="w-[515px] flex justify-center items-center gap-8 font-semibold">
          {listItems}
        </ul>
      </nav>
  )
}

export default headerNav;