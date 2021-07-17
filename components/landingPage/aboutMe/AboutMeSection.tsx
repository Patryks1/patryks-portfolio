import React from 'react';
import { SectionTitle, FadeInSection, PageLoader } from '../../Shared';
import SkillGrid from './SkillGrid';
import dynamic from 'next/dynamic';
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { Cylinder, OrbitControls, useTexture } from '@react-three/drei';
import { useState } from 'react';
import { useEffect } from 'react';
import { Vector3 } from 'three';

const ToolsScene = dynamic(() => import('./tools/ToolsScene'), { loading: () => <PageLoader /> });

const AnimatedProfilePic = (): JSX.Element => {
  /*const [texture1] = useTexture([
    'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe.jpg'
  ]);*/

  const { camera, mouse } = useThree();

  const [vec] = useState(() => new Vector3());
  const [isPointerOver, setIsPointerOver] = useState(false);

  useFrame(() => {
    console.log(mouse);
    if (isPointerOver) {
      camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 20), 0.05);
    } else {
      camera.position.lerp(vec.set(0, 0, 20), 0.05);
    }
  });

  return (
    <>
      <Cylinder
        args={[10, 10, 1, 32]}
        position={[0, 0, 0]}
        rotation={[1.6, 0, 0]}
        onPointerOver={() => setIsPointerOver(true))}
        onPointerLeave={() => setIsPointerOver(false)}>
        <meshBasicMaterial attach="material" />
      </Cylinder>
    </>
  );
};

const AboutMeSection = (): JSX.Element => {
  const renderSkill = (skillName: string, icon: string, years: number, delay = 0): JSX.Element => (
    <FadeInSection delay={delay} className="flex flex-col" direction="left">
      <i className={`${icon} text-4xl`}></i>
      <h1>
        {skillName} <br /> ({years} Years)
      </h1>
    </FadeInSection>
  );

  const [hasLoaded, setHasLoaded] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 500);
  }, []);

  return (
    <section className="container mx-auto space-y-6 overflow-hidden pt-44">
      <FadeInSection direction="right">
        <SectionTitle title="About Me" />
      </FadeInSection>
      <div className="flex flex-col lg:flex-row text-center">
        <FadeInSection className="flex flex-col flex-shrink-0 space-y-4" direction="right">
          {hasLoaded && (
            <div className="w-full h-2/6">
              <Canvas camera={{ position: [0, 0, 20] }}>
                <AnimatedProfilePic />
              </Canvas>
            </div>
          )}
          <h1 className="font-semibold">Patryk Slowinski</h1>
        </FadeInSection>

        <div className="flex flex-col mt-10 lg:mt-0 space-y-10">
          <FadeInSection className="px-5 lg:px-32" direction="left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat minus,
              consequuntur hic sapiente rerum veniam, velit, natus cumque magni nihil tenetur
              officia iure dicta quia quas fuga aliquid vero?
            </p>
          </FadeInSection>
          <div className="flex flex-col">
            <h1 className="text-left px-20 text-pink-500 font-bold mb-2 flex justify-end text-xl">
              Skills
            </h1>
            <SkillGrid className="px-20">
              {renderSkill('C# / ASP.NET', 'devicon-dotnetcore-plain', 3, 0)}
              {renderSkill('TS / JS', 'devicon-typescript-plain', 3, 100)}
              {renderSkill('React', 'devicon-react-plain', 3, 300)}
              {renderSkill('Redux', 'devicon-redux-plain', 3, 200)}
            </SkillGrid>
            <SkillGrid className="mt-4">
              {renderSkill('HTML / CSS', 'devicon-html5-plain', 2, 300)}
              {renderSkill('NextJs', 'devicon-nextjs-plain', 2, 0)}
              {renderSkill('Node / Express.js', 'devicon-nodejs-plain', 3, 200)}
              {renderSkill('C/C++', 'devicon-cplusplus-plain', 2, 100)}
            </SkillGrid>
            <SkillGrid className="mt-4">
              {renderSkill('Redis', 'devicon-redis-plain', 3, 0)}
              {renderSkill('Postgres', 'devicon-postgresql-plain', 3, 100)}
              {renderSkill('MongoDB', 'devicon-mongodb-plain', 2, 200)}
              {renderSkill('MySql', 'devicon-mysql-plain', 4, 300)}
            </SkillGrid>
          </div>
          <FadeInSection className="flex flex-col" direction="bottom">
            <h1 className="text-left px-20 text-pink-500 font-bold mb-2 text-xl">Tools</h1>
            <FadeInSection className="flex flex-col" direction="left">
              <ToolsScene />
            </FadeInSection>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
