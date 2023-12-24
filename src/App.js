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

const headerLinks = [
  {
    title: "Destinations",
    link: "/destinations"
  },
  {
    title: "Deals",
    link: "/deals"
  },
  {
    title: "Travel Styles",
    link: "/travel-styles"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Get Inspired",
    link: "/popular"
  }
];


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


const filtersList = [
  {
    title: "Trips under 2 weeks",
    link: "/trips"
  },
  {
    title: "Best-Selling trips",
    link: "/trips"
  },
  {
    title: "Best-Selling trips",
    link: "/trips"
  },
  {
    title: "National parks US",
    link: "/trips"
  },
  {
    title: "Trips under 800$",
    link: "/trips"
  },
  {
    title: "Scandinavian trio",
    link: "/trips"
  }
  ]

const popularTripsData = [
  {
    "name": "europe",
    "title": "European whirl",
    "minPrice": 2303,
    "rate": 5,
    "tripDuration": 18,
    "placesCount": 32,
    "countries": 10,
    "description": "Dreaming of your European adventure, but don't know where to start? Welcome to the European Whirl.",
    "imageSrc": "./assets/images/most-popular/europe.webp"
  },
  {
    "name": "greek",
    "title": "Greek Island Hopping",
    "minPrice": 1900,
    "rate": 5,
    "tripDuration": 11,
    "placesCount": 5,
    "countries": 1,
    "description": "You'll be living your best Greek island life on this sun, sea & culture-rich trip in Mykonos, Paros, Santorini, Ios & Athens. Stopping in at each of Greece's most popular islands.",
    "imageSrc": "./assets/images/most-popular/greek.webp"
  },
]

const recentTripsData = [
  {
    "name": "barcelona",
    "title": "Barcelona",
    "minPrice": 2256,
    "rate": 5,
    "tripDuration": 11,
    "placesCount": 1,
    "countries": 1,
    "description": "The one that gives you the best of Spanish culture, from beaches to palaces to tapas",
    "imageSrc": "./assets/images/recently-viewed/barcelona.webp"
  },
  {
    "name": "scandinavia",
    "title": "Scandinavia",
    "minPrice": 1900,
    "rate": 5,
    "tripDuration": 12,
    "placesCount": 9,
    "countries": 3,
    "description": "From colourful Copenhagen to sophisticated Stockholm, this trip gives you 12 days of pure Scandinavian magic.",
    "imageSrc": "./assets/images/recently-viewed/scandinavia.webp"
  },
  {
    "name": "yellowstone",
    "title": "Yellowstone and Grand Tetons",
    "minPrice": 995,
    "rate": 5,
    "tripDuration": 1,
    "placesCount": 9,
    "countries": 1,
    "description": "From the peaks of the Grand Tetons to Yellowstone, for 2 days of adventure in the world's oldest National Park",
    "imageSrc": "./assets/images/recently-viewed/yellowstone.webp"
  },
]

const reviewsData = [
  {
    "name": "Melanie L.",
    "text": "Dreaming of your European adventure, but don't know where to start? Welcome to the European Whirl. .",
    "avatarSrc": "/public/assets/images/reviews/melanie.webp",
  },
  {
    "name": "Louis Jabeth",
    "text": "Dreaming of your European adventure, but don't know where to start? Welcome to the European Whirl. .",
    "avatarSrc": "/public/assets/images/reviews/lois.webp",
  },
  {
    "name": "Robin Doe",
    "text": "Dreaming of your European adventure, but don't know where to start? Welcome to the European Whirl. .",
    "avatarSrc": "/public/assets/images/reviews/robin.webp",
  },
]

const reasonsTitlesData = [
  {
    "svgID": "globe",
    "title": "Diverse Destinations",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "dollar-coin",
    "title": "Value for Money",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "pin",
    "title": "Beautiful Places",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "calendar-check",
    "title": "Fast Booking",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "heart",
    "title": "Passionate Travel",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
  {
    "svgID": "team",
    "title": "Support Team",
    "description": "Richly varied landscapes, luxury accommodation Travel.",
  },
]

const footerLinksData = [
      [
        {
          title: "About us",
          link: false
        },
        {
          title: "About Travel Together",
          link: "/about"
        },
        {
          title: "Contact us",
          link: "/contacts"
        },
        {
          title: "Features",
          link: "/features"
        },
        {
          title: "Careers",
          link: "/career"
        }
      ],
      [
        {
          title: "Resources",
          link: false
        },
        {
          title: "Help center",
          link: "/help"
        },
        {
          title: "Blog",
          link: "/blog"
        },
        {
          title: "Partnership",
          link: "/partners"
        }
      ],
      [
        {
          title: "Get in touch",
          link: false
        },
        {
          title: "Question or Feedback?",
          link: "/message"
        },
        {
          title: "We’d love to hear from you",
          link: "/contacts"
        }
      ]
    ];


function App() {
  return (
      <div className="App">
        <Header links={headerLinks} phoneNumber="00 41 22 626 1692"/>

        <main>
          <Main mainTitle="DREAMY SUMMER HOLIDAYS" buttonTitle="See trips"/>
          <PopularSearches linksArray={filtersList}/>
          <Recent recentTripsData={recentTripsData} sectionTitle="Recently viewed trips" bottomBtnText="View all trips" bottomBtnLink="/recent"/>
          <PopularTrips data={popularTripsData} sectionTitle="Most popular trips" allBtnText="All trips" allBtnLink="/allTrips"/>
          <Why reasons={reasonsTitlesData} sectionTitle="Why choose Travel Together"/>
          <Reviews reviews={reviewsData} sectionTitle="What travellers are saying" allBtnText="All Rewiews" allBtnLink="/reviews"/>
          <Directions directionsArray={directions}/>
          <MobileApps sectionTitle="Try our Travel Together app" description={mobileAppDescription} buttonsData={mobileAppsButtons}/>
          <Subscribe sectionTitle="Subscribe to our newsletter" inputPlaceholder="Enter your Email"/>

          <Footer linksData={footerLinksData}/>
        </main>
      </div>
  );
}

export default App;
