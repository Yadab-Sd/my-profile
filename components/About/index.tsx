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
            "mb-6 mt-20 mb-32 flex flex-col items-start justify-between md:mb-0 md:mt-0 md:mb-0 md:flex-row md:items-center",
            s.content
          )}
        >
          <div className="flex-grow md:w-6/12">
            <h2 className="mb-6 text-6xl font-bold relative">
              <motion.h2
                className={cn("fake-big", s.fakeBig)}
                style={{ y: yPosAnim, scale: scaleAnim }}
              >
                About
              </motion.h2>
              About
            </h2>
            <p className="font-lighter md:text-default text-sm text-secondary">
              For over a decade I had many opportunities to work in a vast
              spectrum of web technologies what let me gather a significant
              amount of various experience. Working for companies and
              individuals around the globe I met and learnt from amazing and
              ambitious people.
            </p>
          </div>
          <div className="hidden w-6/12 flex-grow lg:block">
            <img src="./download.png" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
