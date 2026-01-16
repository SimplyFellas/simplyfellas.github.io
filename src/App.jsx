import { motion, spring, stagger } from "motion/react";
import NavHeader from "./components/navHeader";
import { Link } from "react-router";
import ".//App.css";

function App() {
  return (
    <>
      <NavHeader />

      <motion.main id="heroContent">
        {/* left side*/}
        <section id="leftSide">
          <h1>SimplyFellas</h1>
          <p>
            A vanilla+ modpack created to enhance the Minecraft you already know
            & love!
          </p>

          <Link
            to={"/Downloads"}
            id="downloadButton"
            className="buttonShape gradient1-toRight"
          >
            <img src="/assets/arrow.svg"></img>
            <span className="text-bolder sec-c-1">Download!</span>
          </Link>
          <div id="wabbanodeLink">
            <a
              href="https://wabbanode.com/affiliate/simplyfellas"
              target="_blank"
              className="buttonShape gradient1-toRight"
            >
              <img src="/assets/arrow.svg" className="rot-225"></img>
              <span className="text-bolder sec-c-1">Need a Server?</span>
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
        <section className="justify-row" id="footerLinks">
          <div>Downloads</div>
          <div>Resources</div>
          <div>Socials</div>
        </section>
      </footer>

      <div id="goBackBar"></div>
    </>
  );
}

export default App;
