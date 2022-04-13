import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Button, IntroOverlay } from "@components/UI";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { HashObstacles } from "@components/UI";
import Typed from "react-typed";
import Header from "@common/Layout/Header";
import About from "@components/About";
import Skill from "@components/Skill";
import Portfolio from "@components/Portfolio";
import { transition } from "@utils/index";
import PageHead from "@common/PageHead";
import SmoothScroll from "@common/SmoothScroll";

interface PageProps {
  section: any;
}

const Home: NextPage<PageProps> = ({ section }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const [scrollerHeight, setcSrollerHeight] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -50]);

  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "auto";
  };

  const sectionsRef: any = useRef(null);
  const executeScroll = () => sectionsRef.current?.scrollIntoView();
  const scrollToSection = () => {
    if (typeof window !== "undefined") {
      if (section) {
        // Use the hash to find the first element with that id
        const element = document.getElementById(section);

        if (element) {
          // Smooth scroll to that elment
          element.scrollIntoView();
        }
      }
    }
  };
  useEffect(() => {
    // Inner Page height for mobile devices
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // GSAP animation
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    let sections = gsap.utils.toArray(".section");
    let mediaQuery = window.matchMedia("(min-width: 967px)");

    const homeAnimation = (animation: () => void) => {
      if (!section) {
        tl.to(".ball, .ball2, .ball3", {
          duration: 2.5,
          y: "100vh",
          ease: "bounce.out",
        })
          .to(".ball, .ball2, .ball3", {
            duration: 0.8,
            scale: 30,
            ease: "power3.out",
            onComplete: animation,
          })
          .from(".after-animation", {
            duration: 0.5,
            opacity: 0,
            ease: "power3.out",
          })
          .from(".title", {
            duration: 0.2,
            y: 100,
            delay: 0.1,
            opacity: 0,
            ease: "power3.out",
          })
          .from(".peep-image", {
            duration: 1,
            scale: 0,
            opacity: 0,
            ease: "spring",
          })
          .from(".job-title", {
            duration: 0.5,
            y: 100,
            opacity: 0,
            ease: "power3.out",
          })
          .from(".scroll-indicator", {
            duration: 0.5,
            y: 100,
            opacity: 0,
            ease: "power3.out",
          });
      } else {
        completeAnimation();
        scrollToSection();
      }

      if (mediaQuery.matches) {
        sections.forEach((section: any) => {
          let tlSection = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          });
          let sectionImage = section?.querySelector("img");
          let sectionInfo = section?.querySelector(".section-info");

          tlSection
            .from(sectionImage, {
              x: -300,
              opacity: 0,
            })
            .from(sectionInfo, {
              x: 300,
              opacity: 0,
            });
        });
      } else {
        sections.forEach((section: any) => {
          let tlSection = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          });
          let sectionImage = section?.querySelector("img");
          let sectionInfo = section?.querySelector(".section-info");

          tlSection
            .from(sectionImage, {
              y: 100,
              opacity: 0,
            })
            .from(sectionInfo, {
              y: 100,
              opacity: 0,
            });
        });
      }

      let tlFooter = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top center",
          end: "top top",
          scrub: 1,
        },
      });

      tlFooter
        .from("footer h2", {
          y: -100,
          opacity: 0,
          duration: 0.6,
        })
        .from("footer .footer-links", {
          y: 100,
          opacity: 0,
          duration: 0.6,
        });
    };

    homeAnimation(completeAnimation);
  }, []);

  useEffect(() => {
    var sbHeight =
      window.innerHeight * (window.innerHeight / document.body.offsetHeight);
    let mobile = window.matchMedia("(max-width: 480px)");
    let tab = window.matchMedia("(min-width: 481px)");
    let desktop = window.matchMedia("(min-width: 1200px)");

    if (mobile?.matches) {
      setcSrollerHeight(sbHeight || 109);
    } else if (tab?.matches) {
      setcSrollerHeight(sbHeight || 200);
    }
    if (desktop?.matches) {
      setcSrollerHeight(sbHeight || 200);
    }
    console.log("sbHeight", sbHeight);
  }, [animationComplete]);

  return (
    <>
      <SmoothScroll>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container"
        >
          <PageHead />
          {animationComplete === false && <IntroOverlay />}
          <div className="after-animation">
            <Header start={!animationComplete} />
            <main className="main-home">
              <div className="cta">
                <div className="title w-6/12 font-bold">
                  <h2 className="mb-4 whitespace-nowrap text-2xl text-secondary lg:text-4xl">
                    I am
                  </h2>
                  <h2 className="playful text-6xl tracking-wide md:text-7xl lg:text-8xl">
                    Software Engineer
                  </h2>
                </div>
                <div className="peep-image w-min">
                  {/* <img
              src="/images/My_Peep.png"
              alt="My Peep"
              className="peep-image"
            /> */}
                  <HashObstacles />
                </div>
              </div>

              <div className="job-title mt-8">
                <i className="text-xs font-light text-secondary">
                  {"<script>"}
                </i>
                <p className="ml-4 flex text-accent">
                  <h4 className="mr-2 font-mono text-2xl text-secondary">
                    Love
                  </h4>
                  <Typed
                    strings={["Programming", "Designing", "Coding"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    className="font-mono text-2xl text-secondary"
                  />{" "}
                </p>
                <i className="text-xs font-light text-secondary">
                  {"</script>"}
                </i>
              </div>

              <button className="scroll-indicator text-xs md:text-sm">
                <span>Scroll</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="playful-scroll w-4 font-semibold"
                />
              </button>
            </main>

            <div className="section-container" ref={sectionsRef}>
              <div className="section" id={section}>
                <About />
              </div>
              <div className="" id={section}>
                <Skill />
              </div>
              <div className="portfolio" id={section}>
                <Portfolio />
              </div>
            </div>

            <footer style={{ height: "100vh", minHeight: "600px" }}>
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={footerInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="shutter-black w-screen bg-black"
                style={{
                  height: "50vh",
                  background:
                    "linear-gradient(70deg, black calc(100% - 200px), transparent)",
                  width: "calc(100vw + 200px)",
                }}
              ></motion.div>
              <div className="footer-content flex w-full flex-col items-center">
                <h2 className="relative mb-6 text-2xl font-bold text-white lg:text-4xl">
                  <motion.h3
                    className="fake-big footer-big-fake z-10 w-screen text-white"
                    style={{
                      y: yPosAnim,
                      scale: scaleAnim,
                    }}
                  >
                    Connect
                  </motion.h3>
                  Connect with Me
                </h2>
                <ul className="footer-links flex flex-wrap justify-center">
                  <li className="lg:flex-0 mr-0 mb-4 w-full flex-grow md:mr-6 md:mb-0 md:w-auto">
                    <motion.a
                      href={process.env.RESUME}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Download Yadab's Resume"
                      className="grad-button"
                    >
                      Resume
                    </motion.a>
                  </li>
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
                      <span className="footer-hidden-text">GitHub</span>
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href={process.env.LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      title="Connect with Yadab on LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-5" />
                      <span className="footer-hidden-text">Linkedin</span>
                    </motion.a>
                  </li>
                </ul>
              </div>
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={footerInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="shutter-black relative w-screen bg-black"
                style={{
                  height: "calc(50vh + 1px)",
                  background:
                    "linear-gradient(70deg, black calc(100% - 200px), transparent)",
                  width: "calc(100vw + 200px)",
                  marginTop: -1,
                }}
                onViewportEnter={() => setFooterInView(true)}
                onViewportLeave={() => setFooterInView(false)}
              ></motion.div>
            </footer>
            {/* <div
              className="w-full bg-black"
              style={{ height: scrollerHeight + 1, marginTop: -1 }}
            ></div> */}
          </div>
        </motion.div>
      </SmoothScroll>
    </>
  );
};

export default Home;

export async function getStaticProps(context: { query: any }) {
  const { query } = context;

  const section = query?.section ?? false;

  return {
    props: {
      section,
    }, // will be passed to the page component as props
  };
}
