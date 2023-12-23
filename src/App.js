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

const mobileAppDescription = 'All your travel plans, in one place.You handle the booking.Access reservations, maps, and more on your favorite device!View trending destinations. Discover popular trips. Listen to your heart. Experience the world.Find or create your perfect trip. Meet fellow travellers. Experience different cultures. Create unforgettable memories.Keep up-to-date with active trips, view your favourites, visit previous adventures. Managing a trip has never been easier.'

const mobileAppsButtons = [
  {
    svgID: 'apple-logo',
    slot1: 'Download on the',
    slot2: 'App Store',
    link: 'https://www.google.com/search?q=app+store',
  },
  {
    svgID: 'google-play',
    slot1: 'Get it on',
    slot2: 'Google Play',
    link: 'https://www.google.com/search?q=Google+Play',
  }
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
          <Directions directionsArray={directions}/>
          <MobileApps sectionTitle="Try our Travel Together app" description={mobileAppDescription} buttonsData={mobileAppsButtons}/>
          <Subscribe />

          <Footer />
        </main>
      </div>
  );
}

export default App;
