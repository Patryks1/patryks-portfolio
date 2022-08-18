import React from 'react';
import { SectionTitle, FadeInSection } from '../../Shared';
import dynamic from 'next/dynamic';
import SkillsContainer from './SkillsContainer';
import Image from 'next/image';

const ToolsScene = dynamic(() => import('./tools/ToolsScene'));
const MyExperience = dynamic(() => import('./MyExperience/MyExperience'));

const AboutMeSection = (): JSX.Element => {
  return (
    <section className="container mx-auto space-y-6 overflow-hidden pt-44" id="aboutMe">
      <FadeInSection direction="right">
        <SectionTitle title="About Me" />
      </FadeInSection>
      <div className="flex flex-col text-center w-full">
        <div className="flex flex-col md:flex-row">
          <FadeInSection className="flex flex-col space-y-4 p-20 md:p-10" direction="right">
            <Image
              src="/images/profile_pic.webp"
              alt="profile"
              width="1000"
              height="1000"
              className="rounded-full"
            />
            <h1 className="font-semibold">Patryk Slowinski</h1>
          </FadeInSection>

          <div className="flex flex-col mt-10 lg:mt-0 space-y-10">
            <FadeInSection className="px-5 lg:px-32" direction="left">
              <p>
                Hi I&apos;m Patryk, an Energetic full-stack software engineer with over 4 years of
                commercial experience. But with over 6 years of coding experience. Passionately
                driven individual with the ability to adapt to any situation with proven potential
                to grow myself and others.
              </p>
            </FadeInSection>
            <div className="flex flex-col">
              <h1 className="px-20 text-primary font-bold mb-2 flex text-xl justify-center md:justify-end">
                Skills
              </h1>
              <SkillsContainer className="px-20">
                <>
                  <SkillsContainer.Skill
                    skillName="C# / ASP.NET"
                    icon="devicon-dotnetcore-plain"
                    startDate={new Date(2018, 2, 5)}
                    delay={0}
                  />
                  <SkillsContainer.Skill
                    skillName="TS / JS"
                    icon="devicon-typescript-plain"
                    startDate={new Date(2017, 0, 0)}
                    delay={100}
                  />
                  <SkillsContainer.Skill
                    skillName="React"
                    icon="devicon-react-plain"
                    startDate={new Date(2018, 6, 25)}
                    delay={200}
                  />
                  <SkillsContainer.Skill
                    skillName="Redux"
                    icon="devicon-redux-plain"
                    startDate={new Date(2018, 6, 25)}
                    delay={300}
                  />
                </>
              </SkillsContainer>
              <SkillsContainer className="mt-4">
                <>
                  <SkillsContainer.Skill
                    skillName="HTML5 / CSS"
                    icon="devicon-html5-plain"
                    startDate={new Date(2017, 0, 0)}
                    delay={0}
                  />
                  <SkillsContainer.Skill
                    skillName="Next.js"
                    icon="devicon-nextjs-plain"
                    startDate={new Date(2020, 2, 0)}
                    delay={100}
                  />
                  <SkillsContainer.Skill
                    skillName="Node / Express.js"
                    icon="devicon-nodejs-plain"
                    startDate={new Date(2019, 2, 0)}
                    delay={200}
                  />
                  <SkillsContainer.Skill
                    skillName="C / C++"
                    icon="devicon-cplusplus-plain"
                    years={3}
                    delay={300}
                  />
                </>
              </SkillsContainer>
              <SkillsContainer className="mt-4">
                <>
                  <SkillsContainer.Skill
                    skillName="Redis"
                    icon="devicon-redis-plain"
                    startDate={new Date(2018, 2, 5)}
                    delay={300}
                  />
                  <SkillsContainer.Skill
                    skillName="Postgres"
                    icon="devicon-postgresql-plain"
                    startDate={new Date(2018, 2, 5)}
                    delay={300}
                  />
                  <SkillsContainer.Skill
                    skillName="MongoDB"
                    icon="devicon-mongodb-plain"
                    startDate={new Date(2019, 2, 0)}
                    delay={300}
                  />
                  <SkillsContainer.Skill
                    skillName="MySql/MS SQL"
                    icon="devicon-mysql-plain"
                    startDate={new Date(2019, 2, 5)}
                    delay={300}
                  />
                </>
              </SkillsContainer>
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
