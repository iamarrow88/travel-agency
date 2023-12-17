import Logo from "../../UI/logo/logo";
import Nav from "../../UI/navigation/nav/nav";

function Header(){
  const itemNames = ['Destinations', 'Deals', 'Travel Styles', 'About', 'Get Inspired'];
  return (
      <header className="w-4/5 mx-auto h-24">
        <Nav itemNames={itemNames}/>
      </header>
  )
}

export default Header;