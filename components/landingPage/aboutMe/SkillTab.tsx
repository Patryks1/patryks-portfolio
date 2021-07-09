import React from 'react';

interface ISkillTabProps {
  skillName: string;
  years: number;
}

const SkillTab = (props: ISkillTabProps): JSX.Element => {
  const { skillName, years } = props;
  return (
    <div className="box relative top-0 left-0 w-full p-2">
      <div className="corner_bottom_right"></div>
      {skillName} <br /> <span className="font-bold">{years} Years</span>
    </div>
  );
};

export default SkillTab;
