import NavList from "../nav-list/navList";

function NavBlock({ classNames, title, namesArray, linksArray }){
  return (
      <div className={`nav-list ${classNames}`}>
        <h4 className="text-xl font-black leading-8 text-white mb-2">{title}</h4>

        <NavList namesArray={namesArray} linksArray={linksArray}/>
      </div>
  )
}

export default NavBlock;