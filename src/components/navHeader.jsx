import { motion } from "motion/react";
import {
  containerAnimation,
  itemAnimation,
} from "../variables/motionVariables";
import { Link } from "react-router";

export default function NavHeader() {
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
            <motion.li variants={itemAnimation}>
              <Link to={"/Downloads"}>
                <img className="navLink_icon" src="/assets/arrow.svg"></img>
                <span>Download</span>
              </Link>
            </motion.li>
            <motion.li variants={itemAnimation}>
              <img className="navLink_icon" src="/assets/faq.svg"></img>
              <span>FAQ</span>
            </motion.li>
            <motion.li variants={itemAnimation}>
              <img className="navLink_icon" src="/assets/discord.svg"></img>
              <span>Discord</span>
            </motion.li>
            <motion.li variants={itemAnimation}>
              <img className="navLink_icon" src="/assets/github.svg"></img>
              <span>Github</span>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </motion.header>
    </motion.div>
  );
}
