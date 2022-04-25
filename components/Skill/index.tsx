import Container from "@common/Container";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Skill() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% scrolled down
  });

  let easing = [0.6, -0.05, 0.01, 2];

  const scaleUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 5, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const animation = useAnimation();

  useEffect(() => {
    animation.start({ opacity: 0 });
  }, []);

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1 });
    }
  }, [inView]);

  return (
    <div>
      <Container>
        <div className="about" ref={ref}>
          <div className="inner-about mb-6">
            <div className="md:flex items-center justify-between ">
              <div className="md:mr-12">
                <h3 className="font-header mb-8 text-lg font-bold uppercase text-secondary md:text-2xl">
                  My Stack
                </h3>
                <div className="flex max-w-sm flex-wrap lg:max-w-md xl:max-w-lg mb-6 md:mb-0">
                  <div className="flex pb-4 pr-8">
                    <span data-tip="HTML 5">
                      <img
                        src="/skill/html5.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="HTML 5"
                      />
                    </span>
                  </div>
                  <div className="flex pb-4 pr-8">
                    <span data-tip="CSS 3">
                      <img
                        src="/skill/css3.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="CSS 3"
                      />
                    </span>
                  </div>
                  <div className="flex pb-4 pr-8">
                    <span data-tip="JavaScript">
                      <img
                        src="/skill/javascript.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="JavaScript"
                      />
                    </span>
                  </div>
                  <div className="flex pb-4 pr-8">
                    <span data-tip="React">
                      <img
                        src="/skill/react.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="React"
                      />
                    </span>
                  </div>
                  <div className="flex pb-4 pr-8">
                    <span data-tip="Gatsby">
                      <img
                        src="/skill/gatsby.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="Gatsby"
                      />
                    </span>
                  </div>
                  <div className="flex pb-4 pr-8">
                    <span data-tip="GraphQL">
                      <img
                        src="/skill/graphql.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="GraphQL"
                      />
                    </span>
                  </div>
                  <div className="flex pb-4 pr-8">
                    <span data-tip="Sass">
                      <img
                        src="/skill/sass.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="Sass"
                      />
                    </span>
                  </div>
                  <div className="flex pb-4 pr-8">
                    <span data-tip="Tailwind CSS">
                      <img
                        src="/skill/tailwindcss.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="Tailwind CSS"
                      />
                    </span>
                  </div>
                  <div className="flex pb-4 pr-8">
                    <span data-tip="Git">
                      <img
                        src="/skill/git.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="Git"
                      />
                    </span>
                  </div>
                  <div className="flex pb-4 pr-8">
                    <span data-tip="NextJs">
                      <img
                        src="/skill/nextjs.svg"
                        className="w-10 transform transition duration-500 ease-in-out hover:scale-110 md:w-16"
                        alt="NextJS"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="skill flex max-w-2xl grow">
                <motion.div
                  variants={stagger}
                  className="skill-root w-full flex-grow"
                >
                  <div className="mx-2 mb-3">
                    <span className="font-mono text-xs">
                      ReactJs
                    </span>
                    <div className="slider">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, easings: easing }}
                        variants={{
                          visible: { width: "80%" },
                          hidden: { width: 0 },
                        }}
                        className="thumb thumb1"
                      >
                        <span className="tooltip">Advance</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="mx-2 mb-3">
                    <span className="font-mono text-xs">NextJs</span>
                    <div className="slider">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, easings: easing }}
                        variants={{
                          visible: { width: "70%" },
                          hidden: { width: 0 },
                        }}
                        className="thumb thumb2"
                      >
                        <span className="tooltip">Better</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="mx-2 mb-3">
                    <span className="font-mono text-xs">AngularJs</span>
                    <div className="slider">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, easings: easing }}
                        variants={{
                          visible: { width: "60%" },
                          hidden: { width: 0 },
                        }}
                        className="thumb thumb3"
                      >
                        <span className="tooltip">Good</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="mx-2 mb-3">
                    <span className="font-mono text-xs">VueJs</span>
                    <div className="slider">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, easings: easing }}
                        variants={{
                          visible: { width: "50%" },
                          hidden: { width: 0 },
                        }}
                        className="thumb thumb4"
                      >
                        <span className="tooltip">Good</span>
                      </motion.div>
                    </div>
                  </div>
                  {/* <div className="mx-2 mb-3">
                    <span className="font-mono text-xs">HTML</span>
                    <div className="slider">
                      <div className="thumb thumb5"></div>
                    </div>
                  </div> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Skill;
