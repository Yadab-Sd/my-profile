import { Button } from "@components/UI";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { MobileNav } from "./MobileNav";
import { colors, colors2, menus, spring, transition } from "@utils/index";
import { useTheme } from "next-themes";
import CustomCursorContext from "@components/UI/context/CustomCursorContext";
import cn from "classnames";
import { useRouter } from "next/router";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { LeetcodeIcon } from "@components/UI/icons";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Resume from "@common/Resume/Resume";

function Header({ start = false }: { start?: boolean }) {
  const [showInoice, setShowInvoice] = useState(false);
  const [hovered, setHovered] = useState<number>();
  const { theme, setTheme } = useTheme();
  const { type, setType } = useContext(CustomCursorContext);
  const router = useRouter();
  const variants = {
    init: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const child = {
    init: {
      opacity: 0,
      y: -10,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header>
      {showInoice && ( // @ts-ignore
        <PDFViewer
          // @ts-ignore
          style={{
            position: "fixed",
            width: "100vw",
            height: "1200px",
            left: 0,
            top: 60,
            zIndex: 10000000
          }}
          className="shadow-lg"
        >
          <Resume />
        </PDFViewer>
      )}
      <nav className="home-nav">
        <div>
          <button
            type="button"
            title="Order Invoice"
            className="ml-1"
            onClick={() => setShowInvoice(!showInoice)}
          >
            Download
          </button>

          {showInoice && (
            // @ts-ignore
            <PDFDownloadLink
              document={<Resume />}
              fileName="Yadab-Sutradhar-Resume.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading..." : "Download"
              }
            </PDFDownloadLink>
          )}
        </div>
        <motion.div
          initial="init"
          animate={!start ? "enter" : "init"}
          exit="exit"
          variants={variants}
          className="space-between hidden items-center justify-between lg:flex"
        >
          <Link href="/?noanim=1">
            <a
              className="logo"
              onMouseOver={() => setType("hamburger")}
              onMouseLeave={() => setType("default")}
            >
              Yadab
            </a>
          </Link>

          <ul className="nav-list">
            <Button variant="naked">
              <motion.a
                variants={child}
                href={process.env.RESUME}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download Yadab's Resume"
                onMouseOver={() => setType("hamburger")}
                onMouseLeave={() => setType("default")}
              >
                Resume
              </motion.a>
            </Button>
            {menus.map((menu, i) => (
              <li
                key={menu.name}
                className={cn({ "mr-6": i === menus?.length - 1 })}
              >
                <Link href={`${menu.link}`} passHref>
                  <motion.a
                    variants={child}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={menu.name}
                    className={cn("z-5 relative", {
                      "text-secondry": router.pathname === menu.link,
                    })}
                    onHoverStart={() => {
                      setHovered(i), setType("hamburger");
                    }}
                    onHoverEnd={() => {
                      setHovered(undefined), setType("default");
                    }}
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
                    <span
                      style={
                        router.pathname === menu.link
                          ? { textShadow: "0 0 15px var(--accent)" }
                          : {}
                      }
                    >
                      {menu.name?.slice(0, 1)}
                    </span>
                    <span
                      style={
                        router.pathname === menu.link
                          ? { textShadow: "0 0 10px var(--accent2)" }
                          : {}
                      }
                    >
                      {menu.name?.slice(1, 2)}
                    </span>
                    <span
                      style={
                        router.pathname === menu.link
                          ? { textShadow: "0 0 15px var(--accent2)" }
                          : {}
                      }
                    >
                      {menu.name?.slice(2, 3)}
                    </span>
                    {menu.name?.slice(3)}
                  </motion.a>
                </Link>
              </li>
            ))}
            <li style={{ padding: "0 8px" }}>
              <motion.a
                variants={child}
                href={process.env.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                title="Go to Yadab's GitHub"
                onMouseOver={() => setType("hamburger")}
                onMouseLeave={() => setType("default")}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ width: 20, height: 18, marginTop: 3 }}
                />
                <span className="header-hidden-text">GitHub</span>
              </motion.a>
            </li>
            <li style={{ padding: "0 8px" }}>
              <motion.a
                variants={child}
                href={process.env.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                title="Connect with Yadab on LinkedIn"
                onMouseOver={() => setType("hamburger")}
                onMouseLeave={() => setType("default")}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    width: 20,
                    height: 18,
                    marginTop: 3,
                  }}
                />
                <span className="header-hidden-text">LinkedIn</span>
              </motion.a>
            </li>
            <li style={{ padding: "0 8px" }}>
              <motion.a
                variants={child}
                href={process.env.STACKOVERFLOW}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                title="Yadab on Stackoverflow"
                onMouseOver={() => setType("hamburger")}
                onMouseLeave={() => setType("default")}
              >
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  style={{ width: 20, height: 18, marginTop: 3 }}
                />
                <span className="header-hidden-text">Stackoverflow</span>
              </motion.a>
            </li>
            <li style={{ padding: "0 8px" }}>
              <motion.a
                variants={child}
                href={process.env.LEETCODE}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                title="Yadab on LeetCode"
                onMouseOver={() => setType("hamburger")}
                onMouseLeave={() => setType("default")}
              >
                <LeetcodeIcon
                  style={{
                    width: 20,
                    height: 18,
                    marginTop: 3,
                    fill: "var(--accent-8)",
                  }}
                />
                <span className="header-hidden-text">LeetCode</span>
              </motion.a>
            </li>
            <li>
              <button
                className="switch"
                data-isOn={theme === "dark"}
                onClick={() => {
                  theme === "dark" ? setTheme("light") : setTheme("dark");
                }}
                onMouseOver={() => setType("hamburger")}
                onMouseLeave={() => setType("default")}
              >
                <motion.div className="handle" layout transition={spring} />
              </button>
            </li>
          </ul>
        </motion.div>
      </nav>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
