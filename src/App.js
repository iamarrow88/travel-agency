import Header from "./components/layouts/header/header";
import Main from "./components/blocks/home/main/main";
import PopularSearches from "./components/blocks/home/popular-searches/popular-searches";
import Recent from "./components/blocks/home/recent/recent";
import PopularTrips from "./components/blocks/home/popular-trips/popular-trips";
import Why from "./components/blocks/home/why/why";
import Reviews from "./components/blocks/home/reviews/reviews";
import Directions from "./components/blocks/home/directions/directions";


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
        </main>
      </div>
  );
}

export default App;
