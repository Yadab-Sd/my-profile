import Container from "@common/Container";
import React from "react";
import s from "./About.module.css";
import cn from "classnames";

function Portfolio() {
  return (
    <div className={s.root}>
      <Container>
        <div className={cn("flex items-center justify-between", s.content)}>
          <h2 className={cn("fake-big", s.fakeBig)}>Portfolio</h2>
          <div className="w-6/12 flex-grow">
            <h2 className="mb-6 text-6xl font-bold">Portfolio</h2>
            <p className="font-lighter text-secondary">
              For over a decade I had many opportunities to work in a vast
              spectrum of web technologies what let me gather a significant
              amount of various experience. Working for companies and
              individuals around the globe I met and learnt from amazing and
              ambitious people.
            </p>
          </div>
          <div className="w-6/12 flex-grow">
            <img src="./download.png" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
