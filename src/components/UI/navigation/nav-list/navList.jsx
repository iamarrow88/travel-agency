import ListItem from "../list-item/list-item";

function NavList({namesArray, linksArray}){

  let key = -1;

  const listItems = namesArray.map((itemName, index) => {
    key += 1;
    return (
        <ListItem itemName={itemName} link={linksArray[index]} classNames="text-template-footerLinks" key={key} />
    )
  })
  return (
      <ol className="flex flex-col gap-2 items-start">
        {listItems}
      </ol>
  )
}

export default NavList;