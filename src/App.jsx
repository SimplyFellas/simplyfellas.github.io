import { motion, spring, stagger } from "motion/react";
import NavHeader from "./components/navHeader";
import { Link } from "react-router";
import ".//App.css";
import urls from ".//variables/url_links.json"
import { arrow_svg } from "./components/graphics";


function MakeLink({ url, text }) {
  return (
    <a href={url} target="_blank" className="link-size-1">{text}</a>
  )
}

export function Foot() {
  return (
    <footer>
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

      <hr></hr>

      <section id="legal_disclaimer">
        <i>SimplyFellas is not associated with Mojang / Microsoft</i>
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
              className="buttonShape gradient1-toRight"
            >
              {arrow_svg}
              <span className="sec-c-1">Download!</span>
            </Link>

            <a
              id="wabbanodeLink"
              href="https://wabbanode.com/affiliate/simplyfellas"
              target="_blank"
              className="buttonShape gradient1-toRight"
            >
              {arrow_svg}
              <motion.span className="sec-c-1">Need a Server?</motion.span>
            </a>
          </div>
        </section>
      </motion.main>

      <section id="modShowcase">
        <h2>Start your adventure with <strong>150+</strong> curated mods!</h2>
      </section>

      <section id="about">

        <section>
          <h3>Automate your world with <a className="hrefLink" href={urls.urls.createMod}>Create!</a></h3>
        </section>

        <section>
          <h3>Find hidden treastures with <a className="hrefLink" href={urls.urls.moogStructuresMod}>Moog's Structures!</a></h3>
        </section>

        <section>
          <h3>Adopt your very own tiny, furry <a className="hrefLink" href={urls.urls.adorableHamstersMod}>Adorable Hamsters!</a></h3>
        </section>

        <section>
          <h3>Never run out of storage with <a className="hrefLink" href={urls.urls.sophisticatedStorageMod}>Sophisticated Storage!</a></h3>
        </section>

        <section>
          <h3>Do a little trolling with <a className="hrefLink" href={urls.urls.carryOnMod}>Carry On!</a></h3>
        </section>

      </section>

      <section className="mBlock16px">
        <h2>All of this and more! when you play SimplyFellas</h2>
        <h4>Download today!</h4>
      </section>

      <iframe id="discordEmbed" src="https://discord.com/widget?id=1452128644221767733&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

      <div id="footerWrapper">
        <Foot />
      </div>
    </>
  );
}

export default App;
