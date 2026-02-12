import { motion } from "motion/react";

import { containerAnimation, itemAnimation } from "../variables/motionVariables";
import { arrow_svg, discord_svg, faq_svg, github_svg } from "./graphics";
import { Link } from "react-router";

import urls from "../jsons/url_links.json"

export function NavContents() {
  return (
      <motion.ul
        variants={containerAnimation}
        initial="hide"
        animate="show"
      >
        <motion.li variants={itemAnimation} whileTap={{scale:.9}}>
          <Link to={"/Downloads"}>
            {arrow_svg}
            <span>Download</span>
          </Link>
        </motion.li>

        <motion.li variants={itemAnimation} whileTap={{scale:.9}}>
          <a href={urls.urls.simplyFellasWiki} target="blank">
            {faq_svg}
            <span>FAQ</span>
          </a>
        </motion.li>

        <motion.li variants={itemAnimation} whileTap={{scale:.9}}>
          <a href={urls.urls.discord} target="_blank">
            {discord_svg}
            <span>Discord</span>
          </a>
        </motion.li>

        <motion.li variants={itemAnimation} whileTap={{scale:.9}}>
          <a href={urls.urls.simplyFellasGithub} target="_blank">
            {github_svg}
            <span>Github</span>
          </a>
        </motion.li>
      </motion.ul>
  )

}
