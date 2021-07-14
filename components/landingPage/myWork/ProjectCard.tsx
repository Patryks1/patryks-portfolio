import React from 'react';
import { useState } from 'react';
import { IProjectInformation } from '../../../interfaces/landingPage.interfaces';
import Image from 'next/image';
import { FadeInSection } from '../../Shared';

interface IProjectCardProps {
  project: IProjectInformation;
  key: string;
  grid: any;
}

const ProjectCard = (props: IProjectCardProps): JSX.Element => {
  const { project, grid } = props;
  const [isShowingDetail, setIsShowingDetail] = useState<boolean>(false);

  const renderProjectDetail = (): JSX.Element => (
    <div className="absolute top-0 left-0">
      <h1>{project.description}</h1>
    </div>
  );

  const onProjectCardClicked = (): void => {
    setIsShowingDetail(!isShowingDetail);

    setTimeout(() => {
      grid?.updateLayout();
    }, 100);
  };

  return (
    <FadeInSection className="w-full">
      <button type="button" onClick={() => onProjectCardClicked()} className="relative w-full">
        <Image
          src={project.image}
          alt="project_pic"
          layout="responsive"
          height={65}
          width={100}
          className="object-fill w-full h-full"
        />
        {!isShowingDetail && (
          <h1 className="absolute top-0 w-full h-full flex justify-center items-center">
            <span className="w-full py-1 bg-pink-500">{project.title}</span>
          </h1>
        )}
        {isShowingDetail && renderProjectDetail()}
      </button>
    </FadeInSection>
  );
};

export default ProjectCard;
