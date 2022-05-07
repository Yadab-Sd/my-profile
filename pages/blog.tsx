import GraphicAnim from "@common/GraphicAnim/GraphicAnim";
import PageWrapper from "@common/PageWrapper";
import React, { ReactElement, useState } from "react";
import GraphicPage from "../components/common/GraphicPage/GraphicPage";
import ReactFluidScroll from "react-fluid-scroll";
import PageTitle from "@common/PageTitle";
import { colors } from "@utils/index";
import { motion } from "framer-motion";

const des = `I have contributed in various field. The medias are -`;

const sites = [
  "Medium",
  "Stackoverflow",
  "freecodecamp",
  "dev.to",
  "youtube",
  "quora",
  "Chrome Extensions",
  "Github",
  "Linkedn",
  "Facebook",
  "Leetcode",
];

const variants = {
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const child = {
  init: {
    opacity: 0,
    x: -50,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <PageWrapper title="Blog" description={des} items={sites}>
      <>
        <PageTitle title="Blog" description={""} items={sites} />
        <motion.div
          className="mt-10 lg:mt-20 flex flex-col items-start pb-12"
          variants={variants}
          initial="init"
          animate="enter"
          exit="exit"
        >
          <motion.a
            href="https://medium.com/@yadabsd/javascript-map-vs-foreach-vs-filter-vs-find-32eff92ca260"
            target="_blank"
            rel="noreferrer noopender"
            className="lg:w-3/4 mb-12"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            variants={child}
          >
            <div className="mr-auto flex flex-col-reverse lg:flex-row justify-between p-8 lg:p-12 shadow-lg hover:scale-[1.01] transition-transform duration-300">
              <div className="lg:mr-12">
                <h4 className="mb-4 text-xl lg:text-2xl font-semibold">
                  Javascript map vs forEach vs filter vs find
                </h4>
                <p className="line-clamp-3 three-line mb-4 text-sm text-accent-4">
                  Javascript has become more popular nowadays. There are a lot
                  of frameworks based on javascript that are used all over the
                  world. If anyone wants to grab that framework well then there
                  is a need to clear javascript basic concepts. One of the most
                  important parts of the javascript language is traversing
                  arrays. You need to print an array or evaluate each item in
                  the array.
                </p>
                <div className="flex flex-wrap items-center">
                  <span className="mr-4 mb-2 text-sm font-bold">Topic: </span>
                  <div className="flex">
                    <span
                      className="mb-2 mr-2 block rounded px-2 py-1 text-sm text-xs font-bold"
                      style={{
                        color: colors[0],
                        border: `1px solid ${colors[0]}`,
                      }}
                    >
                      Javascript
                    </span>
                    <span
                      className="mb-2 mr-2 block rounded px-2 py-1 text-sm text-xs font-bold"
                      style={{
                        color: colors[3],
                        border: `1px solid ${colors[3]}`,
                      }}
                    >
                      Array
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://miro.medium.com/fit/c/224/224/1*8Y_ZDPTAN9nySsagDA5ggQ.png"
                  alt=""
                  className="min-w-content block w-1/2 w-20 lg:w-96 mb-4 lg:mb-0"
                />
              </div>
            </div>
          </motion.a>
        </motion.div>
      </>
    </PageWrapper>
  );
};

export default BlogPage;
