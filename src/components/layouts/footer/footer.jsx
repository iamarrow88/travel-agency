import Logo from "../../UI/logo/logo";
import Icon from "../../UI/icons/icon/icon";
import NavBlock from "../../UI/navigation/nav-block/navBlock";

function Footer(){

  const aboutNames = ["About Travel Together", "Contact us", "Features", "Careers"];
  const aboutLinks = ["https://google.com", "https://google.com", "https://google.com", "https://google.com"];

  const resourcesNames = ["Help center", "Blog", "Partnership"];
  const resourcesLinks = ["https://google.com", "https://google.com", "https://google.com"];

  const touchNames = ["Question or Feedback?", "We’d love to hear from you"];
  const touchLinks = ["https://google.com", "https://google.com"];

  return (
      <footer className="footer text-template-footerLinks pt-32 pb-20">
        <div className="container">
          <nav className="flex justify-start gap-36 mb-24">
            <Logo classNames="w-44 h-28"/>

            <div className="nav-lists flex gap-44">
              <NavBlock classNames="" namesArray={aboutNames} linksArray={aboutLinks} title="About us" />
              {/*<div className="nav-list">
                <h4>About us</h4>
                <NavList namesArray={aboutNames} linksArray={aboutLinks}/>
                <ul className="about">
                  <li className="about__item">
                    <a href="https://google.com">
                      About Travel Together
                    </a>
                  </li>
                  <li className="about__item">
                    <a href="https://google.com">
                      Contact us
                    </a>
                  </li>
                  <li className="about__item">
                    <a href="https://google.com">
                      Features
                    </a>
                  </li>
                  <li className="about__item">
                    <a href="https://google.com">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>*/}

              <NavBlock classNames="" namesArray={resourcesNames} linksArray={resourcesLinks} title="Resources" />

              <NavBlock classNames="" namesArray={touchNames} linksArray={touchLinks} title="Get in touch" />

              {/*<div className="nav-list">
                <h4>Resources</h4>
                <NavList namesArray={resourcesNames} linksArray={resourcesLinks}/>
                <ul className="about">
                  <li className="about__item">
                    <a href="https://google.com">
                      Help center
                    </a>
                  </li>
                  <li className="about__item">
                    <a href="https://google.com">
                      Blog
                    </a>
                  </li>
                  <li className="about__item">
                    <a href="https://google.com">
                      Partnership
                    </a>
                  </li>
                </ul>
              </div>*/}

              {/*<div className="nav-list">
                <h4>Get in touch</h4>
                <NavList namesArray={touchNames} linksArray={touchLinks}/>
                <ul className="about">
                  <li className="about__item">
                    <a href="https://google.com">
                      Question or Feedback?
                    </a>
                  </li>
                  <li className="about__item">
                    <a href="https://google.com">
                      We’d love to hear from you
                    </a>
                  </li>
                  <li className="socials">
                    <ul>
                      <li className="asocial__item">
                        <a href="https://google.com">
                          <Icon classNames="" id="" />
                        </a>
                      </li>

                      <li className="social__item">
                        <a href="https://google.com">
                          <Icon classNames="" id="" />
                        </a>
                      </li>

                      <li className="social__item">
                        <a href="https://google.com">
                          <Icon classNames="" id="" />
                        </a>
                      </li>

                    </ul>
                  </li>

                </ul>
              </div>*/}
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