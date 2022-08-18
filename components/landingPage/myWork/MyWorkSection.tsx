import React, { useState } from 'react';
import { FadeInSection, SectionTitle } from '../../Shared';
import StackGrid, { Grid, transitions } from 'react-stack-grid';
import { withSize } from 'react-sizeme';
import { FilterType, IProjectInformation } from '../../../interfaces/landingPage.interfaces';
import ProjectCard from './ProjectCard';

const projects: IProjectInformation[] = [
  // {
  //   title: 'Screenshot Tool',
  //   image: '/images/projects/screenshotTool.webp',
  //   description: 'Part of my ongoing dev tool box, A light weight screenshot tool made in C# / JS',
  //   github: 'https://github.com/Patryks1/ScreenshotTool',
  //   tags: [FilterType.Backend, FilterType.Frontend]
  // },
  {
    title: 'Next JS / Tailwindcss template',
    image: '/images/projects/nextJsTemplateTailwindcss.webp',
    description: 'Quick starter template that is made up of Next.js, Mongoose and tailwindcss.',
    github: 'https://github.com/Patryks1/nextjs-tailwindcss-mongoose-template',
    tags: [FilterType.Backend, FilterType.Frontend]
  },
  {
    title: 'Quake Square root',
    image: '/images/projects/quakeCs.webp',
    description:
      'I was curious to see if Quakes fast square root would be accurate and fast in C#, Spoiler its not',
    github: 'https://github.com/Patryks1/Quake-SquareRoot-CS-Test',
    tags: [FilterType.Backend]
  },
  {
    title: 'This portfolio',
    image: '/images/projects/portfolio.webp',
    description:
      'You can view all the code for this portfolio on my github, I also made this website using React and Tailwindcss',
    github: 'https://github.com/Patryks1/patryks-portfolio',
    tags: [FilterType.Backend, FilterType.Frontend]
  },
  {
    title: 'rubik',
    image: '/images/projects/rubik-cube.webp',
    description:
      'This was a quick coding test i did in 3h for TLC, it was a test to see if i could simulate a 2d flat rubik cube with a multi dimensional array.',
    github: 'https://github.com/Patryks1/rubik',
    previewUrl: 'https://rubik-pi.vercel.app/',
    tags: [FilterType.Frontend]
  }
];

const MyWorkSection = ({ size }): JSX.Element => {
  const { width } = size;
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const [grid, setGrid] = useState<Grid>();
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
      <FadeInSection direction="left">
        <SectionTitle title="My Work" isFloatRight={true} />
      </FadeInSection>
      <div className="px-20 flex flex-col space-y-12">
        <FadeInSection
          className="flex space-x-1 md:space-x-3 justify-center lg:justify-end"
          direction="left">
          <h1 className="text-white mt-1 mr-2">Filters:</h1>
          {renderFilter('All', FilterType.All)}
          {renderFilter('Frontend', FilterType.Frontend)}
          {renderFilter('Backend', FilterType.Backend)}
        </FadeInSection>
        <FadeInSection className="h-full w-full">
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
        </FadeInSection>
      </div>
    </section>
  );
};

export default withSize()(MyWorkSection);
