import React from 'react';

export enum HeaderType {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6
}

type Props = {
  children: string;
  type: HeaderType;
};

const Header = (props: Props): JSX.Element => {
  const { children, type } = props;

  const getSize = (): string => {
    switch (type) {
      case HeaderType.h1: {
        return 'text-2xl';
      }
      case HeaderType.h2: {
        return 'text-3xl';
      }
      case HeaderType.h3: {
        return 'text-4xl';
      }
      case HeaderType.h4: {
        return 'text-5xl';
      }
      case HeaderType.h5: {
        return 'text-6xl';
      }
      case HeaderType.h6: {
        return 'text-8xl';
      }
      default: {
        return 'text-md';
      }
    }
  };

  return <h1 className={`font-bold ${getSize()}`}>{children}</h1>;
};

export default Header;
