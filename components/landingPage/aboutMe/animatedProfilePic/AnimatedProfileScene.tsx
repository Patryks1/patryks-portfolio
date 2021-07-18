import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import AnimatedProfilePic from './AnimatedProfilePic';

const AnimatedProfileScene = (): JSX.Element => {
  return (
    <div className="w-full h-2/6">
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Suspense fallback={null}>
          <AnimatedProfilePic />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AnimatedProfileScene;
