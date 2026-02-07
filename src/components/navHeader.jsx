import { motion } from "motion/react";
import {
  containerAnimation,
  itemAnimation,
} from "../variables/motionVariables";
import { Link } from "react-router";
import { arrow_svg, discord_svg, faq_svg, github_svg, logo_svg } from "./graphics";
import Hambor from "./navDropdown";

export default function NavHeader({ disabledButton }) {
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

        {/* phone only nav section*/}
        <Hambor/>

        {/* tablet and desktop size nav*/}
        <motion.nav id="headingNav">
          <motion.ul
            variants={containerAnimation}
            initial="hide"
            animate="show"
          >

            <motion.li variants={itemAnimation} aria-disabled>
              <Link to={"/Downloads"}>
                {arrow_svg}
                <span>Download</span>
              </Link>
            </motion.li>

            <motion.li variants={itemAnimation}>
              <a href="https://github.com/SimplyFellas/SimplyFellasWiki" target="blank">
                {faq_svg}
                <span>FAQ</span>
              </a>
            </motion.li>

            <motion.li variants={itemAnimation}>
              <a href="https://discord.gg/kycqpz8z4q" target="_blank">
                {discord_svg}
                <span>Discord</span>
              </a>
            </motion.li>

            <motion.li variants={itemAnimation}>
              <a href="https://github.com/SimplyFellas" target="_blank">
                {github_svg}
                <span>Github</span>
              </a>
            </motion.li>

          </motion.ul>
        </motion.nav>
      </motion.header>
    </motion.div>
  );
}
