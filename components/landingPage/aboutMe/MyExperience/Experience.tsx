import React from 'react';

interface IExperienceProps {
  startDate: string;
  endDate: string;
  position: 'left' | 'right';
  job: string;
  jobTitle?: string;
  contentPoints: string[];
  techTools: string[];
}

const Experience = (props: IExperienceProps): JSX.Element => {
  const { startDate, endDate, position, jobTitle, job, contentPoints, techTools } = props;
  const isLeftPosition: boolean = position === 'left';

  const renderTag = (value: string): JSX.Element => (
    <h1
      className="px-2 m-1 bg-black text-white rounded-md hover:opacity-80 leading-loose cursor-pointer"
      key={value.replace(/\s/g, '')}>
      {value}
    </h1>
  );

  const renderLeft = (): JSX.Element => (
    <div className="flex flex-col-reverse md:flex-row-reverse md:contents">
      <div className="bg-secondary-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md space-y-1 w-full">
        <ul className="list-disc text-left ml-4">
          {contentPoints.map((point, index) => (
            <li key={`key-${index}`}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap -m-1">{techTools.map((tag) => renderTag(tag))}</div>
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10 hidden md:block">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-secondary-500 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary-500 shadow"></div>
      </div>
      <div className="col-start-6 col-end-10 relative h-full flex items-center justify-center md:justify-start">
        <div className="flex flex-col">
          <h1>{job}</h1>
          <h1>{jobTitle}</h1>
          <h1>{`${startDate} - ${endDate}`}</h1>
        </div>
      </div>
    </div>
  );

  const renderRight = (): JSX.Element => (
    <div className="flex flex-col md:flex-row md:contents">
      <div className="col-start-1 col-end-5 relative h-full flex items-center justify-center md:justify-end">
        <div className="flex flex-col">
          <h1>{job}</h1>
          <h1>{jobTitle}</h1>
          <h1>{`${startDate} - ${endDate}`}</h1>
        </div>
      </div>
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative hidden md:block">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-secondary-500 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary-500 shadow"></div>
      </div>
      <div className="bg-secondary-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md space-y-1 w-full">
        <ul className="list-disc text-left ml-4">
          {contentPoints.map((point, index) => (
            <li key={`key-${index}`}>{point}</li>
          ))}
        </ul>
        <div className="flex space-x-1 flex-wrap space-y-1">
          {techTools.map((tag) => renderTag(tag))}
        </div>
      </div>
    </div>
  );

  return isLeftPosition ? renderLeft() : renderRight();
};

export default Experience;
