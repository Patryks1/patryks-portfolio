import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import TextWrapper from './TextWrapper';

interface ToolsGroupProps {
  hasTarget: boolean;
  setHasTarget: (value: boolean) => void;
  targetPosition: Vector3;
}

const ToolsGroupEntity = (props: ToolsGroupProps): JSX.Element => {
  const { setHasTarget, targetPosition } = props;

  const tools = [
    'Aws',
    'Azure',
    'Git',
    'Postman',
    'Visual studio code',
    'Visual studio',
    'Docker',
    'Jira',
    'Github',
    'Confluence',
    'Slack',
    'Teams',
    'Trello',
    'Web Dev tools'
  ];

  const groupRef = useRef<Mesh>();
  useFrame(({ clock }) => {
    groupRef.current.rotation.x = clock.getElapsedTime() / 10;
  });

  const generateFibonacciSpherePoints = (
    samples: number,
    radius: number,
    randomizeHeight: boolean
  ): Vector3[] => {
    radius = radius + 4;

    const points: Vector3[] = [];
    const offset: number = 2 / samples;
    const increment: number = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < samples; i++) {
      const y: number = i * offset - 1 + offset / 2;
      const distance: number = Math.sqrt(1 - Math.pow(y, 2));
      const phi: number = (i % samples) * increment;

      const x: number = Math.cos(phi) * distance;
      const z: number = Math.sin(phi) * distance;

      let radiusScale: number = radius;
      if (randomizeHeight) {
        radiusScale = radius + Math.random() * 12;
      }

      points.push(new Vector3(x * radiusScale, y * radiusScale, z * radiusScale));
    }

    return points;
  };

  const fibPoints: Vector3[] = useMemo(
    () => generateFibonacciSpherePoints(tools.length, 10, true),
    []
  );

  return (
    <group ref={groupRef}>
      {
        // Text entities
        fibPoints.map((pos, index) => (
          <TextWrapper
            key={`k-${index}`}
            text={tools[index]}
            position={pos}
            targetPosition={targetPosition}
            setHasTarget={setHasTarget}
          />
        ))
      }
    </group>
  );
};

export default ToolsGroupEntity;
