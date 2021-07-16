import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { Vector3 } from 'three';
import ControlsWrapper from './ControlsWrapper';
import ToolsGroupEntity from './ToolsGroupEntity';
import Blob from './Blob';

const ToolsScene = (): JSX.Element => {
  const [targetPosition] = useState(() => new Vector3());
  const [hasTarget, setHasTarget] = useState<boolean>(false);

  return (
    <div style={{ width: '100%', height: 600 }}>
      <Canvas camera={{ position: [0, 0, 50] }}>
        <ControlsWrapper
          targetPosition={targetPosition}
          hasTarget={hasTarget}
          setHasTarget={setHasTarget}
        />
        <Blob />
        <ToolsGroupEntity
          targetPosition={targetPosition}
          hasTarget={hasTarget}
          setHasTarget={setHasTarget}
        />
      </Canvas>
    </div>
  );
};

export default ToolsScene;
