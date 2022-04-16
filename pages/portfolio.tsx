import Container from "@common/Container";
import { Header } from "@common/Layout";
import PageWrapper from "@common/PageWrapper";
import { colors2 } from "@utils/index";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { transition } from "../utils/index";

const data = [
  {
    name: "Jachai",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/video-visuel-large.jpg",
    description: "Une brasserie à jouer avec un esprit de fête foraine.",
  },
  {
    name: "Jachai",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/visuel_project-retina.jpg",
    description: "Une brasserie à jouer avec un esprit de fête foraine.",
  },
  {
    name: "Jachai",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/wokine-startup-factory-retina.jpg",
    description: "Une brasserie à jouer avec un esprit de fête foraine.",
  },
  {
    name: "Jachai",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/video-visuel-large.jpg",
    description: "Une brasserie à jouer avec un esprit de fête foraine.",
  },
  {
    name: "Jachai",
    img: "https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/visuel_project-retina.jpg",
    description: "Une brasserie à jouer avec un esprit de fête foraine.",
  },
];
function PortfolioPage() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log("scrolling");
    });
  }, []);
  return (
    <PageWrapper title="Portfolio">
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
                    <p className="project-intro" style={{ color: "#f5f1ef" }}>
                      {item.description}
                    </p>
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
