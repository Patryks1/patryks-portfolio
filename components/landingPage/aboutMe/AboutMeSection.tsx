import React from 'react';
import { SectionTitle, FadeInSection } from '../../Shared';
import SkillGrid from './SkillGrid';
import dynamic from 'next/dynamic';
import SkillTab from './SkillTab';

const ToolsScene = dynamic(() => import('./tools/ToolsScene'), {
  loading: () => <h1>Loading...</h1>
});
const AnimatedProfileScene = dynamic(() => import('./animatedProfilePic/AnimatedProfileScene'), {
  loading: () => <h1>Loading...</h1>
});

const AboutMeSection = (): JSX.Element => {
  return (
    <section className="container mx-auto space-y-6 overflow-hidden pt-44">
      <FadeInSection direction="right">
        <SectionTitle title="About Me" />
      </FadeInSection>
      <div className="flex flex-col lg:flex-row text-center">
        <FadeInSection className="flex flex-col flex-shrink-0 space-y-4" direction="right">
          <AnimatedProfileScene />
          <h1 className="font-semibold">Patryk Slowinski</h1>
        </FadeInSection>

        <div className="flex flex-col mt-10 lg:mt-0 space-y-10">
          <FadeInSection className="px-5 lg:px-32" direction="left">
            <p>
              Hi I'm Patryk, an Energetic full-stack software engineer with over 3 years of
              commercial experience. But with over 5 years of coding experience. Passionately driven
              individual with the ability to adapt to any situation with proven potential to grow
              myself and others.
            </p>
          </FadeInSection>
          <div className="flex flex-col">
            <h1 className="text-left px-20 text-pink-500 font-bold mb-2 flex justify-end text-xl">
              Skills
            </h1>
            <SkillGrid className="px-20">
              <SkillTab
                skillName="C# / ASP.NET"
                icon="devicon-dotnetcore-plain"
                years={3}
                delay={0}
              />
              <SkillTab skillName="TS / JS" icon="devicon-typescript-plain" years={3} delay={100} />
              <SkillTab skillName="React" icon="devicon-react-plain" years={3} delay={200} />
              <SkillTab skillName="Redux" icon="devicon-redux-plain" years={3} delay={300} />
            </SkillGrid>
            <SkillGrid className="mt-4">
              <SkillTab skillName="HTML / CSS" icon="devicon-html5-plain" years={2} delay={0} />
              <SkillTab skillName="NextJs" icon="devicon-nextjs-plain" years={2} delay={100} />
              <SkillTab
                skillName="Node / Express.js"
                icon="devicon-nodejs-plain"
                years={3}
                delay={200}
              />
              <SkillTab skillName="C / C++" icon="devicon-cplusplus-plain" years={3} delay={300} />
            </SkillGrid>
            <SkillGrid className="mt-4">
              <SkillTab skillName="Redis" icon="devicon-redis-plain" years={3} delay={300} />
              <SkillTab
                skillName="Postgres"
                icon="devicon-postgresql-plain"
                years={3}
                delay={300}
              />
              <SkillTab skillName="MongoDB" icon="devicon-mongodb-plain" years={2} delay={300} />
              <SkillTab skillName="MySql" icon="devicon-mysql-plain" years={4} delay={300} />
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
