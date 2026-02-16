import { motion, spring, stagger } from "motion/react";
import NavHeader from "./components/navHeader";
import { Link } from "react-router";
import ".//App.css";
import urls from ".//jsons/url_links.json"
import { arrow_svg } from "./components/graphics";


function MakeLink({ url, text }) {
  return (
    <a href={url} target="_blank" className="link-size-1">{text}</a>
  )
}

export function Foot() {
  return (
    <footer id="footerWrapper">
      <section id="footerLinks">
        <div>
          <span className="footerLinkHeader">Play</span>
          <Link to={"/downloads"} className="link-size-1">Downloads</Link>
        </div>
        <div>
          <span className="footerLinkHeader">Resources</span>
          <MakeLink url={urls.urls.simplyFellasWiki} text={"Wiki"}/>
        </div>
        <div>
          <span className="footerLinkHeader">Socials</span>
          <MakeLink url={urls.urls.discord} text={"Discord Server"}/>
          <MakeLink url={urls.urls.simplyFellasGithub} text={"GitHub Repo"}/>
        </div>
      </section>

      <section id="legal_disclaimer">
        <i>SimplyFellas does not own Minecraft and is not associated with Mojang / Microsoft</i>
      </section>
    </footer>
  )
}

function App() {
  return (
    <>
      <NavHeader />

      {/* hero section*/}
      <motion.main id="heroWrapper">
        <section id="hero">
          <h1 className="acc-c-1">SimplyFellas</h1>
          <motion.p initial={{ scale: 1, transition: { ease: "backOut", duration: 1} }} whileHover={{ scale: 1.3, transition: { ease: "anticipate", duration: .5}}}>
            A vanilla+ modpack crafted to enhance the Minecraft you already know
            & love!
          </motion.p>

          <div className="justify-row" id="heroLinkWrapper">

            <Link
              to={"/downloads"}
              id="downloadButton"
              className="buttonShape gradient1-toRight buttonHover1"
            >
              {arrow_svg}
              <span className="sec-c-1">Download!</span>
            </Link>

            <a
              id="wabbanodeLink"
              href="https://wabbanode.com/affiliate/simplyfellas"
              target="_blank"
              className="buttonShape gradient1-toRight buttonHover1"
            >
              {arrow_svg}
              <motion.span className="sec-c-1">Need a Server?</motion.span>
            </a>
          </div>
        </section>
      </motion.main>

      <section id="modShowcase"></section>

      <section id="about"></section>

      <Foot />
    </>
  );
}

export default App;
