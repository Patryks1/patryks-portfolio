import * as THREE from 'three';
import React, { Suspense, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, MeshDistortMaterial } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
import { Mesh } from 'three';

const AnimatedMaterial = a(MeshDistortMaterial);

const Blob = (): JSX.Element => {
  const sphere = useRef<Mesh>();
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 10 : 0,
        0.5
      );

      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime) + (hovered ? state.mouse.y / 10 : 0),
        0.2
      );
    }
  });

  const [{ wobble, ambient, env, distortion }] = useSpring(
    {
      wobble: down ? 9.5 : hovered ? 8.5 : 7.5,
      ambient: 0.3,
      env: 0.05,
      speed: hovered ? 0.8 : 1,
      distortion: hovered ? 0.9 : 0.6,
      config: (n) => n === 'wobble' && hovered && { mass: 5, tension: 150, friction: 19 }
    },
    [hovered, down]
  );

  return (
    <>
      <a.ambientLight intensity={ambient} />
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => setDown(false)}>
          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            color="hotpink"
            skinning={0}
            distort={distortion}
            envMapIntensity={env}
            clearcoat={0.5}
            clearcoatRoughness={0.1}
            metalness={0.1}
          />
        </a.mesh>
        <Environment preset="lobby" />
      </Suspense>
    </>
  );
};

export default Blob;
