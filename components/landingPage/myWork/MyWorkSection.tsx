import React, { useState, useRef } from 'react';
import { SectionTitle } from '../../Shared';
import StackGrid, { transitions } from 'react-stack-grid';
import { useEffect } from 'react';

interface IProjectInformation {
  title: string;
  url?: string;
  description: string;
  tags: FilterType[];
  image?: string;
  github?: string;
}

enum FilterType {
  All,
  Frontend,
  Backend
}

const projects: IProjectInformation[] = [
  {
    title: 'Next js / Tailwindcss / pReact / Mongoose template',
    image:
      'https://images.unsplash.com/photo-1606787620651-3f8e15e00662?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    description: 'Something',
    tags: [FilterType.Frontend, FilterType.Backend]
  },
  {
    title: 'Quake SQRT',
    image:
      'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    description: 'Something',
    tags: [FilterType.Backend]
  },
  {
    title: 'Math game',
    image:
      'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    description: 'Something',
    tags: [FilterType.Backend]
  },
  {
    title: 'Desktop widgets',
    image:
      'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    description: 'Something',
    tags: [FilterType.Backend]
  }
];

const MyWorkSection = (): JSX.Element => {
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const [grid, setGrid] = useState<any>();
  const [columnWidth, setColumnWidth] = useState<string>('25%');
  const { scaleDown } = transitions;

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onResize = (): void => {
    if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
      setColumnWidth('25%');
    }

    if (window.innerWidth >= 640 && window.innerWidth <= 1024) {
      setColumnWidth('50%');
    }

    if (window.innerWidth < 640) {
      setColumnWidth('100%');
      return;
    }
  };

  const changeFilter = (filterType: FilterType): void => {
    const newFilterType = filter === filterType ? FilterType.All : filterType;
    setFilter(newFilterType);
    grid.updateLayout();
  };

  const renderFilter = (filterName: string, filterType: FilterType): JSX.Element => (
    <button
      className={`box relative top-0 left-0 p-2 ${filter === filterType ? 'active' : null}`}
      onClick={() => changeFilter(filterType)}>
      <div className="corner_bottom_right"></div>
      <h1>{filterName}</h1>
    </button>
  );

  const renderProjectCard = (project: IProjectInformation, key: number): JSX.Element => (
    <figure key={`project-${key}`}>
      <img src={project.image} alt="project_pic" />
      <h1>{project.title}</h1>
      <h1>{project.description}</h1>
    </figure>
  );

  return (
    <section className="container mx-auto h-screen">
      <SectionTitle title="My Work" isFloatRight={true} />
      <div className="px-20 flex flex-col space-y-12">
        <div className="flex space-x-1 md:space-x-4 justify-center lg:justify-end">
          <h1 className="text-white mt-1 mr-2">Filters:</h1>
          {renderFilter('All', FilterType.All)}
          {renderFilter('Frontend', FilterType.Frontend)}
          {renderFilter('Backend', FilterType.Backend)}
        </div>
        <StackGrid
          itemComponent="figure"
          columnWidth={columnWidth}
          gridRef={(grid) => setGrid(grid)}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}>
          {projects.map((project: IProjectInformation, index: number) => {
            if (
              (filter !== FilterType.All && project.tags.includes(filter)) ||
              filter === FilterType.All
            ) {
              return renderProjectCard(project, index);
            }
          })}
        </StackGrid>
      </div>
    </section>
  );
};

export default MyWorkSection;
