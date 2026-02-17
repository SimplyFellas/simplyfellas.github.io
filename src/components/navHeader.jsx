import { AnimatePresence, motion } from "motion/react";
import {
  containerAnimation,
  itemAnimation,
} from "../variables/motionVariables";
import { arrow_svg, discord_svg, faq_svg, github_svg, logo_svg } from "./graphics";
import { NavContents } from "./navContents";
import { useState } from "react";

export default function NavHeader() {

  let [navOpened, setNavOpened] = useState(false)

  function Hambor() {

    return (
      // button to trigger the dropdown
      <>
        <AnimatePresence>
          {
            navOpened &&
            <motion.nav
                key={0}
                id="phone_nav"
                initial={{ opacity: 0, scaleY: 0}}
                animate={{ opacity: 1, scaleY: "100%"}}
                exit={{ opacity: 0, scaleY: 0 }}>
              <NavContents />
            </motion.nav>
          }
        </AnimatePresence>
      </>
    )
  }

  return (
    <motion.div id="stickyNavWrapper">
      <motion.header>
        {/* logo area*/}
        <motion.div
          className="justify-row"
          variants={containerAnimation}
          initial="hide"
          animate="show"
        >
          <motion.div
            id="modpackLogo"
            variants={itemAnimation}
          >{logo_svg}</motion.div>
          <motion.span variants={itemAnimation}>SimplyFellas</motion.span>
        </motion.div>

        <motion.button
          id="navButton"
          onClick={() => { setNavOpened(!navOpened); }}
          variants={itemAnimation}
          initial="hide"
          animate="show"

          whileTap={{scale: .9}}
        >
        </motion.button>

        {/* tablet and desktop size nav*/}
        <motion.nav id="tablet_nav">
          <NavContents/>
        </motion.nav>
      </motion.header>

      {/* phone only nav section*/}
      <Hambor />
    </motion.div>
  );
}
