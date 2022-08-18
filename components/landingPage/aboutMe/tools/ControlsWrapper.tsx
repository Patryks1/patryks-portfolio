import { OrbitControls } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import React, { useRef } from 'react';

interface ControlsWrapperProps {
  canUseControls?: boolean;
}

const ControlsWrapper = (props: ControlsWrapperProps): JSX.Element => {
  const { canUseControls } = props;

  const controlsRef = useRef();

  return (
    <OrbitControls
      enabled={canUseControls}
      ref={controlsRef}
      onPointerDown={(e: ThreeEvent<PointerEvent>) => e.stopPropagation()}
    />
  );
};

export default ControlsWrapper;
