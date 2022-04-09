import { Button } from "@components/UI";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { MobileNav } from "./MobileNav";
import { colors, colors2, menus, spring, transition } from "@utils/index";
import { useTheme } from "next-themes";

function Header() {
  const [hovered, setHovered] = useState<number>();
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <nav className="home-nav">
        <div className="space-between hidden items-center justify-between lg:flex">
          <Link href="/">
            <div className="logo">Yadab</div>
          </Link>

          <ul className="nav-list">
            <Button variant="naked">
              <motion.a
                href={process.env.RESUME}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download Yadab's Resume"
              >
                Resume
              </motion.a>
            </Button>
            {menus.map((menu, i) => (
              <li key={menu.name}>
                <Link href={`${menu.link}`} passHref>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={menu.name}
                    className="z-5 relative"
                    onHoverStart={() => setHovered(i)}
                    onHoverEnd={() => setHovered(undefined)}
                  >
                    {hovered === i && (
                      <motion.span
                        initial={{
                          opacity: 1,
                          height: 1,
                          width: 1,
                          left: "50%",
                          top: "50%",
                          translateX: "-50%",
                          translateY: "-50%",
                        }}
                        animate={{
                          opacity: 0,
                          height: 70,
                          width: 70,
                          left: "50%",
                          top: "50%",
                          translateX: "-50%",
                          translateY: "-50%",
                        }}
                        transition={{ ...transition, duration: 1.2 }}
                        className="z-1 absolute rounded-full border border-primary"
                        style={{
                          borderColor: `${
                            colors2[
                              Math.floor(Math.random() * 10) % colors2.length
                            ]
                          }`,
                        }}
                      ></motion.span>
                    )}
                    {menu.name}
                  </motion.a>
                </Link>
              </li>
            ))}
            <li>
              <motion.a
                href={process.env.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                title="Go to Yadab's GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5" />
                <span className="header-hidden-text">GitHub</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href={process.env.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                title="Connect with Yadab on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5" />
                <span className="header-hidden-text">LinkedIn</span>
              </motion.a>
            </li>
            <li>
              <a
                onClick={() => {
                  theme === "dark" ? setTheme("light") : setTheme("dark");
                }}
              >
                <div className="switch" data-isOn={theme === "dark"}>
                  <motion.div className="handle" layout transition={spring} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
