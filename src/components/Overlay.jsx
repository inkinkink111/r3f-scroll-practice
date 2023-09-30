import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{ opacity: props.opacity }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
      </div>
    </section>
  );
};

const Overlay = () => {
  const scroll = useScroll();
  const [opaFirstSec, setOpaFirstSec] = useState(1);
  const [opaSecondSec, setOpaSecondSec] = useState(1);
  const [opaThirdSec, setOpaThirdSec] = useState(1);

  useFrame(() => {
    setOpaFirstSec(1 - scroll.range(0, 1 / 3));
    setOpaSecondSec(scroll.curve(1 / 3, 1 / 3));
    setOpaThirdSec(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opaFirstSec}>
          <h1 className="font-sans text-2xl">Hello</h1>
        </Section>
        <Section right opacity={opaSecondSec}>
          <h1 className="font-sans text-2xl">My name is Bhiradit</h1>
        </Section>
        <Section opacity={opaThirdSec}>
          <h1 className="font-sans text-2xl">Good bye</h1>
        </Section>
      </div>
    </Scroll>
  );
};

export default Overlay;
