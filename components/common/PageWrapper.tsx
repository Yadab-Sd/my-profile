import Portfolio from "@components/Portfolio";
import CustomCursor from "@components/UI/CustomCursor";
import { motion } from "framer-motion";
import React, { ReactElement, useEffect, useState } from "react";
import { SafeHydrate, PageHead } from ".";
import Container from "./Container";
import { Header } from "./Layout";
import PageTitle from "./PageTitle";

function PageWrapper({
  children,
  title,
  description,
  items,
}: {
  children: ReactElement;
  title: string;
  description: string;
  items: string[];
}) {
  const [animationComplete, setAnimationComplete] = useState(true);
  const completeAnimation = () => {
    setAnimationComplete(true);
    document.body.style.overflowY = "auto";
    const bH =
      document.getElementById("scId")?.getBoundingClientRect().height ||
      document.getElementById("scId")?.clientHeight;
    if (bH) {
      document.body.style.height = `${bH}px`;
    }
  };

  useEffect(() => {
    completeAnimation();
  }, []);
  return (
    <SafeHydrate>
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container"
      >
        <PageHead title={title} />
        <Header start={!animationComplete} />
        <Container>
          <div className="pt-36">
            {children}
          </div>
        </Container>
      </motion.div>
    </SafeHydrate>
  );
}

export default PageWrapper;
