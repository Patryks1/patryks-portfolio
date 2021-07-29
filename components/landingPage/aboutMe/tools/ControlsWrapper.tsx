import { OrbitControls } from '@react-three/drei';
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
      onPointerDown={(e) => e.preventDefault()}
    />
  );
};

export default ControlsWrapper;
