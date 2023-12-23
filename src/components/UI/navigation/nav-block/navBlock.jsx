import NavList from "../nav-list/navList";

function NavBlock({ listClassNames, linksArray }){
  return (
      <div className={`nav-list ${listClassNames}`}>
        <NavList linksArray={linksArray}/>
      </div>
  )
}

export default NavBlock;