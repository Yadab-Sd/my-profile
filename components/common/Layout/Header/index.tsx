import { Button } from "@components/UI";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { motion, useCycle } from "framer-motion";
import { MobileNav } from "./MobileNav";
import { menus } from "./MenuItem";

function Header() {
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
                href="https://drive.google.com/file/d/1PgvpHThs5XjTwGZgib9ZTVLa8QbhulWp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download Yadab's Resume"
              >
                Resume
              </motion.a>
            </Button>
            {menus.map((menu) => (
              <li>
                <Link href={`${menu.link}`} passHref>
                  <motion.a
                    href="https://drive.google.com/file/d/1PgvpHThs5XjTwGZgib9ZTVLa8QbhulWp/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Download Alexander's Resume"
                  >
                    {menu.name}
                  </motion.a>
                </Link>
              </li>
            ))}
            <li>
              <motion.a
                href="https://github.com/GameDog9988"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Go to Alexander's GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5" />
                <span className="header-hidden-text">GitHub</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Connect with Alexander on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5" />
                <span className="header-hidden-text">LinkedIn</span>
              </motion.a>
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
