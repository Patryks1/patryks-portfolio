import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { Vector3 } from 'three';
import ControlsWrapper from './ControlsWrapper';
import ToolsGroupEntity from './ToolsGroupEntity';
import Blob from './Blob';
import { FadeInSection } from '../../../Shared';

const ToolsScene = (): JSX.Element => {
  const [targetPosition] = useState(() => new Vector3());
  const [hasTarget, setHasTarget] = useState<boolean>(false);

  return (
    <FadeInSection className="flex flex-col" direction="left">
      <h1 className="px-20 text-primary font-bold mb-2 flex text-xl">Tools</h1>
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
    </FadeInSection>
  );
};

export default ToolsScene;
