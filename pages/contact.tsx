import GraphicAnim from "@common/GraphicAnim/GraphicAnim";
import PageWrapper from "@common/PageWrapper";
import React, { ReactElement } from "react";
import GraphicPage from "../components/common/GraphicPage/GraphicPage";
import ReactFluidScroll from "react-fluid-scroll";
import PageTitle from "@common/PageTitle";
import { SkillsAnimation } from "@components/UI";
import AboutAnimation from "@components/UI/AboutAnimation";
import { Main } from "next/document";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faMobile,
  faPhone,
  faPhoneAlt,
  faPhoneFlip,
  faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "@utils/index";

const des = `Have a sweet conversation - `;

const contacts = ["+880 1733 267990", "yadab.sd2013@gmail.com"];

const anim = {
  init: {
    opacity: 0,
    x: 100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1,
    },
  },
};

const ContactPage = () => {
  return (
    <PageWrapper title="Contact" description={des} items={contacts}>
      <>
        <PageTitle title="Contact" description={""} items={[]} />
        <div className="relative flex flex-wrap lg:flex-nowrap justify-between">
          <div className="mt-24 flex-grow flex flex-col justify-between min-h-full">
            <ul>
              <li className="mb-4 flex items-start text-sm text-accent-4">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="mr-4 mt-1"
                  style={{ color: colors[0] }}
                  width={14}
                />{" "}
                <a href="tel: +8801733267990">+8801733267990</a>
              </li>
              <li className="mb-4 flex items-start text-sm text-accent-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-4 mt-1"
                  style={{ color: colors[1] }}
                  width={14}
                />{" "}
                <a href="mailto: yadab.sd2013@gmail.com">
                  yadab.sd2013@gmail.com
                </a>
              </li>
              <li className="mb-4 flex items-start text-sm text-accent-4">
                <FontAwesomeIcon
                  icon={faHome}
                  className="mr-4 mt-1"
                  style={{ color: colors[2] }}
                  width={14}
                />
                <span>
                  <address>A-61/2, Khilkhet, Dhaka-1229,</address>
                  <address>Bangladesh</address>
                </span>
              </li>
            </ul>
            <div className="tems-center mt-16 lg:mt-auto text-accent-4 mb-16 lg:mb-16">
              <p className="mr-4 text-sm">Want a conversation ?</p>
              <a
                href="https://calendar.google.com/calendar/u/0/r"
                target="_blank"
                rel="noreferrer"
                className="ml-4 mt-2 flex items-center text-xs"
              >
                - Schedule here
                <img
                  src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_29_2x.png"
                  alt=""
                  height="30"
                  width="30"
                  className="ml-2"
                />
              </a>
            </div>
          </div>
          <motion.div initial="init" animate={anim.enter} variants={anim}>
            <AboutAnimation />
          </motion.div>
          <span className="contact-layer" />
        </div>
      </>
    </PageWrapper>
  );
};

export default ContactPage;
