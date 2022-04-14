import { Header } from "@common/Layout";
import PageHead from "@common/PageHead";
import SafeHydrate from "@common/SafeHydrate";
import Portfolio from "@components/Portfolio";
import { IntroOverlay } from "@components/UI";
import CustomCursor from "@components/UI/CustomCursor";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function PortfolioPage() {
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
        <PageHead title="Portfolio" />
        <div>
          <Header start={!animationComplete} />
          <div className="py-60">
            <Portfolio />
          </div>
        </div>
      </motion.div>
    </SafeHydrate>
  );
}

export default PortfolioPage;
