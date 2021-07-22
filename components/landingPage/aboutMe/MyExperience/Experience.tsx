import React from 'react';

interface IExperienceProps {
  startDate: string;
  endDate: string;
  position: 'left' | 'right';
  job: string;
  jobTitle?: string;
  content: string;
  tags: string[];
}

const Experience = (props: IExperienceProps): JSX.Element => {
  const { startDate, endDate, position, jobTitle, job, content, tags } = props;
  const isLeftPosition: boolean = position === 'left';

  const renderTag = (value: string): JSX.Element => (
    <h1
      className="px-2 m-1 bg-black text-white rounded-md hover:opacity-80 leading-loose cursor-pointer"
      key={value.replace(/\s/g, '')}>
      {value}
    </h1>
  );

  const renderLeft = (): JSX.Element => (
    <div className="flex flex-row-reverse md:contents">
      <div className="bg-secondary-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md space-y-1 w-full">
        <h3 className="font-semibold text-lg">{`${job} (${startDate}-${endDate})`}</h3>
        <p className="text-center">{jobTitle}</p>
        <p className="text-justify">{content}</p>
        <div className="flex flex-wrap -m-1">{tags.map((tag) => renderTag(tag))}</div>
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10 ">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-secondary-500 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary-500 shadow"></div>
      </div>
    </div>
  );

  const renderRight = (): JSX.Element => (
    <div className="flex md:contents">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-secondary-500 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary-500 shadow"></div>
      </div>
      <div className="bg-secondary-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md space-y-1 w-full">
        <h3 className="font-semibold text-lg">{`${job} (${startDate}-${endDate})`}</h3>
        <p className="text-center">{jobTitle}</p>
        <p className="text-justify">{content}</p>
        <div className="flex space-x-1 flex-wrap space-y-1">
          {tags.map((tag) => renderTag(tag))}
        </div>
      </div>
    </div>
  );

  return isLeftPosition ? renderLeft() : renderRight();
};

export default Experience;
