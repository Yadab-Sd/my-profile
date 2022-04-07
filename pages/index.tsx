import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

interface PageProps {
  section: any;
}

const Home: NextPage<PageProps> = ({ section }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "auto";
  };

  console.log("section", section, animationComplete);

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
            duration: 1.5,
            scale: 30,
            ease: "power3.out",
            onComplete: animation,
          })
          .from(".after-animation", {
            duration: .5,
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
            ease: "bounce.in",
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title>Yadab Sutradhar | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Website for Yadab Sutradhar, a software engineer with 3 years professional experience. Skilled with React, Next.js, JavaScript, TypeScript, AngularJs, VueJs, TailwindCSS, Sass, Node.js."
        ></meta>
        <meta property="og:url" content="https://agrattan.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {animationComplete === false && <IntroOverlay />} */}

      <div className="after-animation">
        <Header />
        <main className="main-home">
          <div className="cta">
            <div className="title w-6/12 font-bold">
              <h2 className="mb-4 whitespace-nowrap text-4xl text-secondary">
                I am
              </h2>
              <h2 className="playful text-8xl tracking-wide">
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
            <i className="text-xs font-light text-secondary">{"<script>"}</i>
            <p className="ml-4 flex text-accent">
              <h4 className="mr-2 font-mono text-2xl text-secondary">Love</h4>
              <Typed
                strings={["Programming", "Designing", "Coding"]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="font-mono text-2xl text-secondary"
              />{" "}
            </p>
            <i className="text-xs font-light text-secondary">{"</script>"}</i>
          </div>

          <button className="scroll-indicator" onClick={executeScroll}>
            <span>Scroll</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-4 font-semibold"
            />
          </button>
        </main>

        <div className="section-container" ref={sectionsRef}>
          <div className="section" id={section}>
            <About />
          </div>
          <div className="section" id={section}>
            <Skill />
          </div>
          <div className="section" id={section}>
            <Portfolio />
          </div>
        </div>

        <footer className="relative flex">
          <h2 className="mb-6 text-2xl font-bold">Connect with Me</h2>
          <ul className="footer-links">
            <li className="mr-6">
              <Button variant="naked">
                <motion.a
                  href="https://drive.google.com/file/d/1PgvpHThs5XjTwGZgib9ZTVLa8QbhulWp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Download Alexander's Resume"
                >
                  Resume
                </motion.a>
              </Button>
            </li>
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
                <span className="footer-hidden-text">GitHub</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Connect with Alexander on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5" />
                <span className="footer-hidden-text">GitHub</span>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://twitter.com/agrattan0820"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Follow Alexander on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5" />
                <span className="footer-hidden-text">Twitter</span>
              </motion.a>
            </li>
          </ul>
          <img
            src="/bg-o-3.svg"
            className="absolute bottom-0 left-0 w-6/12 opacity-30"
          />
          <p className=""></p>
        </footer>
      </div>
    </motion.div>
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
