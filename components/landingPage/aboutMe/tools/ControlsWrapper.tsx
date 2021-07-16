import { OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React from 'react';
import { Vector3 } from 'three';

interface ControlsWrapperProps {
  hasTarget?: boolean;
  targetPosition?: Vector3;
  setHasTarget?: (value: boolean) => void;
}

const ControlsWrapper = (props: ControlsWrapperProps): JSX.Element => {
  const { targetPosition, hasTarget, setHasTarget } = props;

  const { camera, scene } = useThree();

  useFrame(() => {
    lerpCameraToTarget();
  });

  const lerpCameraToTarget = (): void => {
    if (!hasTarget) {
      return;
    }

    camera.lookAt(targetPosition);
    camera.position.lerp(targetPosition, 0.5);

    if (camera.position === targetPosition) {
      setHasTarget(false);
    }
  };

  return (
    <OrbitControls
      enablePan={false}
      maxZoom={200}
      onWheel={() => {
        if (hasTarget) {
          targetPosition.set(0, 0, 0);

          camera.position.x = 0;
          camera.position.y = 0;
          camera.position.z = 40;
          camera.lookAt(scene.position);
          setHasTarget(false);
        }
      }}
    />
  );
};

export default ControlsWrapper;
