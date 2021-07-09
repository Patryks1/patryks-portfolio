import React from 'react';

interface ISkillGridProps {
  children: JSX.Element | JSX.Element[];
  className: string;
}

const SkillGrid = (props: ISkillGridProps): JSX.Element => {
  const { children, className } = props;
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-1 px-20 font-semibold ${className}`}>
      {children}
    </div>
  );
};

export default SkillGrid;
