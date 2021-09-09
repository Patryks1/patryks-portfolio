import * as React from 'react';

type Props = {
  src: string;
  alt: string;
  position?: 'left' | 'right' | 'middle';
};

const Picture = (props: Props): JSX.Element => {
  const { src, alt, position, ...extraProps } = props;

  const getPositionCss = (): string => {
    return position === 'right' ? 'justify-end' : 'justify-center';
  };

  if (position) {
    return (
      <div className={`flex ${position !== 'left' && getPositionCss()}`}>
        <img src={src} alt={alt} {...extraProps} />
      </div>
    );
  }

  return <img src={src} alt={alt} {...extraProps} />;
};

export default Picture;
