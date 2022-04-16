import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
// import { Effects } from './Effects'
import { a, useSpring } from "@react-spring/three";

function Dot() {
  const props = useSpring({
    loop: { reverse: true },
    from: { position: [-1, 0, 0] },
    to: { position: [1, 0, 0] },
  });
  return (
    //   @ts-ignore
    <mesh>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={"white"} />
    </mesh>
  );
}

export default function AnimatedCircle() {
  return (
    <Canvas>
      <color attach="background" args={["black"]} />
      <Dot />
      {/* <Effects /> */}
    </Canvas>
  );
}
