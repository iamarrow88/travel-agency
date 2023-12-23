import Header from "./components/layouts/header/header";
import Main from "./components/blocks/home/main/main";
import PopularSearches from "./components/blocks/home/popular-searches/popular-searches";
import Recent from "./components/blocks/home/recent/recent";
import PopularTrips from "./components/blocks/home/popular-trips/popular-trips";
import Why from "./components/blocks/home/why/why";
import Reviews from "./components/blocks/home/reviews/reviews";
import Directions from "./components/blocks/home/directions/directions";
import MobileApps from "./components/blocks/home/mobile-apps/mobile-apps";
import Subscribe from "./components/blocks/home/subscribe/subscribe";
import Footer from "./components/layouts/footer/footer";


const directions = [
  {
    "title": "USA",
    "imageSrc": "./usa.png",
    "link": "https://www.google.com/search?q=usa"
  },
  {
    "title": "Canada",
    "imageSrc": "./canada.png",
    "link": "https://www.google.com/search?q=canada"
  },
  {
    "title": "Europe",
    "imageSrc": "./europe.png",
    "link": "https://www.google.com/search?q=europe"
  },
  {
    "title": "Asia",
    "imageSrc": "./asia.png",
    "link": "https://www.google.com/search?q=asia"
  },
  {
    "title": "Latin America",
    "imageSrc": "./latin-america.png",
    "link": "https://www.google.com/search?q=latin+america"
  },
  {
    "title": "Australia",
    "imageSrc": "./australia.png",
    "link": "https://www.google.com/search?q=australia"
  },
  {
    "title": "Africa",
    "imageSrc": "./africa.png",
    "link": "https://www.google.com/search?q=africa"
  },
  {
    "title": "View all places >",
    "imageSrc": "",
    "link": "https://www.google.com/search?q=usa"
  },
]

function App() {
  return (
      <div className="App">
        <Header/>

        <main>
          <Main />
          <PopularSearches />
          <Recent />
          <PopularTrips />
          <Why />
          <Reviews />
          <Directions />
          <MobileApps />
          <Directions directionsArray={directions}/>
          <Subscribe />

          <Footer />
        </main>
      </div>
  );
}

export default App;
