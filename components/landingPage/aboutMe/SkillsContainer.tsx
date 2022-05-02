import React from 'react';
import { FadeInSection } from '../../Shared';

interface ISkillGridProps {
  children: JSX.Element;
  className?: string;
}

interface ISkillTabProps {
  skillName: string;
  icon: string;
  years?: number;
  startDate?: Date;
  delay: number;
}

const SkillsContainer = (props: ISkillGridProps): JSX.Element => {
  const { children, className } = props;
  return (
    <FadeInSection
      className={`grid grid-cols-2 lg:grid-cols-4 gap-1 px-20 font-semibold ${className}`}>
      {children}
    </FadeInSection>
  );
};

const Skill = (props: ISkillTabProps): JSX.Element => {
  const { skillName, icon, years, delay, startDate } = props;

  let yearsWithSkill = years;

  if (startDate) {
    const difMs = Date.now() - startDate?.getTime();
    const date = new Date(difMs);
    yearsWithSkill = Math.abs(date.getUTCFullYear() - 1970);
  }

  return (
    <FadeInSection delay={delay} className="flex flex-col hover:opacity-75" direction="left">
      <i className={`${icon} text-4xl`}></i>
      <div className="flex flex-col">
        <span>{skillName}</span> <span>({yearsWithSkill} years)</span>
      </div>
    </FadeInSection>
  );
};

SkillsContainer.Skill = Skill;

export default SkillsContainer;
