import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import ControlsWrapper from './ControlsWrapper';
import ToolsGroupEntity from './ToolsGroupEntity';
import Blob from './Blob';
import { FadeInSection } from '../../../Shared';

const ToolsScene = (): JSX.Element => {
  const [canUseControls, setCanUseControls] = useState<boolean>(false);

  return (
    <FadeInSection className="flex flex-col" direction="left">
      <div className="flex flex-col md:flex-row w-full">
        <h1 className="px-20 text-primary font-bold mb-2 flex text-xl justify-center md:justify-start">
          Tools
        </h1>
        <button
          onClick={() => setCanUseControls(!canUseControls)}
          className="focus:outline-none bg-black mx-20 md:mx-0 p-2 rounded-md mb-4">
          {canUseControls ? 'Disable' : 'Enable'} controls
        </button>
      </div>
      <div style={{ width: '100%', height: 600 }}>
        <Canvas camera={{ position: [0, 0, 50] }}>
          {
            // TODO: Fix this dumb glitch where controls hjack the onTuch and onScroll when disabled
            canUseControls && <ControlsWrapper canUseControls={canUseControls} />
          }
          <Blob />
          <ToolsGroupEntity />
        </Canvas>
      </div>
    </FadeInSection>
  );
};

export default ToolsScene;
