import React from 'react';
import { FadeInSection } from '../../../Shared';
import Experience from './Experience';

const MyExperience = (): JSX.Element => {
  return (
    <FadeInSection className="flex flex-col" direction="left">
      <h1 className="px-20 text-primary font-bold mb-2 flex justify-end text-xl">Experience</h1>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        <Experience
          startDate="2015"
          endDate="2018"
          position="left"
          jobTitle="Software developer"
          job="Freelancer"
          content="Lorem"
          tags={['C/C++', 'Trello', 'Linux', 'XML', 'WinForms', 'Driver']}
        />
        <Experience
          startDate="2018"
          endDate="Current"
          position="right"
          job="Aviva"
          jobTitle="Full stack software developer"
          content="Lorem"
          tags={[
            'ASP.NET/C#',
            'TS / JS',
            'React',
            'Redux',
            'Azure',
            'Postgres',
            'Jira',
            'GIT',
            'REST',
            'CQRS',
            'SEQ',
            'JSON',
            'SOLID',
            'TDD / BDD',
            'and more'
          ]}
        />
      </div>
    </FadeInSection>
  );
};

export default MyExperience;
