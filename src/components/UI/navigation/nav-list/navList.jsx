import ListItem from "../list-item/list-item";

function NavList({ linksArray }){

  let key = -1;

  const listItems = linksArray.map(line => {
    key += 1;
    if(line.link){
      return (
          <ListItem itemName={line.title} link={line.link} classNames="text-template-footerLinks" key={key} />
      )
    } else {
      return (
          <ListItem itemName={line.title} classNames="text-xl font-black leading-8 text-white mb-2 cursor-default" key={key} />
      )
    }
  })
  return (
      <ol className="flex flex-col gap-2 items-start">
        {listItems}
      </ol>
  )
}

export default NavList;