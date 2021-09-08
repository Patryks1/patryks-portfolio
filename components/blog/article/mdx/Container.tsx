import * as React from 'react';

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  className: string;
};

const Container = (props: Props): JSX.Element => {
  const { children, className } = props;
  return <div className={`px-5 py-2 ${className}`}>{children}</div>;
};

export default Container;
