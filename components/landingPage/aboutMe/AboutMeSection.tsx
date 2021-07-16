import React from 'react';
import { SectionTitle, FadeInSection } from '../../Shared';
import SkillGrid from './SkillGrid';
import SkillTab from './SkillTab';
import ToolsScene from './tools/ToolsScene';

const AboutMeSection = (): JSX.Element => {
  return (
    <section className="container mx-auto space-y-6 overflow-hidden pt-44">
      <FadeInSection>
        <SectionTitle title="About Me" />
      </FadeInSection>
      <div className="flex flex-col lg:flex-row text-center">
        <FadeInSection className="flex flex-col flex-shrink-0 space-y-4">
          <img
            className="w-80 h-80 object-center rounded-full mx-auto"
            src="./images/profile_pic.jpg"
            alt="profile_pic"
          />
          <h1 className="font-semibold">Patryk Slowinski</h1>
        </FadeInSection>

        <div className="flex flex-col mt-10 lg:mt-0 space-y-10">
          <FadeInSection className="px-5 lg:px-32">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat minus,
              consequuntur hic sapiente rerum veniam, velit, natus cumque magni nihil tenetur
              officia iure dicta quia quas fuga aliquid vero?
            </p>
          </FadeInSection>
          <FadeInSection className="flex flex-col">
            <h1 className="text-left px-20 text-pink-500 font-bold mb-2 flex justify-end text-xl">
              Skills
            </h1>
            <SkillGrid className="px-20">
              <SkillTab skillName="C# / ASP.NET" years={3} />
              <SkillTab skillName="JS / TS" years={2} />
              <SkillTab skillName="Node / React" years={2} />
              <SkillTab skillName="Next.js / Express.js" years={3} />
            </SkillGrid>
            <SkillGrid className="mt-4">
              <SkillTab skillName="Redis / Postgress" years={3} />
              <SkillTab skillName="MongoDB / MySql" years={3} />
              <SkillTab skillName="HTML / CSS / SCSS" years={3} />
              <SkillTab skillName="Redux / Tailwind" years={2} />
            </SkillGrid>
            <SkillGrid className="mt-4">
              <SkillTab skillName="AWS / Azure" years={3} />
              <SkillTab skillName="UT / BDD / TDD" years={3} />
              <SkillTab skillName="Rest / Soap" years={4} />
              <SkillTab skillName="XML / JSON" years={4} />
            </SkillGrid>
          </FadeInSection>
          <FadeInSection className="flex flex-col">
            <h1 className="text-left px-20 text-pink-500 font-bold mb-2 text-xl">Tools</h1>

            <ToolsScene />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
