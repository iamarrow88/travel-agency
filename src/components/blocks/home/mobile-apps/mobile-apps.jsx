import AppButton from "../../../UI/button/app-button/app-button";

function MobileApps(props) {
  return (
      <section className="mobile-apps px-10 mb-32">
        <div className="container bg-green-template rounded-3xl py-16 pl-16 pr-20 flex">
          <div className="text-block">
            <h2 className="sub-title mb-6">Try our Travel Together app</h2>
            <div className="description w-2/4	mb-16">
              All your travel plans, in one place.You handle the booking.Access reservations, maps, and more on your favorite device!View trending destinations. Discover popular trips. Listen to your heart. Experience the world.Find or create your perfect trip. Meet fellow travellers. Experience different cultures. Create unforgettable memories.Keep up-to-date with active trips, view your favourites, visit previous adventures. Managing a trip has never been easier.
            </div>

            <div className="buttons flex justify-start items-center gap-4">
              <AppButton id="apple-logo" slot1="Download on the" slot2="App Store"/>
              <AppButton id="google-play" slot1="Get it on" slot2="Google Play" />
            </div>
          </div>
          <img src="/public/assets/images/travel-apps.webp" alt="mobile apps help you"/>
        </div>
      </section>
  )
}

export default MobileApps;