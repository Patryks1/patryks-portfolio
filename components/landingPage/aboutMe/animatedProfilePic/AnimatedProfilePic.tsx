import { Cylinder, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useState } from 'react';
import { Vector3 } from 'three';

const AnimatedProfilePic = (): JSX.Element => {
  const texture1 = useTexture(
    'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe.jpg'
  );

  const { camera, mouse } = useThree();

  const [vec] = useState(() => new Vector3());
  const [isPointerOver, setIsPointerOver] = useState(false);

  useFrame(() => {
    if (isPointerOver) {
      camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 20), 0.05);
    } else {
      camera.position.lerp(vec.set(0, 0, 20), 0.05);
    }
  });

  return (
    <>
      <Cylinder
        args={[10, 10, 1, 32]}
        position={[0, 0, 0]}
        rotation={[1.6, 0, 0]}
        onPointerOver={() => setIsPointerOver(true)}
        onPointerLeave={() => setIsPointerOver(false)}>
        <meshBasicMaterial attach="material" map={texture1} />
      </Cylinder>
    </>
  );
};

export default AnimatedProfilePic;
