import { motion } from "motion/react";
import {
  containerAnimation,
  itemAnimation,
} from "../variables/motionVariables";
import { Link } from "react-router";

export default function NavHeader({ disabledButton }) {
  return (
    <motion.div id="stickyNavWrapper">
      <motion.header>
        <motion.div
          className="justify-row"
          variants={containerAnimation}
          initial="hide"
          animate="show"
        >
          <motion.img
            id="modpackLogo"
            variants={itemAnimation}
            src="/assets/SimplyFellasLogo.svg"
          />
          <motion.span variants={itemAnimation}>SimplyFellas</motion.span>
        </motion.div>

        <motion.nav id="headingNav">
          <motion.ul
            variants={containerAnimation}
            initial="hide"
            animate="show"
          >

            <motion.li variants={itemAnimation} aria-disabled>
              <Link to={"/Downloads"}>
                <img className="navLink_icon" src="/assets/arrow.svg"></img>
                <span>Download</span>
              </Link>
            </motion.li>

            <motion.li variants={itemAnimation}>
              <a href="https://github.com/SimplyFellas/SimplyFellasWiki" target="blank">
                <img className="navLink_icon" src="/assets/faq.svg"></img>
                <span>FAQ</span>
              </a>
            </motion.li>

            <motion.li variants={itemAnimation}>
              <a href="https://discord.gg/kycqpz8z4q" target="_blank">
                <img className="navLink_icon" src="/assets/discord.svg"></img>
                <span>Discord</span>
              </a>
            </motion.li>

            <motion.li variants={itemAnimation}>
              <a href="https://github.com/SimplyFellas" target="_blank">
                <img className="navLink_icon" src="/assets/github.svg"></img>
                <span>Github</span>
              </a>
            </motion.li>

          </motion.ul>
        </motion.nav>
      </motion.header>
    </motion.div>
  );
}
