import Logo from "../../UI/logo/logo";
import Icon from "../../UI/icons/icon/icon";
import NavBlock from "../../UI/navigation/nav-block/navBlock";

function Footer({ linksData }){

  /*const aboutNames = ["About Travel Together", "Contact us", "Features", "Careers"];
  const aboutLinks = ["https://google.com", "https://google.com", "https://google.com", "https://google.com"];*/

  /*const resourcesNames = ["Help center", "Blog", "Partnership"];
  const resourcesLinks = ["https://google.com", "https://google.com", "https://google.com"];*/

  /*const touchNames = ["Question or Feedback?", "We’d love to hear from you"];
  const touchLinks = ["https://google.com", "https://google.com"];*/

  let key = -1;

  const navLists = linksData.map(linksColumn => {
    key += 1;
    return (
        <NavBlock linksArray={linksColumn} key={key} />
    )
  })
  return (
      <footer className="footer text-template-footerLinks pt-32 pb-20">
        <div className="container">
          <nav className="flex justify-start gap-36 mb-24">
            <Logo classNames="w-44 h-28" link="/"/>

            <div className="nav-lists flex gap-44">
              {navLists}
            </div>
          </nav>

          <div className="info">
            <div className="payment flex justify-center gap-10 items-center mb-8 h-8">
              <Icon classNames="w-16" id="visa" />
              <Icon classNames="w-8" id="master-card" />
              <Icon classNames="w-24" id="paypal" />
            </div>
            <div className="rights text-center">
              © Copyright 2022 Travel Together. All Rights Reserved.
            </div></div>

          </div>
      </footer>
  )
}

export default Footer;