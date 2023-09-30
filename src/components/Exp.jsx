import { OrbitControls, ScrollControls } from "@react-three/drei";
import React from "react";
import { Office } from "./Office";
import Overlay from "./Overlay";

const Exp = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <OrbitControls enableZoom={false} />
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};

export default Exp;
