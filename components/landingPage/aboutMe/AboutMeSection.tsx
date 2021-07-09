import React from 'react';
import SkillTab from './SkillTab';

const AboutMeSection = (): JSX.Element => {
  return (
    <section className="container mx-auto space-y-6 overflow-hidden pt-44">
      <h1 className="text-pink-500 text-5xl font-bold text-center lg:text-left pb-16">About Me</h1>
      <div className="flex flex-col lg:flex-row text-center">
        <div className="flex flex-col flex-shrink-0 space-y-4">
          <img
            className="w-80 h-80 rounded-full mx-auto"
            src="https://images.unsplash.com/photo-1625320014712-cc333e4e93a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="profile_pic"
          />
          <h1 className="font-semibold">Patryk Slowinski</h1>
        </div>

        <div className="flex flex-col mt-10 lg:mt-0">
          <p className="px-5 lg:px-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat minus,
            consequuntur hic sapiente rerum veniam, velit, natus cumque magni nihil tenetur officia
            iure dicta quia quas fuga aliquid vero?
          </p>
          <div className="mt-10">
            <h1 className="text-left px-20 text-pink-500 font-bold mb-2">Skills</h1>
            <div className=" grid grid-cols-2 gap-1 lg:grid-cols-4 px-20 font-semibold">
              <SkillTab skillName="C# / ASP.NET" years={3} />
              <SkillTab skillName="JS / TS" years={2} />
              <SkillTab skillName="Node / React" years={2} />
              <SkillTab skillName="Next.js / Express.js" years={3} />
            </div>
            <div className="grid grid-cols-2 gap-1 lg:grid-cols-4 px-20 mt-4 font-semibold">
              <SkillTab skillName="Redis / Postgress" years={3} />
              <SkillTab skillName="MongoDB / MySql" years={3} />
              <SkillTab skillName="AWS / Azure" years={3} />
              <SkillTab skillName="UT / BDD / TDD" years={3} />
            </div>
            <div className="grid grid-cols-2 gap-1 lg:grid-cols-4 px-20 mt-4 font-semibold">
              <SkillTab skillName="Rest / Soap" years={4} />
              <SkillTab skillName="XML / JSON" years={4} />
              <SkillTab skillName="MongoDB / MySql" years={3} />
              <SkillTab skillName="Redis / Postgress" years={3} />
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-left px-20 text-pink-500 font-bold mb-2">Tools</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
