import { a, config, useSpring } from '@react-spring/three';
import { Cylinder, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useState } from 'react';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';

const AnimatedProfilePic = (): JSX.Element => {
  const texture1 = useTexture('/images/profile_pic.jpg');

  const { camera, mouse } = useThree();

  const [vec] = useState(() => new Vector3());
  const [target] = useState(() => new Vector3());
  const [isPointerOver, setIsPointerOver] = useState(false);
  const [isUp, setIsUp] = useState(false);
  const profileRef = useRef<Mesh>();

  const [{ scale }] = useSpring(
    {
      scale: isPointerOver ? 1.05 : 1,
      config: config.stiff
    },
    [isPointerOver]
  );

  useFrame(() => {
    if (isPointerOver) {
      camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 20), 0.05);
    } else {
      camera.position.lerp(vec.set(0, 0, 20), 0.05);

      const profilePicLocation = profileRef.current.position;

      if (target.distanceTo(profilePicLocation) <= 0.1) {
        target.set(
          profilePicLocation.x,
          profilePicLocation.y - (isUp ? -4 : 4),
          profilePicLocation.z
        );

        setIsUp(!isUp);
      }

      profileRef.current.position.lerp(target, 0.004);
    }
  });

  return (
    <a.group scale={scale}>
      <Cylinder
        args={[10, 10, 1, 32]}
        position={[0, 0, 0]}
        rotation={[1.6, 1.6, 0]}
        onPointerOver={() => setIsPointerOver(true)}
        onPointerLeave={() => setIsPointerOver(false)}
        ref={profileRef}>
        <meshBasicMaterial attachArray="material" color="black" />
        <meshBasicMaterial attachArray="material" map={texture1} />
        <meshBasicMaterial attachArray="material" color="black" />
      </Cylinder>
    </a.group>
  );
};

export default AnimatedProfilePic;
