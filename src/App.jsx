import { motion, spring, stagger } from "motion/react";
import NavHeader from "./components/navHeader";
import { Link } from "react-router-dom";
import "./App.css";
import urls from "./variables/url_links.json";
import { arrow_svg } from "./components/graphics";
import { containerAnimation, itemAnimation } from "./variables/motionVariables";

function MakeLink({ url, text }) {
  return (
    <a href={url} target="_blank" className="link-size-1">
      {text}
    </a>
  );
}

export function Foot() {
  return (
    <footer>
      <section id="footerLinks">
        <div>
          <span className="footerLinkHeader">Play</span>
          <Link to={"/downloads"} className="link-size-1">
            Downloads
          </Link>
        </div>
        <div>
          <span className="footerLinkHeader">Resources</span>
          <MakeLink url={urls.urls.simplyFellasWiki} text={"Wiki"} />
          <MakeLink url={urls.urls.simplyFellasGithub} text={"GitHub Repo"} />
        </div>
        <div>
          <span className="footerLinkHeader">Socials</span>
          <MakeLink url={urls.urls.discord} text={"Discord Server"} />
        </div>
      </section>

      <hr></hr>

      <section id="legal_disclaimer">
        <i>SimplyFellas is not associated with Mojang / Microsoft</i>
      </section>
    </footer>
  );
}

function App() {
  return (
    <>
      <NavHeader />

      <motion.main id="heroWrapper">
        {/* hero section*/}
        <motion.section
          id="hero"
          variants={containerAnimation}
          initial="hide"
          whileInView="show"

          viewport={{once:true}}
        >
          <motion.h1 id="heroTitle" variants={itemAnimation}>
            SimplyFellas
          </motion.h1>
          <motion.p id="heroDesc" variants={itemAnimation}>
            A vanilla+ modpack crafted to enhance the Minecraft you already know
            & love!
          </motion.p>

          <motion.div
            className="justify-row"
            id="heroLinkWrapper"
            variants={containerAnimation}
            initial="hide"
            whileInView="show"

            viewport={{once:true}}
          >
            <motion.span variants={itemAnimation}>
              <Link to={"/downloads"} className="linkButtons">
              {arrow_svg}
              <span className="sec-c-1 mb-auto">Download!</span>
              </Link>
            </motion.span>

            <motion.a
              href="https://wabbanode.com/affiliate/simplyfellas"
              target="_blank"
              className="linkButtons"
              id="wabbanode"
              variants={itemAnimation}
            >
              {arrow_svg}
              <motion.span className="sec-c-1 mb-auto">
                Need a Server?
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.section>
      </motion.main>

      <motion.section id="modShowcase"
        variants={containerAnimation}
        initial="hide"
        whileInView="show"

        viewport={{once:true}}
      >
        <h2>
          With <strong>150+</strong> mods, you'll always experience something
          new!
        </h2>
      </motion.section>

      <section id="about">
        <motion.section
          variants={containerAnimation}
          initial="hide"
          whileInView="show"

          viewport={{once:true}}
        >
          <h3>
            Automate your world with{" "}
            <a className="hrefLink" href={urls.urls.createMod}>
              Create!
            </a>
          </h3>
        </motion.section>

        <motion.section
          variants={containerAnimation}
          initial="hide"
          whileInView="show"

          viewport={{once:true}}
        >
          <h3>
            Find hidden treastures with{" "}
            <a className="hrefLink" href={urls.urls.moogStructuresMod}>
              Moog's Structures!
            </a>
          </h3>
        </motion.section>

        <motion.section
          variants={containerAnimation}
          initial="hide"
          whileInView="show"

          viewport={{once:true}}
        >
          <h3>
            Adopt your very own tiny, furry{" "}
            <a className="hrefLink" href={urls.urls.adorableHamstersMod}>
              Adorable Hamsters!
            </a>
          </h3>
        </motion.section>

        <motion.section
          variants={containerAnimation}
          initial="hide"
          whileInView="show"

          viewport={{once:true}}
        >
          <h3>
            Never run out of storage with{" "}
            <a className="hrefLink" href={urls.urls.sophisticatedStorageMod}>
              Sophisticated Storage!
            </a>
          </h3>
        </motion.section>

        <motion.section
          variants={containerAnimation}
          initial="hide"
          whileInView="show"

          viewport={{once:true}}
        >
          <h3>
            Do a little trolling with{" "}
            <a className="hrefLink" href={urls.urls.carryOnMod}>
              Carry On!
            </a>
          </h3>
        </motion.section>
      </section>

      <section className="mBlock16px">
        <h2>All of this and more! when you play SimplyFellas</h2>
        <h4>Download today!</h4>
      </section>

      <iframe
        id="discordEmbed"
        src="https://discord.com/widget?id=1452128644221767733&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>

      <div id="footerWrapper">
        <Foot />
      </div>
    </>
  );
}

export default App;
