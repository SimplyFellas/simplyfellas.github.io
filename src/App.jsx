import { motion, spring, stagger } from "motion/react";
import NavHeader from "./components/navHeader";
import { Link } from "react-router";
import ".//App.css";
import urls from ".//jsons/url_links.json"

function App() {

  function MakeLink({ url, text }) {
    return (
      <a href={url} target="_blank" className="footerLink">{text}</a>
    )
  }

  return (
    <>
      <NavHeader />

      <motion.main id="heroContent">
        {/* left side*/}
        <section id="leftSide">
          <h1>SimplyFellas</h1>
          <p>
            A vanilla+ modpack crafted to enhance the Minecraft you already know
            & love!
          </p>

          <div className="justify-row">

            <Link
              to={"/downloads"}
              id="downloadButton"
              className="buttonShape gradient1-toRight buttonHover1"
            >
              <img src="/assets/arrow.svg"></img>
              <span className="sec-c-1">Download!</span>
            </Link>

            <a
              id="wabbanodeLink"
              href="https://wabbanode.com/affiliate/simplyfellas"
              target="_blank"
              className="buttonShape gradient1-toRight buttonHover1"
            >
              <img src="/assets/arrow.svg" className="rot-225"></img>
              <span className="sec-c-1">Need a Server?</span>
            </a>
          </div>

        </section>

        {/* right side*/}
        <section id="rightSide">
          <img src="/assets/simplyFellas_1080.png"></img>
        </section>
      </motion.main>

      <section id="modShowcase"></section>

      <section id="about"></section>

      <footer id="footerContent">
        <section className="justify-row">
          <img src={"/assets/SimplyFellasLogo.svg"}></img>
          <span className="pri-c-1">SimplyFellas</span>
        </section>
        <section id="footerLinks">
          <div>
            <span className="footerLinkHeader">Downloads</span>
            <div>
              <Link to={"/downloads"} className="footerLink">Downloads</Link>
            </div>
          </div>
          <div>
            <span className="footerLinkHeader">Resources</span>
            <div className="justify-col">
              <MakeLink url={urls.urls.simplyFellasWiki} text={"Github Wiki!"}/>
            </div>

          </div>
          <div>
            <span className="footerLinkHeader">Socials</span>
            <div className="justify-col">
              <MakeLink url={urls.urls.discord} text={"Discord Server!"}/>
              <MakeLink url={urls.urls.simplyFellasGithub} text={"GitHub Repo"}/>
            </div>
          </div>
        </section>
      </footer>

      <div id="goBackBar"></div>
    </>
  );
}

export default App;
