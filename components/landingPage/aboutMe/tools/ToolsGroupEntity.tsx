import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import TextWrapper from './TextWrapper';

const ToolsGroupEntity = (): JSX.Element => {
  const tools = [
    'Aws',
    'Azure',
    'Git',
    'Github',
    'Postman',
    'Visual studio code',
    'Visual studio',
    'Docker',
    'Jira',
    'Confluence',
    'Slack',
    'Async',
    'Teams',
    'Trello',
    'Browser Dev tools',
    'Digital Ocean',
    'Test Driven Development',
    'Automated Tests',
    'Unit tests',
    'JSON',
    'REST',
    'XML',
    'Linux',
    'App Dynamics',
    'SEQ',
    'Splunk',
    'RTL',
    'CQRS',
    'SOLID'
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
    radius = radius + 5;

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
        radiusScale = radius + Math.random() * 17;
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
          <TextWrapper key={`k-${index}`} text={tools[index]} position={pos} />
        ))
      }
    </group>
  );
};

export default ToolsGroupEntity;
