import React from 'react';
import { FadeInSection } from '../../Shared';

interface ISkillGridProps {
  children: JSX.Element | JSX.Element[];
  className: string;
}

const SkillGrid = (props: ISkillGridProps): JSX.Element => {
  const { children, className } = props;
  return (
    <FadeInSection
      className={`grid grid-cols-2 lg:grid-cols-4 gap-1 px-20 font-semibold ${className}`}>
      {children}
    </FadeInSection>
  );
};

export default SkillGrid;
