import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export const FLOOR_HEIGHT = 2.3;
export const FLOOR = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF("./models/Office.glb");
  const ref = useRef();
  const timeline = useRef();
  const floor_2_ref = useRef();
  const floor_3_ref = useRef();

  const scroll = useScroll();

  useFrame(() => {
    timeline.current.seek(scroll.offset * timeline.current.duration());
  });

  useLayoutEffect(() => {
    timeline.current = gsap.timeline();

    // Vertical animation
    timeline.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (FLOOR - 1),
      },
      0
    );

    // Floor 1
    timeline.current.to(
      ref.current.rotation,
      {
        duration: 1,
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
      0
    );
    timeline.current.to(
      ref.current.rotation,
      {
        duration: 1,
        x: 0,
        y: -Math.PI / 6,
        z: 0,
      },
      1
    );

    // Floor 1 pos
    timeline.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    timeline.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    // Floor 2
    timeline.current.from(
      floor_2_ref.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    timeline.current.from(
      floor_2_ref.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // Floor 3
    timeline.current.from(
      floor_3_ref.current.position,
      {
        duration: 0.8,
        y: 2,
      },
      0
    );
    timeline.current.from(
      floor_3_ref.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0.8
    );
    timeline.current.from(
      floor_3_ref.current.position,
      {
        duration: 0.5,
        z: -2,
      },
      1
    );
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[0.5, -1, -1]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <mesh geometry={nodes["01_office"].geometry} material={materials["01"]} />
      <group position={[0, 2.114, -2.23]}>
        <group ref={floor_2_ref}>
          <mesh
            geometry={nodes["02_library"].geometry}
            material={materials["02"]}
          />
        </group>
      </group>
      <group position={[-1.97, 4.227, -2.199]}>
        <group ref={floor_3_ref}>
          <mesh
            geometry={nodes["03_attic"].geometry}
            material={materials["03"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/Office.glb");
