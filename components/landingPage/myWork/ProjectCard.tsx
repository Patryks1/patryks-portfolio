import React from 'react';
import { Grid } from 'react-stack-grid';
import { IProjectInformation } from '../../../interfaces/landingPage.interfaces';

interface IProjectCardProps {
  project: IProjectInformation;
  key: string;
  grid: Grid;
}

const ProjectCard = (props: IProjectCardProps): JSX.Element => {
  const { project } = props;

  const renderProjectDetail = (side: string): JSX.Element => (
    <div className={`project_card__${side}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-700 flex flex-col p-2 justify-between">
        <h1>{project.description}</h1>
        <button className="justify-end p-2 bg-secondary-500 rounded-lg">View more</button>
      </div>
    </div>
  );

  return (
    <div
      className="overflow-hidden relative w-full h-40"
      style={{ backgroundImage: `url(${project.image})`, objectFit: 'contain' }}>
      {renderProjectDetail('right')}
      {renderProjectDetail('left')}
      {renderProjectDetail('top')}
      {renderProjectDetail('bottom')}
    </div>
  );
};

/*
enum DirectionType {
  left,
  right,
  top,
  bottom
}

const ProjectCard = (props: IProjectCardProps): JSX.Element => {
  const { project, grid, size } = props;

  const [isShowingDetail, setIsShowingDetail] = useState<boolean>(false);
  const overlayRef = useRef<HTMLDivElement>();
  const boxRef = useRef<HTMLDivElement>();

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

  const getOffset = (el) => {
    let _x = 0;
    let _y = 0;

    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }

    return { top: _y, left: _x };
  };

  const getDirection = (event: React.MouseEvent<HTMLDivElement>): DirectionType => {
    const boundingBox = boxRef.current.getBoundingClientRect();
    console.log(boundingBox);
    const x: number = event.pageX - boxRef.current.offsetLeft;
    const y: number = window.screenTop + boundingBox.top;

    const w: number = boxRef.current.clientWidth;
    const h: number = boxRef.current.clientHeight;
    console.log(y, boundingBox.top, window.screenTop, h);

    const topDirection: number = distMetric(x, y, w / 2, 0);
    const bottomDirection: number = distMetric(x, y, w / 2, h);
    const leftDirection: number = distMetric(x, y, 0, h / 2);
    const rightDirection: number = distMetric(x, y, w, h / 2);
    const min = Math.min(topDirection, bottomDirection, leftDirection, rightDirection);

    switch (min) {
      case leftDirection:
        return DirectionType.left;
      case rightDirection:
        return DirectionType.right;
      case topDirection:
        return DirectionType.top;
      case bottomDirection:
        return DirectionType.bottom;
    }
  };

  const distMetric = (x: number, y: number, x2: number, y2: number): number => {
    const xDiff: number = x - x2;
    const yDiff: number = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const onMouseEnter = (event: React.MouseEvent<HTMLDivElement>): void => {
    const direction = getDirection(event);

    switch (direction) {
      case DirectionType.left:
        overlayRef.current.style.top = '0%';
        overlayRef.current.style.left = '-100%';
        gsap.to(overlayRef.current, { duration: 0.5, left: '0%' });
        break;
      case DirectionType.right:
        overlayRef.current.style.top = '0%';
        overlayRef.current.style.left = '100%';
        gsap.to(overlayRef.current, { duration: 0.5, left: '0%' });
        break;
      case DirectionType.top:
        overlayRef.current.style.top = '-100%';
        overlayRef.current.style.left = '0%';
        gsap.to(overlayRef.current, { duration: 0.5, top: '0%' });
        break;
      case DirectionType.bottom:
        overlayRef.current.style.top = '100%';
        overlayRef.current.style.left = '0%';
        gsap.to(overlayRef.current, { duration: 0.5, top: '0%' });
        break;
    }
  };

  const onMouseLeave = (event: React.MouseEvent<HTMLDivElement>): void => {
    const direction = getDirection(event);

    switch (direction) {
      case DirectionType.left:
        gsap.to(overlayRef.current, { duration: 0.5, left: '-100%' });
        break;
      case DirectionType.right:
        gsap.to(overlayRef.current, { duration: 0.5, left: '100%' });
        break;
      case DirectionType.top:
        gsap.to(overlayRef.current, { duration: 0.5, top: '-100%' });
        break;
      case DirectionType.bottom:
        gsap.to(overlayRef.current, { duration: 0.5, top: '100%' });
        break;
    }
  };

  return (
    <div
      className="boxes w-64 h-32"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={boxRef}>
      <Image src={project.image} alt="project_pic" layout="fill" className="object-fill" />
      <div className="overlay" ref={overlayRef}></div>
    </div>
  );
};
*/

export default ProjectCard;
