import React from 'react';
import { SectionTitle, FadeInSection } from '../../Shared';
import SkillGrid from './SkillGrid';
import dynamic from 'next/dynamic';
import SkillTab from './SkillTab';
import MyExperience from './MyExperience/MyExperience';

const ToolsScene = dynamic(() => import('./tools/ToolsScene'));

const AboutMeSection = (): JSX.Element => {
  return (
    <section className="container mx-auto space-y-6 overflow-hidden pt-44" id="aboutMe">
      <FadeInSection direction="right">
        <SectionTitle title="About Me" />
      </FadeInSection>
      <div className="flex flex-col text-center w-full">
        <div className="flex flex-col md:flex-row">
          <FadeInSection className="flex flex-col space-y-4 p-20 md:p-10" direction="right">
            <img
              src="./images/profile_pic.jpg"
              alt="profile"
              className="rounded-full transform sm:transform-gpu hover:scale-110 ease-in-out duration-500"
            />
            <h1 className="font-semibold">Patryk Slowinski</h1>
          </FadeInSection>

          <div className="flex flex-col mt-10 lg:mt-0 space-y-10">
            <FadeInSection className="px-5 lg:px-32" direction="left">
              <p>
                Hi I&apos;m Patryk, an Energetic full-stack software engineer with over 3 years of
                commercial experience. But with over 5 years of coding experience. Passionately
                driven individual with the ability to adapt to any situation with proven potential
                to grow myself and others.
              </p>
            </FadeInSection>
            <div className="flex flex-col">
              <h1 className="px-20 text-primary font-bold mb-2 flex text-xl justify-center md:justify-end">
                Skills
              </h1>
              <SkillGrid className="px-20">
                <SkillTab
                  skillName="C# / ASP.NET"
                  icon="devicon-dotnetcore-plain"
                  years={3}
                  delay={0}
                />
                <SkillTab
                  skillName="TS / JS"
                  icon="devicon-typescript-plain"
                  years={3}
                  delay={100}
                />
                <SkillTab skillName="React" icon="devicon-react-plain" years={3} delay={200} />
                <SkillTab skillName="Redux" icon="devicon-redux-plain" years={3} delay={300} />
              </SkillGrid>
              <SkillGrid className="mt-4">
                <SkillTab skillName="HTML5 / CSS" icon="devicon-html5-plain" years={3} delay={0} />
                <SkillTab skillName="Next.js" icon="devicon-nextjs-plain" years={2} delay={100} />
                <SkillTab
                  skillName="Node / Express.js"
                  icon="devicon-nodejs-plain"
                  years={2}
                  delay={200}
                />
                <SkillTab
                  skillName="C / C++"
                  icon="devicon-cplusplus-plain"
                  years={3}
                  delay={300}
                />
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
                <SkillTab skillName="MySql" icon="devicon-mysql-plain" years={3} delay={300} />
              </SkillGrid>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-20 space-y-20">
          <ToolsScene />
          <MyExperience />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
