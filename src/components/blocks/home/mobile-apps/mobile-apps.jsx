import AppButton from "../../../UI/button/app-button/app-button";

function MobileApps({ sectionTitle, description, buttonsData }) {
  let key = -1;
  const buttons = buttonsData.map(buttonData => {
    key += 1;
    return (
        <AppButton link={buttonData.link} id={buttonData.svgID} slot1={buttonData.slot1} slot2={buttonData.slot2} key={key}/>
    )
  })
  return (
      <section className="mobile-apps px-10 mb-32">
        <div className="container bg-green-template rounded-3xl py-16 pl-16 pr-20 flex">
          <div className="text-block">
            <h2 className="sub-title mb-6">{sectionTitle}</h2>
            <div className="description w-2/4	mb-16">{description}</div>

            <div className="buttons flex justify-start items-center gap-4">
              {buttons}
            </div>
          </div>
          <img src="/public/assets/images/travel-apps.webp" alt="mobile apps help you"/>
        </div>
      </section>
  )
}

export default MobileApps;