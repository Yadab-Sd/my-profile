import Container from "@common/Container";
import React from "react";
import s from "./About.module.css";
import cn from "classnames";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function About() {
  const { scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -80]);

  return (
    <div className={s.root}>
      <Container>
        <div
          className={cn(
            "flex flex-col items-start justify-between md:flex-row md:items-center mb-6 md:mb-0 mt-20 md:mt-0 mb-32 md:mb-0",
            s.content
          )}
        >
          <motion.h2
            className={cn("fake-big", s.fakeBig)}
            style={{ y: yPosAnim, scale: scaleAnim }}
          >
            About
          </motion.h2>
          <div className="md:w-6/12 flex-grow">
            <h2 className="mb-6 text-6xl font-bold">About</h2>
            <p className="font-lighter text-secondary text-sm md:text-default">
              For over a decade I had many opportunities to work in a vast
              spectrum of web technologies what let me gather a significant
              amount of various experience. Working for companies and
              individuals around the globe I met and learnt from amazing and
              ambitious people.
            </p>
          </div>
          <div className="w-6/12 flex-grow hidden lg:block">
            <img src="./download.png" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
