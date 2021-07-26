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
          contentPoints={[
            'Windows drivers',
            'Windows applications',
            'Content management systems',
            'REST Apis',
            'PHP dashboard development'
          ]}
          techTools={['C/C++', 'Trello', 'Linux', 'XML', 'WinForms', 'Driver']}
        />
        <Experience
          startDate="2018"
          endDate="Current"
          position="right"
          job="Aviva"
          jobTitle="Full stack software developer"
          contentPoints={[
            'Lead Developer on a new project made from the ground up.',
            'Full stack developer',
            'Assisting and supporting colleagues/apprentices.',
            'Agile principals',
            'Code Reviews',
            'Sprint planning',
            'Three amigos'
          ]}
          techTools={[
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
