import React, { useState } from 'react';
import { SectionTitle } from '../../Shared';
import StackGrid, { transitions } from 'react-stack-grid';
import { withSize } from 'react-sizeme';
import { FilterType, IProjectInformation } from '../../../interfaces/landingPage.interfaces';
import ProjectCard from './ProjectCard';

const projects: IProjectInformation[] = [
  {
    title: 'Screenshot Tool',
    image: '/images/projects/screenshotTool.png',
    description: 'Part of my ongoing dev tool box, A light weight screenshot tool made in C# / JS',
    github: 'https://github.com/Patryks1/ScreenshotTool',
    tags: [FilterType.Backend, FilterType.Frontend]
  },
  {
    title: 'Next JS / Tailwindcss template',
    image: '/images/projects/nextJsTemplateTailwindcss.png',
    description: 'Quick starter template that is made up of Next.js, Mongoose and tailwindcss.',
    github: 'https://github.com/Patryks1/nextjs-tailwindcss-mongoose-template',
    tags: [FilterType.Backend, FilterType.Frontend]
  },
  {
    title: 'Quake Square root',
    image: '/images/projects/quakeCs.png',
    description:
      'I was curious to see if Quakes fast square root would be accurate and fast in C#, Spoiler its not',
    github: 'https://github.com/Patryks1/Quake-SquareRoot-CS-Test',
    tags: [FilterType.Backend]
  },
  {
    title: 'Smart Clock (WIP)',
    image: '/images/projects/screenshotTool.png',
    description: 'Work in progress',
    tags: [FilterType.Backend, FilterType.Frontend, FilterType.Hardware],
    github: 'https://github.com/Patryks1/SmartClock'
  },
  {
    title: 'Listivo (WIP)',
    image: '/images/projects/listivo.png',
    description: 'Work in progress',
    github: 'https://github.com/Patryks1/listivo',
    tags: [FilterType.Backend, FilterType.Frontend]
  }
];

const MyWorkSection = ({ size }): JSX.Element => {
  const { width } = size;
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const [grid, setGrid] = useState<any>();
  const { scaleDown } = transitions;

  const resolveColumnWidth = (): string => {
    if (width >= 1024) {
      return '25%';
    }

    if (width >= 640 && width <= 1024) {
      return '50%';
    }

    return '100%';
  };

  const changeFilter = (filterType: FilterType): void => {
    const newFilterType = filter === filterType ? FilterType.All : filterType;
    setFilter(newFilterType);

    setTimeout(() => {
      grid?.updateLayout();
    }, 100);
  };

  const renderFilter = (filterName: string, filterType: FilterType): JSX.Element => (
    <button
      className={`box relative top-0 left-0 p-2 ${filter === filterType ? 'active' : null}`}
      onClick={() => changeFilter(filterType)}>
      <div className="corner_bottom_right"></div>
      <h1>{filterName}</h1>
    </button>
  );

  return (
    <section className="container mx-auto h-full">
      <SectionTitle title="My Work" isFloatRight={true} />
      <div className="px-20 flex flex-col space-y-12">
        <div className="flex space-x-1 md:space-x-4 justify-center lg:justify-end">
          <h1 className="text-white mt-1 mr-2">Filters:</h1>
          {renderFilter('All', FilterType.All)}
          {renderFilter('Frontend', FilterType.Frontend)}
          {renderFilter('Backend', FilterType.Backend)}
          {renderFilter('Hardware', FilterType.Hardware)}
        </div>
        <div className="h-full w-full">
          <StackGrid
            monitorImagesLoaded
            columnWidth={resolveColumnWidth()}
            gridRef={(g) => setGrid(g)}
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}>
            {projects.map((project: IProjectInformation, index: number) => {
              if (filter === FilterType.All || project.tags.includes(filter)) {
                return <ProjectCard key={`key-${index}`} project={project} grid={grid} />;
              }
            })}
          </StackGrid>
        </div>
      </div>
    </section>
  );
};

export default withSize()(MyWorkSection);
