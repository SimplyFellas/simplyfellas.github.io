import { motion } from "motion/react";

import { containerAnimation, itemAnimation } from "../variables/motionVariables";
import { arrow_svg, discord_svg, faq_svg, github_svg } from "./graphics";
import { Link } from "react-router";

import urls from "../variables/url_links.json"

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
            <span className="link-size-1">Download</span>
          </Link>
        </motion.li>

        <motion.li variants={itemAnimation} whileTap={{scale:.9}}>
          <a href={urls.urls.simplyFellasWiki} target="blank">
            {faq_svg}
            <span className="link-size-1">FAQ</span>
          </a>
        </motion.li>

        <motion.li variants={itemAnimation} whileTap={{scale:.9}}>
          <a href={urls.urls.discord} target="_blank">
            {discord_svg}
            <span className="link-size-1">Discord</span>
          </a>
        </motion.li>

        <motion.li variants={itemAnimation} whileTap={{scale:.9}}>
          <a href={urls.urls.simplyFellasGithub} target="_blank">
            {github_svg}
            <span className="link-size-1">Github</span>
          </a>
        </motion.li>
      </motion.ul>
  )

}
