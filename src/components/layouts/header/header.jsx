import HeaderNav from "../../UI/navigation/headerNav/headerNav";
import SimpleSearchInput from "../../UI/inputs/simple-search/simple-search-input";

function Header(){
  const itemNames = ['Destinations', 'Deals', 'Travel Styles', 'About', 'Get Inspired'];
  return (
      <header className="max-w-screen-xl mx-auto px-8 py-6 h-32 flex justify-start items-end">
        <HeaderNav itemNames={itemNames}/>

        <SimpleSearchInput />

        <div className="flex flex-wrap gap-1 w-40 h-14 font-bold">
          <span className="w-6 block">
            <svg className="w-full" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                 <path strokeLinecap="round" strokeLinejoin="round"
                       d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"/>
            </svg>
          </span>

          <span>24/7 Support</span>

          <a href="tel:0041226261692">00 41 22 626 1692</a>
        </div>
      </header>
  )
}

export default Header;