import React from 'react';
import { SectionTitle } from '../../Shared';

const MyWorkSection = (): JSX.Element => {
  return (
    <section className="container mx-auto h-screen">
      <SectionTitle title="My Work" isFloatRight={true} />
    </section>
  );
};

export default MyWorkSection;
