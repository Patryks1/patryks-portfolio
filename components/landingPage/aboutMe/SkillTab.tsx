import React from 'react';
import { FadeInSection } from '../../Shared';

interface ISkillTabProps {
  skillName: string;
  icon: string;
  years: number;
  delay: number;
}

const SkillTab = (props: ISkillTabProps): JSX.Element => {
  const { skillName, icon, years, delay } = props;
  return (
    <FadeInSection delay={delay} className="flex flex-col hover:opacity-75" direction="left">
      <i className={`${icon} text-4xl`}></i>
      <h1>
        {skillName} <br /> ({years} Years)
      </h1>
    </FadeInSection>
  );
};

export default SkillTab;
