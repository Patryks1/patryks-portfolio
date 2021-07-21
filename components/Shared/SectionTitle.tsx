import React from 'react';

interface ISectionTitle {
  title: string;
  isFloatRight?: boolean;
}
const SectionTitle = (props: ISectionTitle): JSX.Element => {
  const { title, isFloatRight } = props;

  return (
    <h1
      className={`text-primary text-5xl font-bold text-center ${
        isFloatRight ? 'lg:text-right' : 'lg:text-left'
      } pb-16`}>
      {title}
    </h1>
  );
};

export default SectionTitle;
