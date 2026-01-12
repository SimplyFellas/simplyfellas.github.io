import { motion } from "motion/react";
import {
  containerAnimation,
  itemAnimation,
} from "../variables/motionVariables";

export default function NavHeader() {
  return (
    <motion.div>
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
            <motion.li variants={itemAnimation}>Download</motion.li>
            <motion.li variants={itemAnimation}>FAQ</motion.li>
            <motion.li variants={itemAnimation}>Discord</motion.li>
            <motion.li variants={itemAnimation}>Github</motion.li>
          </motion.ul>
        </motion.nav>
      </motion.header>
    </motion.div>
  );
}
