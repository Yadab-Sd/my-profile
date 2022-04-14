import React from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(import("react-animated-cursor"), {
  ssr: false,
});

function CursorAnimation() {
  return (
    <div>
      {/* @ts-ignore */}
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="100, 24, 55"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={5}
      />
    </div>
  );
}

export default CursorAnimation;
