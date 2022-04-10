import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { menus, spring } from "@utils/index";
import { useTheme } from "next-themes";
import { Button } from "@components/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  const { theme, setTheme } = useTheme();

  const child = {
    init: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.05, staggerDirection: -1 , delay: .5},
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div>
      <motion.ul variants={variants}>
        <li style={{ paddingBottom: "4rem" }}>
          <motion.div
            initial="init"
            animate={isOpen ? "enter" : "init"}
            variants={child}
            className="flex justify-end"
          >
            <div
              className="switch"
              data-isOn={theme === "dark"}
              onClick={() => {
                theme === "dark" ? setTheme("light") : setTheme("dark");
              }}
            >
              <motion.div className="handle" layout transition={spring} />
            </div>
          </motion.div>
        </li>
        {menus.map((item, i) => (
          <MenuItem i={i} key={i} />
        ))}

        <li className="flex items-center" style={{ marginTop: "4rem" }}>
          <motion.a
            initial="init"
            animate={isOpen ? "enter" : "init"}
            variants={child}
            href={process.env.RESUME}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Download Yadab's Resume"
            className="mr-4 mb-4 rounded-full bg-accent-8 px-4 py-2 text-white"
            style={{ background: "#111111" }}
          >
            Resume
          </motion.a>
          <motion.a
            initial="init"
            animate={isOpen ? "enter" : "init"}
            variants={child}
            href={process.env.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            title="Go to Yadab's GitHub"
            className="mr-4 mb-4 rounded-full bg-accent-8 p-3"
            style={{ background: "#111111" }}
          >
            <FontAwesomeIcon icon={faGithub} className="w-5 text-white" />
          </motion.a>
          <motion.a
            initial="init"
            animate={isOpen ? "enter" : "init"}
            variants={child}
            href={process.env.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            title="Connect with Yadab on LinkedIn"
            className="mr-4 mb-4 rounded-full bg-accent-8 p-3"
            style={{ background: "#111111" }}
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-5 text-white" />
          </motion.a>
        </li>
      </motion.ul>
    </div>
  );
};
