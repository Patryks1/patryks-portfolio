import React from 'react';
import { FadeInSection } from '../../../Shared';
import Experience, { IExperience } from './Experience';

const Experiences: IExperience[] = [
  {
    startDate: '2015',
    endDate: '2018',
    position: 'left',
    jobTitle: 'Software developer',
    job: 'Freelancer',
    contentPoints: [
      'Windows drivers',
      'Windows applications',
      'Content management systems',
      'REST Apis',
      'PHP dashboard development'
    ],
    techTools: ['C/C++', 'Trello', 'Linux', 'XML', 'WinForms', 'Driver']
  },
  {
    startDate: '2018',
    endDate: '2021',
    position: 'right',
    job: 'Aviva',
    jobTitle: 'Full stack software developer',
    contentPoints: [
      'Lead Developer on a new project made from the ground up.',
      'Full stack developer',
      'Assisting and supporting colleagues/apprentices.',
      'Agile principals',
      'Code Reviews',
      'Sprint planning',
      'Three amigos'
    ],
    techTools: [
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
    ]
  },
  {
    startDate: '2021',
    endDate: '2021',
    position: 'left',
    job: 'Spark Universe (Contract)',
    jobTitle: 'Full stack software developer',
    contentPoints: [
      'Creating two optimized desktop applications using Tauri, React and Rust with focus on minimal ram usage and security.',
      'Created a custom UI library tailored to the theme using React, Rollup and Storybook for documentation.',
      'Code Reviews',
      'Working with Tauri, Rust, React and redux. In order to create a desktop applications'
    ],
    techTools: [
      'Tauri',
      'TS / JS',
      'React',
      'Redux',
      'Gitlab',
      'Linear',
      'GIT',
      'REST',
      'Tailwindcss',
      'JSON',
      'Rust',
      'and more'
    ]
  },
  {
    startDate: '2021',
    endDate: 'Current',
    position: 'right',
    job: 'Advanced People Strategies',
    jobTitle: 'Senior Software Engineer',
    contentPoints: [
      'Created a custom React component library using react, rollup and storybook.',
      'Setup CI/CD pipelines in Azure devops.',
      'Setup Azure user permissions and policies.',
      'Worked with ISO 27001 security and GDPR standards.',
      'Worked in agile 2 week sprints. (Scrum)',
      'Code reviews',
      'Mentored an junior developer.',
      'Setup Loki and grafana self host logging & metrics.',
      'Umbraco (C#, CMS).',
      'Hiring and onboarding new developers.',
      'Created a node.js api, that would SSR a react application and generate a report using puppeteer that matched the one user has been configuring in previews. saving a lot of time when creating new report templates that business provides'
    ],
    techTools: [
      'ASP.NET/C# Core 5+',
      'TS / JS',
      'React',
      'Redux',
      'Azure',
      'MS SQL',
      'GIT',
      'REST',
      'CQRS',
      'SEQ',
      'JSON',
      'SOLID',
      'Umbraco',
      'Tailwindcss',
      'Storybook',
      'Puppeteer',
      'Loki',
      'and more'
    ]
  }
];

const MyExperience = (): JSX.Element => {
  return (
    <FadeInSection className="flex flex-col px-8" direction="left">
      <h1 className="px-20 text-primary font-bold mb-2 flex justify-center md:justify-end text-xl">
        Experience
      </h1>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        {Experiences.map((experience) => (
          <Experience key={experience.job} {...experience} />
        ))}
      </div>
    </FadeInSection>
  );
};

export default MyExperience;
