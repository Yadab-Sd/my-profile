import Container from "@common/Container";
import { Header } from "@common/Layout";
import PageWrapper from "@common/PageWrapper";
import { colors, colors2 } from "@utils/index";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { transition } from "../utils/index";

const data = [
  {
    name: "Jachai",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/video-visuel-large.jpg",
    description: "An ecommerce web application with 80000+ users.",
    link: "https://jachai.com",
    techs: ["NextJs", "TailwindCss"],
  },
  {
    name: "Dhamaka",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/visuel_project-retina.jpg",
    description:
      "An multi-vendor ecommerce web application with 20,0000+ users.",
    link: "https://dhamakashopping.com",
    techs: ["NextJs", "Graphql"],
  },
  {
    name: "Invariant",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/wokine-startup-factory-retina.jpg",
    description: "A portfolio site for renowned company",
    techs: ["Jekull", "Bootstrap"],
  },
  {
    name: "InvTech",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/video-visuel-large.jpg",
    description: "A portfolio site for renowned company",
    techs: ["React", "Scss"],
  },
  {
    name: "Jachai",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/visuel_project-retina.jpg",
    description: "A portfolio site for renowned company",
    techs: ["NextJs", "Material Ui"],
  },
];

const des = `Developing web apps for 3 years. I’ve done remote work for agencies, consulted for startups, and
collaborated with talented people to create web products. Created websites
that are fast and built with best practices. I built
small and medium web apps, custom plugins, features, animations, and
coding interactive layouts. The techs I used -`;

const techs = [
  "NextJs",
  "ReactJs",
  "Jekyll",
  "TailwindCss",
  "Graphql",
  "AngularJs",
  "VueJs",
  "Bootstrap",
  "Scss",
  "Elastic Search",
  "Redux",
  "Material UI",
];

function PortfolioPage() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log("scrolling");
    });
  }, []);

  return (
    <PageWrapper title="Portfolio" description={des} items={techs}>
      {/* <Container> */}
      <div className="page-portfolio">
        <div className="tracker">
          <ul
            className="list-projects"
            style={{ width: 400 * data.length + data.length * 32 }}
          >
            {data.map((item, i) => (
              <li
                key={item.name}
                className="project-item luckyfolks"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
              >
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: 400, opacity: 0, skewY: 1, width: 0 }}
                  animate={{ x: 0, opacity: 1, skewY: 1.5, width: 400 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="cursor-pointer rounded"
                  style={{
                    background: `linear-gradient(45deg, ${
                      colors2?.reverse()[i % (colors2?.length - 1)]
                    }, transparent)`,
                  }}
                >
                  <div
                    className="project-color"
                    style={{ backgroundColor: "#084d3d" }}
                  ></div>
                  <div
                    className="project-visuel lazyloaded"
                    style={{
                      backgroundImage: `url(&quot;https://www.wokine.com/wp-content/mu-plugins/lib/timthumb/timthumb.php?src=%2Fwp-content%2Fuploads%2F2021%2F02%2FLuckyfolks-head.jpg&amp;w=700&amp;h=&amp;zc=0&amp;q=100&quot;)`,
                    }}
                  >
                    <Image
                      alt=""
                      className="lazyautosizes lazyloaded"
                      data-sizes="auto"
                      data-parent-fit="cover"
                      width="400px"
                      height="250px"
                      src={item.img}
                      layout="fill"
                    />
                  </div>
                  <div className="loader">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="loaderW"
                        width="80"
                        height="30"
                        viewBox="0 0 567.07 285.82"
                      >
                        <polyline
                          className="loaderpath"
                          points="18.62 74.51 182.66 249.83 345.84 97.93 281.11 35.48 216.58 98.12 379.57 248.8 548.76 74.14"
                        ></polyline>
                      </svg>
                    </i>
                  </div>

                  <motion.div
                    transition={{ duration: 2 }}
                    className="inner"
                    style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                  >
                    <span className="project-type" style={{ color: "#4b6f67" }}>
                      Site web
                    </span>
                    <h3 className="project-name" style={{ color: "#e49c3c" }}>
                      {item?.name}
                    </h3>
                    <p className="project-intro text-sm mb-4 w-2/3" style={{ color: "#f5f1ef" }}>
                      {item.description}
                    </p>
                    <div className="flex w-full flex-wrap">
                      {item.techs?.map((item, i) => (
                        <small
                          className="mb-2 mr-2 block rounded px-2 py-1 text-xs font-bold"
                          style={{
                            color:
                              colors2.concat(colors)[
                                i % (colors2.length + colors.length - 1)
                              ],
                            border: "1px solid",
                            borderColor:
                              colors2.concat(colors)[
                                i % (colors2.length + colors.length - 1)
                              ],
                          }}
                        >
                          {item}
                        </small>
                      ))}
                    </div>
                  </motion.div>
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* </Container> */}
    </PageWrapper>
  );
}

export default PortfolioPage;
