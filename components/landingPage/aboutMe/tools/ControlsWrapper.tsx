import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import { Vector3 } from 'three';

interface ControlsWrapperProps {
  hasTarget?: boolean;
  targetPosition?: Vector3;
  setHasTarget?: (value: boolean) => void;
}

const ControlsWrapper = (props: ControlsWrapperProps): JSX.Element => {
  const { targetPosition, hasTarget, setHasTarget } = props;

  const controlsRef = useRef();

  // TODO: When clicking on target, Lerp to it and look at it
  /*useFrame(() => {
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
  if (!hasTarget) return;

    targetPosition.set(0, 0, 0);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 40;
    camera.lookAt(scene.position);
    setHasTarget(false);
  */

  return <OrbitControls enablePan={false} ref={controlsRef} enableZoom={false} />;
};

export default ControlsWrapper;
